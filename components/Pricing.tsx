import { PRICING } from "@/config";
import { formatCurrency } from "@/lib/formatCurrency";
import { CheckIcon } from "@radix-ui/react-icons";
import PricingButtonOptions from "./PricingButtonOptions";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Pricing() {
  return (
    <section className="container flex flex-col items-center gap-y-8 pb-64 scroll-mt-64">
      <Badge
        variant="secondary"
        className="font-medium py-1 shadow-md rounded-full self-center"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Choose the plan that's right for you.
      </Badge>
      <h2 className="font-medium text-2xl md:text-4xl text-center max-w-3xl self-center">
        Our straightforward pricing plans are tailored to meet your needs.
      </h2>
      <div className="mx-auto max-w-full lg:max-w-3xl overflow-x-hidden lg:overflow-x-visible pt-6">
        <div className="relative flex items-center lg:justify-center gap-x-4 overflow-scroll lg:overflow-visible no-scrollbar py-4 lg:px-0">
          {PRICING.map((option) => (
            <Card
              key={option.name}
              className={`${
                option.name === "Enterprise" &&
                "ring-2 ring-inset ring-foreground"
              } min-h-[36rem] min-w-80 flex flex-col items-start justify-between rounded-xl bg-foreground/5 border-none shadow-md flex-1`}
            >
              {option.name === "Enterprise" && (
                <div className="absolute flex justify-center text-background text-xs font-medium self-center -mt-3 bg-foreground rounded-full min-w-28 py-1.5">
                  Best Value
                </div>
              )}
              <div>
                <CardHeader>
                  <CardTitle className="font-bold text-foreground text-2xl pt-4">
                    {option.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 text-sm -mt-5">
                    {option.subhead}
                  </p>
                  <p className="font-bold text-4xl text-foreground pt-12">
                    {formatCurrency(option.pricing)}
                    <span className="text-sm font-normal text-foreground/60">
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col items-start gap-y-4 pt-8">
                    {option.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-x-2">
                        <CheckIcon className="min-w-4 min-h-4" />
                        <p className="text-xs text-foreground/60">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
              <CardFooter className="flex flex-col items-start text-xs w-full">
                <PricingButtonOptions name={option.name} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
