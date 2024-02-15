"use client";

import { TESTIMONIALS } from "@/config";
import { motion } from "framer-motion";
import BlurredClipPath from "./BlurredClipPath";
import CompanyLogos from "./CompanyLogos";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Testimonials() {
  return (
    <>
      <section className="container flex flex-col items-center gap-y-8 pb-16 overflow-x-hidden">
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="secondary"
            className="font-medium py-1 shadow-md rounded-full self-center"
          >
            Improve your workflow.
          </Badge>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-medium text-2xl md:text-4xl text-center max-w-3xl self-center">
            Nuro lets people move faster, save time and create higher quality
            work.
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-full lg:max-w-3xl overflow-x-hidden lg:overflow-x-visible pt-4"
        >
          <div className="flex items-center lg:justify-center gap-x-4 overflow-scroll lg:overflow-visible no-scrollbar">
            {TESTIMONIALS.map((review) => (
              <Card
                key={review.name}
                className="min-h-96 min-w-80 flex flex-col items-start justify-between rounded-xl bg-foreground/5 border-none shadow-md flex-1"
              >
                <div>
                  <CardHeader>
                    <CardTitle>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={review.imgSrc} alt={review.name} />
                      </Avatar>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/60">
                      {review.review}
                    </p>
                  </CardContent>
                </div>
                <CardFooter className="flex flex-col items-start text-xs gap-y-1">
                  <p className="font-medium">{review.name}</p>
                  <p className="text-foreground/60">{review.occupation}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
      <BlurredClipPath
        top="-top-64"
        smallSizeTop="sm:-top-[32rem]"
        rotateDeg="rotate-[8deg]"
        width="w-[30.125rem]"
        smallSizeWidth="sm:w-[64.1875rem]"
        left="left-[calc(50%-11rem)]"
        smallSizeLeft="sm:left-[calc(50%-11rem)]"
      />
      <motion.div
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CompanyLogos />
      </motion.div>
    </>
  );
}
