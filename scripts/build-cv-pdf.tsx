import { renderToFile } from "@react-pdf/renderer";
import CV from "../src/CV";
import { program } from "commander";

import "../src/CV/register_fonts";
import "../src/i18n/index";

import path from "path";

program
  .version("1.0.0")
  .description("My Node CLI")
  .argument("-o, --output <file>", "The output location")
  .action(async (output) => {
    const resolvedpath = path.resolve(output);

    renderToFile(<CV />, resolvedpath)
      .catch((err) => console.error(err))
      .finally(() => {
        console.log(`Generated PDF to ${resolvedpath}`);
      });
  });

program.parse(process.argv);
