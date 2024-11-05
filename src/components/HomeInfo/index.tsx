import React from "react";
import { Container, IconAbsolute, PressableAnimated } from "./styles";
import { TitleG } from "../TitleG";
import { BodyS } from "../BodyS";
import { SharedTransition, withSpring } from "react-native-reanimated";

type PressableAnimatedType = typeof PressableAnimated;

type Props = PressableAnimatedType & {
  porcent: number;
};

const customTransition = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});

export function HomeInfo({ porcent, ...rest }: Props) {
  return (
    <Container
      positiveColor={porcent >= 50}
      {...rest}
      sharedTransitionTag="tag"
      sharedTransitionStyle={customTransition}
    >
      <TitleG>{`${porcent.toFixed(2)}%`}</TitleG>
      <BodyS>das refeições dentro da dieta</BodyS>
      <IconAbsolute />
    </Container>
  );
}
