import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SignInPricingButton } from "./HandleAuth";
import { Button } from "./ui/button";

interface PricingButtonOptionsProps {
  name: string;
}

export default async function PricingButtonOptions({
  name,
}: PricingButtonOptionsProps) {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <>
          {name === "Enterprise" && (
            <Link
              href={`${process.env.ENTERPRISE_PLAN as string}`}
              className="w-full"
            >
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </Link>
          )}
          {name === "Professional" && (
            <Link
              href={`${process.env.PROFESSIONAL_PLAN as string}`}
              className="w-full"
            >
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </Link>
          )}
          {name === "Standard" && (
            <Link
              href={`${process.env.STANDARD_PLAN as string}`}
              className="w-full"
            >
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </Link>
          )}
        </>
      ) : (
        <SignInPricingButton />
      )}
    </>
  );
}
