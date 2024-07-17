import "../index.css";

import {
  Document,
  Page,
  View,
  Text,
  Font,
} from "@react-pdf/renderer";
import tw from "./tailwind";
import ExperienceListing from "./ExperienceListing";

import experience from '../experience'
import exp from "constants";

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

const Header = () => {
  return (
    <View style={[tw("flex flex-row px-12 pt-8")]}>
      <View style={[tw("w-4/12")]}></View>
      <View style={[tw("w-8/12")]}>
        <Text
          style={[
            {
              fontSize: 28,
              fontFamily: "Garamond",
              fontWeight: 600,
            },
          ]}
        >
          Bas van Driel
        </Text>
        <Text
          style={[
            {
              fontFamily: "Garamond",
              fontWeight: 500,
            },
          ]}
        >
          Senior Python Developer, DevOps Engineer
        </Text>

        <View style={tw("w-3/12 h-1 bg-blue-500 mt-4")}></View>
      </View>
    </View>
  );
};

const CV = () => {
  return (
    <Document
    style={{
      overflow: "hidden"
    }}
      title={"Curriculum Bas van Driel- Software Engineer - 2024"}
      author={"Bas van Driel"}
      subject={"Overzicht werkervaring, skills & opleidingen."}
      language={"nl-NL"}
    >
      <Page size="A4" style={{
        overflow: "hidden"
      }}>
        <Header />

        <View style={tw("flex flex-row p-12")}>
          <View style={tw("w-4/12")}></View>

          <View style={tw("w-8/12")}>
            <View style={tw("gap-4")}>
              {
                experience.map((v, i) => {
                  return <ExperienceListing {...v} key={i} />
                })
              }
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default CV;
