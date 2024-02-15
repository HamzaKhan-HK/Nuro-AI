import { FOOTER_LINKS } from "@/config";
import {
  ComponentBooleanIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <section className="bg-foreground/5 w-full pt-24 pb-10 mt-28">
      <div className="container grid grid-cols-6 pb-24 gap-x-12 lg:gap-x-8 gap-y-14">
        <ComponentBooleanIcon className="h-10 w-10 col-span-6 xl:col-span-1" />
        {FOOTER_LINKS.map((footer) => (
          <div
            key={footer.title}
            className="flex flex-col gap-y-2 text-sm text-foreground/60 font-light min-w-max col-span-6 sm:col-span-2 xl:col-span-1"
          >
            <h4 className="text-foreground text-base font-medium pb-4">
              {footer.title}
            </h4>
            {footer.links.map((link) => (
              <Link href={"/"} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container flex flex-col items-center">
        <Separator />
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-y-8 pt-6">
          <p className="text-foreground/60 font-light text-xs text-center">
            © Copyright 2024. All rights reserved.
          </p>
          <div className="flex gap-x-6 text-foreground/60">
            <TwitterLogoIcon />
            <InstagramLogoIcon />
            <GitHubLogoIcon />
            <LinkedInLogoIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
