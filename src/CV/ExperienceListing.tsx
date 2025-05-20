import { View } from "@react-pdf/renderer";

import { Text, StyleSheet } from "@react-pdf/renderer";

import CVBadge from "./CVBadge";
import {
  TAILWIND_BASE_FONTSIZE_IN_PT,
  TAILWIND_SM_FONTSIZE_IN_PT,
  TAILWIND_XS_FONTSIZE_IN_PT,
} from "./constants";
import tw from "./tailwind";
import { BriefcasePDFSVG, CalenderPDFSVG } from "./icons";
import { useTranslation } from "react-i18next";
import WorkListing from "../WorkListing";

const ListItem = ({ children }: any) => {
  return (
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{"\u2022" + " "}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  bullet: {
    height: "100%",
  },
});

const ExperienceListing = ({
  description_translation_key: description,
  company,
  jobTitle: title,
  tags,
  start,
  end,
}: WorkListing) => {
  const { t, i18n } = useTranslation();
  const { t: twe } = useTranslation("translation", {
    keyPrefix: `workexp.${start.getFullYear()}`,
  });
  const textGray600 = "#4b5563";

  const dateFormatter = new Intl.DateTimeFormat(i18n.language, {
    month: "long",
    year: "numeric",
  });
  const responsibilities: string[] = twe(description, {
    returnObjects: true,
  });

  return (
    <View style={[tw("rounded-xl mb-4")]} wrap={false}>
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
            {dateFormatter.format(new Date(start)).toLowerCase()} -{" "}
            {!end
              ? t("present")
              : dateFormatter.format(new Date(end)).toLowerCase()}
          </Text>
        </View>
      </View>

      <View
        style={[
          {
            fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
            fontWeight: 400,
            fontFamily: "Garamond",
          },
          tw("text-gray-800 my-2"),
        ]}
      >
        {responsibilities.map((v, i) => (
          <ListItem>{v}</ListItem>
        ))}
      </View>

      <View style={tw("flex flex-row flex-wrap gap-1 w-auto")}>
        {tags.map((v, i) => {
          return <CVBadge key={i}>{v}</CVBadge>;
        })}
      </View>
    </View>
  );
};

export default ExperienceListing;
