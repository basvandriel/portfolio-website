import ReactPDF, { pdf } from '@react-pdf/renderer';
import CV from './CV';
import { program } from "commander";

program
  .version("1.0.0")
  .description("My Node CLI")
  .argument("-o, --output <file>", "The output location")
  .action(async (output) => {
    require("./i18n/index");
    require('./CV/register_fonts_relative')

    console.log("Generating PDF...")
    
    ReactPDF.render(<CV />, output).catch(err => console.error(err));
  });

program.parse(process.argv);
