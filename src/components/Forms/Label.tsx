import {
  LabelContainer,
  LabelErrorWrapper,
  ErrorTextContainer,
  Asterisk,
} from "./styles";

import { ErrorTextProps } from "./ErrorText";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name?: string;
  required?: boolean;
  children: string;
}

interface LabelErrorProps {
  children: React.ReactElement<LabelProps & ErrorTextProps>;
}

function Label({ name, required, children, ...props }: LabelProps) {
  return (
    <LabelContainer {...props}>
      {children} {required && <Asterisk />}
    </LabelContainer>
  );
}

function LabelError({ children }: LabelErrorProps) {
  return <LabelErrorWrapper>{children}</LabelErrorWrapper>;
}

export { Label, LabelError };
export type { LabelProps };
