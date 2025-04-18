"use client";

import Issues from "@/components/issues";
import { Markdown } from "@/components/markdown";
import MessageTypeIndicator from "@/components/message-type-indicator";
import WeatherBlock from "@/components/weather-block";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap space-y-2">
          <MessageTypeIndicator role={message.role} />
          <div className="space-y-2">
            <Markdown>{message.content}</Markdown>
          </div>
          <div>
            {message.parts.map((part) => {
              if (part.type === "tool-invocation") {
                const { state, toolName } = part.toolInvocation;
                if (state === "result") {
                  if (toolName === "weather") {
                    return (
                      <WeatherBlock
                        key={part.toolInvocation.toolCallId}
                        {...part.toolInvocation.result}
                      />
                    );
                  } else if (toolName === "linearIssues") {
                    return (
                      <Issues
                        key={part.toolInvocation.toolCallId}
                        issues={part.toolInvocation.result}
                      />
                    );
                  }
                }
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
