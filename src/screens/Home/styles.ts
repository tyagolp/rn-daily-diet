import { TitleS } from "@components/TitleS";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const AreaContent = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const SectionTitle = styled(TitleS)`
  margin: 20px 0 4px;
`;
