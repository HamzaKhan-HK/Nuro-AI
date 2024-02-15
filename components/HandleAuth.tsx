"use client";

import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Login() {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
}

interface SessionProps {
  session: any;
}

export function Logout({ session }: SessionProps) {
  const handleClick = () => {
    signOut();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="max-h-8 max-w-8 cursor-pointer">
          <AvatarImage src={session?.user?.image as string} />
          <AvatarFallback>
            <PersonIcon />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col items-start gap-y-0.5">
          <h4 className="text-sm">{session?.user?.name}</h4>
          <p className="text-xs text-foreground/60 font-light">
            {session?.user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleClick} className="felx gap-x-2">
          Sign Out <ExitIcon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SignInPricingButton() {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <Button onClick={handleClick} className="w-full" size="lg">
      Sign In
    </Button>
  );
}
