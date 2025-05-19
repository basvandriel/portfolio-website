import "../index.css";

import { View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";

import { TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";
import { EmailPDFSVG, LocationPinPDFSVG, PhonePDFSVG } from "./icons";

const HEADER_FONT_SIZE = 16;

const Header = () => {
  return (
    <>
      <Text
        style={[
          tw("font-medium"),
          {
            fontSize: "28",
            fontFamily: "Garamond",
          },
        ]}
      >
        Bas van Driel
      </Text>
      <Text
        style={[
          tw("font-medium mb-2"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        Senior Software Engineer, DevOps Engineer
      </Text>

      <View
        style={[
          tw(
            "flex flex-row items-center gap-4 items-center mb-4 text-gray-600"
          ),
        ]}
      >
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
            tw("gap-1"),
          ]}
        >
          <LocationPinPDFSVG style={tw("h-4 w-4")} strokeColor={"gray"} />
          <Text
            style={[
              {
                fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            Hulst, Nederland
          </Text>
        </View>

        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
            tw("gap-1"),
          ]}
        >
          <PhonePDFSVG style={tw("h-4 w-4")} strokeColor={"gray"} />
          <Text
            style={[
              {
                fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            +316 83 86 47 62
          </Text>
        </View>

        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            tw("gap-1"),
          ]}
        >
          <EmailPDFSVG
            style={tw("h-4 w-4 items-center")}
            strokeColor={"gray"}
          />
          <Text
            style={[
              {
                fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            contact@basvandriel.nl
          </Text>
        </View>
      </View>

      <View style={tw("h-0.5 w-2/3 bg-blue-400")}></View>
    </>
  );
};

export default Header;
