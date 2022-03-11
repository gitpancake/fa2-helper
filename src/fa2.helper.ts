#!/usr/bin/env node

const program = require("commander");
import * as ver from "./ver";
import * as contract from "./contract";

program.command("compile-contract").action(contract.compileContract);

program.command("deploy-contract").action(contract.deployContract);

program
  .command("hex-encode")
  .arguments("<string> string to parse to hex")
  .action((str) => {
    const hexCode = Buffer.from(str, "utf8").toString("hex");

    console.log(hexCode);
  });

program
  .command("hex-decode")
  .arguments("<string> string to parse from hex")
  .action((str) => {
    const stringCode = Buffer.from(str, "hex").toString("utf8");

    console.log(stringCode);
  });

program.option("-v", "show version", ver, "").action(ver.showVersion);

program.parse(process.argv);
