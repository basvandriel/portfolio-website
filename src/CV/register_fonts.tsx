import { Font } from "@react-pdf/renderer";
import regular from "./fonts/EBGaramond-Regular.ttf";
import medium from "./fonts/EBGaramond-Medium.ttf";
import semibold from "./fonts/EBGaramond-SemiBold.ttf";
import bold from "./fonts/EBGaramond-Bold.ttf";
import extrabold from "./fonts/EBGaramond-ExtraBold.ttf";

Font.register({
  family: "Garamond",
  fonts: [
    {
      src: regular,
      fontWeight: 400,
    },
    {
      src: medium,
      fontWeight: 500,
    },
    {
      src: semibold,
      fontWeight: 600,
    },
    {
      src: bold,
      fontWeight: 700,
    },
    {
      src: extrabold,
      fontWeight: 800,
    },
  ],
});
