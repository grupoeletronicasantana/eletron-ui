import {
  CardWrapperContainer,
  CardHeaderContainer,
  CardBodyContainer,
  CardFooterContainer,
} from "./styles";

interface CardWrapperProps {
  children: Array<
    React.ReactElement<CardHeaderProps | CardBodyProps | CardFooterProps>
  >;
}

interface CardHeaderProps {
  children: string;
}

interface CardBodyProps {
  children: React.ReactNode;
}

interface CardFooterProps {
  children: string;
}

function CardWrapper({ children }: CardWrapperProps) {
  return <CardWrapperContainer>{children}</CardWrapperContainer>;
}

function CardHeader({ children }: CardHeaderProps) {
  return <CardHeaderContainer>{children}</CardHeaderContainer>;
}

function CardBody({ children }: CardBodyProps) {
  return <CardBodyContainer>{children}</CardBodyContainer>;
}

function CardFooter({ children }: CardFooterProps) {
  return <CardFooterContainer>{children}</CardFooterContainer>;
}

export { CardWrapper, CardHeader, CardBody, CardFooter };
