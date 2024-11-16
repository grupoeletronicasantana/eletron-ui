import {
  LabelContainer,
  LabelErrorWrapper,
  ErrorTextContainer,
  Asterisk,
} from "./styles";

import { ErrorTextProps } from "./ErrorText";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
  children: string;
}

interface LabelErrorProps {
  children: [
    React.ReactElement<LabelProps>,
    React.ReactElement<ErrorTextProps>
  ];
}

function Label({ required, children, ...props }: LabelProps) {
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
export type { LabelProps, LabelErrorProps };
