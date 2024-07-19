import { View } from "@react-pdf/renderer";

import { Text } from "@react-pdf/renderer";

import CVBadge from "./CVBadge";
import {
  TAILWIND_BASE_FONTSIZE_IN_PT,
  TAILWIND_SM_FONTSIZE_IN_PT,
  TAILWIND_XS_FONTSIZE_IN_PT,
} from "./constants";
import tw from "./tailwind";
import { BriefcasePDFSVG, CalenderPDFSVG, LocationPinPDFSVG } from "./icons";
import { EducationProps } from "../EducationProps";

const ExperienceCVListing = ({
  current_experience,
  location,
  school,
  start_date,
  title,
  company_logo,
  description,
  end_date,
}: EducationProps) => {
  const textGray600 = "#4b5563";

  return (
    <View style={[tw("rounded-xl")]} wrap={true}>
      <Text
        style={{
          fontSize: TAILWIND_BASE_FONTSIZE_IN_PT,
          fontWeight: 500,
          fontFamily: "Garamond",
        }}
      >
        {title}
      </Text>

      {/* info about experience */}

      <View style={tw("flex flex-row items-center gap-4 text-gray-600 mt-1")}>
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
          <BriefcasePDFSVG style={tw("h-4 w-4")} strokeColor={textGray600} />
          <Text
            style={[
              {
                fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            {school}
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
          <LocationPinPDFSVG style={tw("h-4 w-4")} strokeColor={textGray600} />
          <Text
            style={[
              {
                fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            {location}
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
          <CalenderPDFSVG
            style={tw("h-4 w-4 text-gray-600")}
            strokeColor={textGray600}
          />
          <Text
            style={[
              {
                fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
          {start_date} - {current_experience ? 'heden' : end_date}
          </Text>
        </View>
      </View>

      {description && (
        <Text
          style={[
            {
              fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
              fontWeight: 400,
              fontFamily: "Garamond",
            },
            tw("text-gray-800 mt-2"),
          ]}
        >
          {description.trim().replace(/\n/g, " ").replace(/\s\s+/g, " ")}
        </Text>
      )}
    </View>
  );
};

export default ExperienceCVListing;
