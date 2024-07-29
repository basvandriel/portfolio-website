import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Garamond",
  fonts: [
    {
      src: require('./fonts/EBGaramond-Regular.ttf'),
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
