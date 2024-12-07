#!/usr/bin/node
import ReactPDF from '@react-pdf/renderer';
import CV from '../../src/CV';
import { program } from "commander";

import './CV/register_fonts_relative'
import React from 'react';

program
  .version("1.0.0")
  .description("My Node CLI")
  .argument("-o, --output <file>", "The output location")
  .action(async (output) => {
    require("./i18n/index");

    console.log("Generating PDF...")
    
    ReactPDF.render(<CV />, output).catch(err => console.error(err));
  });

program.parse(process.argv);
