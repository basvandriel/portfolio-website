import "../index.css";

import { Document, Page, View, Text, Font } from "@react-pdf/renderer";
import tw from "./tailwind";
import ExperienceListing from "./ExperienceListing";

import experience from "../experience";
// import exp from "constants";
import { TAILWIND_SM_FONTSIZE_IN_PT } from "./constants";
import Sidebar from "./Sidebar";

const HEADER_FONT_SIZE = 16

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
      <Page size="A4" style={tw('mt-8')}>
        <View style={tw("flex flex-row")}>
          <Sidebar />

          <View style={tw("w-8/12 px-12")}>
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
              Senior Python Developer, DevOps Engineer
            </Text>

            <View style={tw('h-0.5 w-1/3 bg-blue-400')}></View>


            <Text
              style={[
                tw("mt-4 mb-4"),
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
              Ambitieuze, hardwerkende en gedreven Senior Python developer met
              met minimaal 10 jaar ervaring en oog voor detail. Woonachtig in
              Terneuzen, communicatief vaardig en staat in om onafhankelijk in
              groepen en zelfstandig te kunnen werken.
            </Text>

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
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default CV;
