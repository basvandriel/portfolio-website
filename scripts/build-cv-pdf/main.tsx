/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import ReactPDF from "@react-pdf/renderer";
import CV from "../../src/CV";
import { program } from "commander";

import "../../src/CV/register_fonts_require";

program
  .version("1.0.0")
  .description("My Node CLI")
  .argument("-o, --output <file>", "The output location")
  .action(async (output) => {
    require("../../src/i18n/index");

    console.log(`Generating PDF to ${output}...`);

    ReactPDF.render(<CV />, output)
      .catch((err) => console.error(err))
      .finally(() => {
        console.log("OK");
      });
  });

program.parse(process.argv);
