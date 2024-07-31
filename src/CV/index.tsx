import "../index.css";

import { Document, Page, View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";
import ExperienceListing from "./ExperienceListing";

import experience from '../translateable_experience_data'
import { TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";
import Sidebar from "./Sidebar";
import Header from "./CVHeader";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import { useTranslation } from "react-i18next";

const HEADER_FONT_SIZE = 16;

const WorkExperienceSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <Text
        style={[
          tw("mt-4"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        {t('experience')}
      </Text>

      <View style={tw("gap-8 mt-4")}>
        {experience.map((v, i) => {
          return <ExperienceListing {...v} key={i} />;
        })}
      </View>
    </>
  );
};

const ProfileSection = () => {
  const {t} = useTranslation() 
  return (
    <>
      <Text
        style={[
          tw("my-4"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        {t('profile')}
      </Text>

      <Text
        style={{
          fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
          fontFamily: "Garamond",
        }}
      >
        {t('profile_intro').trim().replace(/\n/g, ' ').replace(/\s\s+/g, ' ')}
      </Text>
    </>
  );
};


const CV = () => {
  return (
    <Document
      title={"CV Bas van Driel - Software Engineer - 2024"}
      author={"Bas van Driel"}
      subject={"Overzicht van werkervaring, skills en opleidingen."}
      language={"nl-NL"}
    >
      <Page size="A4" style={tw("mt-8")}>
        <View style={tw("flex flex-row")}>
          <Sidebar />

          <View style={tw("w-10/12 px-12")}>
            <Header />
            <ProfileSection />
            <WorkExperienceSection />
            <EducationSection />
            <SkillsSection />
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default CV;
