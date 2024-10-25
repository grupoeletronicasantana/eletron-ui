import {
  LabelContainer,
  LabelErrorWrapper,
  ErrorAlertContainer,
  Asterisk,
} from "./styles";

import { ErrorMessage } from "@hookform/error-message";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name?: string;
  required?: boolean;
  withError?: boolean;
  children: string;
}

function Label({ name, required, withError, children, ...props }: LabelProps) {
  return (
    <LabelErrorWrapper>
      <LabelContainer {...props}>
        {children} {required && <Asterisk />}
      </LabelContainer>
      {withError && name && (
        <ErrorMessage name={name} as={ErrorAlertContainer} />
      )}
    </LabelErrorWrapper>
  );
}

export { Label };
