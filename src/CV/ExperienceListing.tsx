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
import TranslateableExperience from "../translateable_experience";
import { useTranslation } from "react-i18next";

const ExperienceListing = ({ description_key, company_city_key, company_country_key, company, title, tags, start_date, end_date }: TranslateableExperience) => {
  const { t } = useTranslation()
  const textGray600 = '#4b5563'
  
  return (
    <View style={[tw("rounded-xl")]} wrap={false}>
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

      <View style={tw('flex flex-row items-center gap-4 text-gray-600 mt-1')}>
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
            {company}
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
          <LocationPinPDFSVG style={tw("h-4 w-4")} strokeColor={textGray600}/>
          <Text
            style={[
              {
                fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            {t(company_city_key)}, {t(company_country_key)}
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
          <CalenderPDFSVG style={tw("h-4 w-4 text-gray-600")} strokeColor={textGray600} />
          <Text
            style={[
              {
                fontSize: TAILWIND_XS_FONTSIZE_IN_PT,
                fontFamily: "Garamond",
              },
            ]}
          >
            {start_date} - {!end_date ? 'heden' : end_date}
            {/* april 2023 - heden */}
          </Text>
        </View>
      </View>
      

      <Text
        style={[
          {
            fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
            fontWeight: 400,
            fontFamily: "Garamond",
          },
          tw("text-gray-800 mb-4 mt-2"),
        ]}
      >
        {t(description_key).trim().replace(/\n/g, ' ').replace(/\s\s+/g, ' ')}
      </Text>

      <View style={tw("flex flex-row flex-wrap gap-1 w-auto")}>
        {tags.map((v, i) => {
          return <CVBadge key={i}>{v}</CVBadge>
        })}
      </View>
    </View>
  );
};

export default ExperienceListing;
