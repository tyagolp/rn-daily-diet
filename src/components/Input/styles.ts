import styled from "styled-components/native";

export const Content = styled.TextInput`
  border: 1px solid ${(x) => x.theme.COLORS.GRAY5};
  padding: 7px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
  vertical-align: top;
  text-align: start;
`;
