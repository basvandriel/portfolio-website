import { View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";
import { HEADER_FONT_SIZE, TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";

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
        <Text>{"\u2022" + " "}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

const SkillsSection = () => {
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
        Kennis
      </Text>
      <Text
        style={{
          fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
          fontFamily: "Garamond",
        }}
      >
        Hieronder een beknopt overzicht van mijn uitgelichte kenniszaken in aantal jaren ervaring. Meer
        weten? Neem dan contact op. Voor veel van deze kennis, inclusef
        verschillende front-end klussen, heb ik buiten mijn werk ervaring ook
        ervaring opgedaan met freelance klussen.
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
        <ListItem>
          Python: 10a12 jaar ervaring
        </ListItem>
        <ListItem>
          C#/.NET: 6a7 jaar ervaring
        </ListItem>
        <ListItem>
          Java: 8a10 jaar ervaring
        </ListItem>
      </View>
    </>
  );
};
export default SkillsSection;
