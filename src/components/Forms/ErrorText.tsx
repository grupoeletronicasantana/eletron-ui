import { ErrorTextContainer } from "./styles";

import { ErrorMessage } from "@hookform/error-message";

interface ErrorTextProps {
  name: string;
}

function ErrorText({ name }: ErrorTextProps) {
  return <ErrorMessage name={name} as={ErrorTextContainer} />;
}

export { ErrorText };
export type { ErrorTextProps };
