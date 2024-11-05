import styled from "styled-components/native";

export const Content = styled.TouchableOpacity`
  border: 1px solid ${(x) => x.theme.COLORS.GRAY5};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 11.5px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY1};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
