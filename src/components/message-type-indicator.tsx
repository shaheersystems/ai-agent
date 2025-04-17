type MessageIndicatorPropsType = {
  role: "user" | "system" | "assistant" | "data";
};

const MessageTypeIndicator = ({ role }: MessageIndicatorPropsType) => {
  return <div className="py-4">{role === "user" ? "User: " : "AI:"}</div>;
};

export default MessageTypeIndicator;
