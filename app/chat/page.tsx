"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, ComponentBooleanIcon } from "@radix-ui/react-icons";
import { useChat } from "ai/react";

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <section className="pt-12 pb-32">
      <div className="max-w-3xl m-auto text-left pb-12 px-4">
        <h1 className="font-bold text-2xl md:text-4xl">
          Start your conversation with Nuro.
        </h1>
        <p className="font-medium text-sm md:text-base text-foreground/60 max-w-lg pt-6">
          With Nuro, you can enjoy smart, friendly, and convenient communication
          anytime, anywhere.
        </p>
      </div>
      <div className="border-t border-border/40 bg-foreground/10">
        <div className="max-w-3xl mx-auto py-6 px-4 flex">
          <ComponentBooleanIcon className="min-w-[1.4rem] min-h-[1.4rem]" />
          <span className="ml-3 text-sm md:text-base">
            Hello, ask me anything!
          </span>
        </div>
      </div>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${
            message.role === "assistant" && " bg-foreground/10"
          } border-t border-border/40 px-4 text-sm md:text-base`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            {message.role === "assistant" && (
              <ComponentBooleanIcon className="min-w-[1.4rem] min-h-[1.4rem]" />
            )}
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        className="fixed inset-x-0 bottom-10 flex max-w-3xl m-auto space-x-2 px-4"
      >
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="How can I help you today?"
          className="bg-background px-4 py-8 shadow-md"
        />
        <Button size="icon" className="py-8 max-w-14 w-full shadow-md">
          <ArrowRightIcon />
        </Button>
      </form>
    </section>
  );
}
