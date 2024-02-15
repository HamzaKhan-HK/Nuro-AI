"use client";

import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BlurredClipPath from "./BlurredClipPath";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <section className="container flex flex-col items-center pt-14 gap-y-8">
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="font-medium py-1 shadow-md rounded-full"
          >
            Find you answers, all in one space.
          </Badge>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-4xl md:text-6xl text-center max-w-3xl">
            Your answer is just one question away.
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-normal text-sm md:text-base text-foreground/60 text-center max-w-lg">
            Nuro allows you to have conversations with our ChatBot. Simply ask a
            question and watch the magic happen.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-4 mt-5"
        >
          <Link href={"/chat"}>
            <Button className="flex gap-x-2 shadow-md w-48 sm:w-auto" size="lg">
              Start For Free <ArrowRightIcon />
            </Button>
          </Link>
          <Link href={"https://www.github.com"} target="_blank">
            <Button
              className="flex gap-x-2 shadow-md w-48 sm:w-auto"
              size="lg"
              variant="secondary"
            >
              <GitHubLogoIcon /> GitHub
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-center -mt-3 text-foreground/60">
            Nuro works wherever you are.{" "}
            <Link
              href={"/chat"}
              className="text-foreground border-b border-foreground border-dashed"
            >
              Try our demo.
            </Link>
          </p>
        </motion.div>
      </section>
      <BlurredClipPath
        paddingBottom="pb-64"
        top="-top-40"
        smallSizeTop="sm:-top-80"
        translateX="-translate-x-1/2"
        rotateDeg="rotate-[30deg]"
        width="w-[36.125rem]"
        smallSizeWidth="sm:w-[72.1875rem]"
        left="left-[calc(50%-11rem)]"
        smallSizeLeft="sm:left-[calc(50%-30rem)]"
      >
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-foreground/5 lg:-m-4 p-4">
                <Image
                  src={"/app-screenshot.png"}
                  alt="Product Preview"
                  width={2126}
                  height={1123}
                  quality={100}
                  className="rounded-md bg-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </BlurredClipPath>
    </>
  );
}
