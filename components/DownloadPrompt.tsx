"use client";

import { ArrowRightIcon, ComponentBooleanIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import BlurredClipPath from "./BlurredClipPath";
import { Button } from "./ui/button";

export default function DownloadPrompt() {
  return (
    <>
      <section className="w-full pb-24">
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="container flex flex-col items-center gap-y-6"
        >
          <ComponentBooleanIcon className="h-10 w-10 text-foreground" />
          <h3 className="font-medium text-2xl md:text-4xl text-foreground text-center max-w-xl">
            Start your creative endeavours with Nuro today.
          </h3>
          <div className="flex flex-col items-center gap-x-2 gap-y-8 mt-5">
            <Link href={"/chat"}>
              <Button className="flex gap-x-2 shadow-md" size="lg">
                Start For Free <ArrowRightIcon />
              </Button>
            </Link>
            <p className="text-xs text-center text-foreground/60">
              Want to talk or get a demo.{" "}
              <Link
                href={"/"}
                className="border-b border-foreground border-dashed text-foreground"
              >
                Get in touch.
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
      <BlurredClipPath
        top="-top-[28rem]"
        translateX="-translate-x-1/2"
        rotateDeg="rotate-[180deg]"
        width="w-[48.125rem]"
        smallSizeWidth="sm:w-[72.1875rem]"
        left="left-[calc(50%-1rem)]"
      />
    </>
  );
}
