import { Command } from "commander";

const program = new Command();

program.name("my-cli").description("CLI tool description").version("1.0.0");

program
  .command("hello <name>")
  .description("Say hello")
  .option("-u, --uppercase", "uppercase the output")
  .action((name: string, options: { uppercase?: boolean }) => {
    const message = `Hello, ${name}!`;
    console.log(options.uppercase ? message.toUpperCase() : message);
  });

program.parse();
