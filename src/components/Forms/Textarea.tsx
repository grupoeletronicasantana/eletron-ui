import React from "react";
import { InputErrorWrapper, TextareaContainer } from "./styles";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: "sm" | "md" | "lg";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ size = "md", ...props }, ref) {
    return <TextareaContainer ref={ref} $size={size} {...props} />;
  }
);

export { Textarea };
export type { TextareaProps };
