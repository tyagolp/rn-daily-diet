import styled from "styled-components/native";
import { TitleM } from "../../components/TitleM";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { BodyM } from "../../components/BodyM";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Title = styled(TitleM)`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
export const TitleRed = styled(TitleM)`
  color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Description = styled(BodyM)`
  text-align: center;
`;

export const Logo = styled(Image)`
  margin: 16px 0;
`;
