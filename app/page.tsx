"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({});

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-center text-4xl font-bold">Brutal Grok AI</h1>
      <div className="h-96 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-2">
            <p className="text-primary font-bold">
              {message.role === "user" ? "User:" : "AI:"}
            </p>
            <p className="text-primary">{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <Input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <div>
          {!isLoading && <Button type="submit">Submit</Button>}
          {isLoading && (
            <Button variant={"destructive"}>
              <Spinner />
              Stop
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"
        role="status"
      ></div>
    </div>
  );
}
