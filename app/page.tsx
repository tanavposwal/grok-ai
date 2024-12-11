"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { useChat } from "ai/react";
import { Bot, User } from "lucide-react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({});

  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <div className="flex gap-4 items-end justify-between">
      <h1 className="text-4xl font-bold">Highly Brutal AI</h1>
      <a href="https://x.com/tanavindev" className="text-xl text-primary/50 hover:text-primary/90 transition-colors" target="_blank" rel="noreferrer">𝕏</a>
      <UserButton />
      </div>
      <div className="h-full overflow-y-auto space-y-2">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-2">
            <div className="flex p-2 rounded-full bg-fuchsia-600 h-fit">
              {message.role === "user" ? (
                <User className="h-5 w-5 text-primary-foreground" />
              ) : (
                <Bot className="h-5 w-5 text-primary-foreground" />
              )}
            </div>
            <p className="text-primary/90 text-lg">{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex w-full gap-2 border-t pt-4">
        <Input
          name="prompt"
          value={input}
          placeholder="Ask me anything..."
          autoComplete="off"
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
