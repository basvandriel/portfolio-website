import { View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";
import { HEADER_FONT_SIZE, TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";
import { useTranslation } from "react-i18next";

const ListItem = ({ children }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <Text>{"\u2022 "}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text
        style={[
          tw("mt-4 mb-4"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        {t("knowledge")}
      </Text>
      <Text
        style={{
          fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
          fontFamily: "Garamond",
        }}
      >
        {t("knowledge_section")
          .trim()
          .replace(/\n/g, " ")
          .replace(/\s\s+/g, " ")}
      </Text>

      <View
        style={[
          tw("mt-2"),
          {
            fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
            fontFamily: "Garamond",
          },
        ]}
      >
        <ListItem>Python: 15-17 {t("years_of_experience")}</ListItem>
        <ListItem>C#/.NET: 6-7 {t("years_of_experience")}</ListItem>
        <ListItem>Java: 8-10 {t("years_of_experience")}</ListItem>
      </View>
    </>
  );
};
export default SkillsSection;
