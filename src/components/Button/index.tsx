import React from "react";
import { Container, ButtonText, ContainerProps } from "./styles";
import Loading from "~components/Loading";

const Button: React.FC<ContainerProps> = (props) => {
  const enabled = !props.loading && !props.disabled;

  return (
    <Container
      activeOpacity={enabled ? 0.7 : 1}
      disabled={!enabled}
      onPress={enabled ? props.onPress : null}
      {...props}
    >
      {props.loading && <Loading />}
      {!props.loading && (
        <ButtonText fontWeight="bold" fontSize="large" variant={props.variant}>
          {props.children}
        </ButtonText>
      )}
    </Container>
  );
};
export default Button;
