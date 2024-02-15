import { authOptions } from "@/lib/authOptions";
import { ComponentBooleanIcon } from "@radix-ui/react-icons";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Login, Logout } from "./HandleAuth";
import NavbarSide from "./NavbarSide";
import { ModeToggle } from "./ThemeToggle";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="w-full bg-foreground flex items-center py-3">
        <p className="container text-background font-medium m-auto text-sm text-center">
          Free trials are available for Standard and Essentials plans.{" "}
          <Link
            href={"/"}
            className="w-full border-b border-border border-dashed"
          >
            Start for free today.
          </Link>
        </p>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <NavbarSide />
            <Link href={"/"}>
              <div className="flex items-center gap-x-1">
                <ComponentBooleanIcon className="h-[1.2rem] w-[1.2rem]" />
                <h1 className="font-extrabold text-lg">Nuro</h1>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-x-4">
              <Link
                href={"/chat"}
                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
              >
                Demo
              </Link>
              <Link
                href={"https://github.com/TheHamzaDev/Nuro-AI"}
                target="_blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm"
              >
                Code
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5">
            {!session ? <Login /> : <Logout session={session} />}
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
