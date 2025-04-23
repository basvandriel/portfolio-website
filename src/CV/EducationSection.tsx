import { View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";

import ExperienceCVListing from "./EducationCVListing";
import { useTranslation } from "react-i18next";

const HEADER_FONT_SIZE = 16;

const EducationSection = () => {
  const {t } = useTranslation()
  return (
    <>
      <Text break
        style={[
          tw("mt-4"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        {t('education')}
      </Text>

      <View style={tw("gap-4 mt-4")}>
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Applicatie- en mediaontwikkeling"}
          location={"Vlissingen"}
          start_date={"2016"}
          end_date="2019"
          current_experience={false}
          description="During my studies, I worked with Java and Python. I had already gained experience with these through various hobby projects. An example of this is an attendance system for students and teachers, where check-ins could be done using NFC cards."
        />
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Medewerker beheer ICT"}
          location={"Vlissingen"}
          start_date={"2015"}
          end_date="2016"
          current_experience={false}
        />
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Medewerker ICT"}
          location={"Vlissingen"}
          start_date={"2014"}
          end_date="2015"
          current_experience={false}
        />
          <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Arbeids Gekwalificeerd Assistant: Handel"}
          location={"Terneuzen"}
          start_date={"2014"}
          end_date="2015"
          current_experience={false}
        />
      </View>
    </>
  );
};

export default EducationSection;
