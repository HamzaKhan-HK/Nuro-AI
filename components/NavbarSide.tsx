import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export default function NavbarSide() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="sm:hidden -mr-4" />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader className="pt-2">
          <SheetDescription className="flex flex-col gap-y-2.5">
            <Link
              href={"/chat"}
              className="text-foreground font-medium text-sm inline-flex justify-start"
            >
              Demo
            </Link>
            <Link
              href={"https://www.github.com"}
              target="_blank"
              className="text-foreground font-medium text-sm inline-flex justify-start"
            >
              Code
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
