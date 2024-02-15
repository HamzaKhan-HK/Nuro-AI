import type { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.WEBHOOK_SECRET as string;

// included to avoid 'stream.not.readable' error
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("req.headers", req.headers);
    if (req.method !== "POST") {
      return res.status(405).send("Must send POST request only");
    }

    const sig: any = req.headers["stripe-signature"];
    const rawBody = await getRawBody(req);

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (error: any) {
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    console.log("event.type", JSON.stringify(event.type));

    if (event.type === "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        (event.data.object as any).id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      if (!lineItems) return res.status(500).send("Internal Server Error");

      try {
        //save the data
        console.log("Order Fulfilled");
        console.log("data", lineItems.data);
        console.log(
          "Customer Email",
          (event.data.object as any).customer_details.email
        );
        console.log("Created", (event.data.object as any).created);
      } catch (error) {
        console.log("Unable to save order");
      }
    }
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
}
