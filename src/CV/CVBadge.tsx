import {
  View,
  Text,
} from "@react-pdf/renderer";
import { TAILWIND_XS_FONTSIZE_IN_PT } from "./constants";
import tw from "./tailwind";

const CVBadge = ({ children }: any) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tw(
          "px-2 py-1 text-center rounded-md bg-gray-100 font-medium text-gray-600"
        ),
      ]}
    >
      <Text
        style={[
          {
            fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
            fontFamily: "Garamond",
          },
          tw(""),
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default CVBadge;