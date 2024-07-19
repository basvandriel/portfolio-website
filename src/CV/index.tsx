import "../index.css";

import { Document, Page, View, Text, Font } from "@react-pdf/renderer";
import tw from "./tailwind";
import ExperienceListing from "./ExperienceListing";

import experience from "../experience";
// import exp from "constants";
import { TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";
import Sidebar from "./Sidebar";
import { LocationPinPDFSVG } from "./icons";
import Header from "./CVHeader";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";

const HEADER_FONT_SIZE = 16;

const WorkExperienceSection = () => {
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
        Werkervaring
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
        Profiel
      </Text>

      <Text
        style={{
          fontSize: TAILWIND_SM_FONTSIZE_IN_PT,
          fontFamily: "Garamond",
        }}
      >
        Ambitieuze, hardwerkende en gedreven Senior Python developer met met
        ruim 10 jaar ervaring en oog voor detail. Woonachtig in Hulst,
        communicatief vaardig en staat in om onafhankelijk in groepen en
        zelfstandig te kunnen werken. In de afgelopen jaren werkzaam geweest bij
        zowel grote als kleine bedrijven zoals ABN AMRO en NS binnen
        enterprise-niveau omgevingen. Hierdoor beschikt over een HBO/WO werk- en
        denkniveau.
      </Text>
    </>
  );
};

Font.register({
  family: "Checkout",
  fonts: [
    {
      src: require("./fonts/inter-v13-latin-100.ttf"),
      fontWeight: 100,
    },
    {
      src: require("./fonts/inter-v13-latin-200.ttf"),
      fontWeight: 200,
    },
    {
      src: require("./fonts/inter-v13-latin-300.ttf"),
      fontWeight: 300,
    },
    {
      src: require("./fonts/inter-v13-latin-500.ttf"),
      fontWeight: 500,
    },
    {
      src: require("./fonts/inter-v13-latin-600.ttf"),
      fontWeight: 600,
    },
    {
      src: require("./fonts/inter-v13-latin-700.ttf"),
      fontWeight: 700,
    },
    {
      src: require("./fonts/inter-v13-latin-800.ttf"),
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: "Garamond",
  fonts: [
    {
      src: require("./fonts/EBGaramond-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: require("./fonts/EBGaramond-Medium.ttf"),
      fontWeight: 500,
    },
    {
      src: require("./fonts/EBGaramond-SemiBold.ttf"),
      fontWeight: 600,
    },
    {
      src: require("./fonts/EBGaramond-Bold.ttf"),
      fontWeight: 700,
    },
    {
      src: require("./fonts/EBGaramond-ExtraBold.ttf"),
      fontWeight: 800,
    },
  ],
});

const CV = () => {
  return (
    <Document
      title={"Curriculum Bas van Driel- Software Engineer - 2024"}
      author={"Bas van Driel"}
      subject={"Overzicht werkervaring, skills & opleidingen."}
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
