import { Font } from "@react-pdf/renderer";
import path from "path";

const font_path = path.resolve(__dirname, "fonts");

Font.register({
  family: "Garamond",
  fonts: [
    {
      src: path.resolve(font_path, "EBGaramond-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: path.resolve(font_path, "EBGaramond-Medium.ttf"),
      fontWeight: 500,
    },
    {
      src: path.resolve(font_path, "EBGaramond-SemiBold.ttf"),
      fontWeight: 600,
    },
    {
      src: path.resolve(font_path, "fonts/EBGaramond-Bold.ttf"),
      fontWeight: 700,
    },
    {
      src: path.resolve(font_path, "fonts/EBGaramond-ExtraBold.ttf"),
      fontWeight: 800,
    },
  ],
});
