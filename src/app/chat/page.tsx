"use client";

import { Markdown } from "@/components/markdown";
import MessageTypeIndicator from "@/components/message-type-indicator";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap space-y-2">
          <MessageTypeIndicator role={message.role} />
          <div className="space-y-2">
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return (
                    <Markdown key={`${message.id}-${i}`}>{part.text}</Markdown>
                  );
                // case "tool-invocation":
                //   return (
                //     <pre key={`${message.id}-${i}`}>
                //       {JSON.stringify(part.toolInvocation, null, 2)}
                //     </pre>
                //   );
              }
            })}
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
