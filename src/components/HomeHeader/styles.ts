import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const Logo = styled.Image`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(x) => x.theme.COLORS.GREY_1};
  width: 82px;
  height: 37px;
`;

export const PicProfile = styled.Image`
  border-radius: 50px;
  height: 40px;
  width: 40px;
`;
