import styled from "styled-components/native";

export const Container = styled.Text`
  color: ${(x) => x.theme.COLORS.GREY_1};
  font-size: ${(x) => x.theme.SIZES.xl};
  font-family: ${(x) => x.theme.FONTS.BOLD};
`;
