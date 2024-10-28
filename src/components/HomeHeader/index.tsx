import React from "react";
import { Container, Logo, PicProfile } from "./styles";

import LogoSource from "../../assets/logo.png";

export function HomeHeader() {
  return (
    <Container>
      {/* <LogoSource width={82} height={37} /> */}
      <Logo source={LogoSource} />
      <PicProfile source={{ uri: "https://github.com/tyagolp.png" }} />
    </Container>
  );
}
