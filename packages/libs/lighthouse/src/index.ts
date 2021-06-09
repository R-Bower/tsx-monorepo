import dotenv from "dotenv"
import fs from "fs"
import path from "path"
import {F} from "rambda"
import {hideBin} from "yargs/helpers"
import yargs from "yargs/yargs"

import {runBenchmark} from "./utils"

dotenv.config({path: path.join(__dirname, "../.env.local")})

interface Args {
  url: string
  write: boolean
}

yargs(hideBin(process.argv))
  .command(
    "$0",
    "Run benchmark against a url",
    F,
    async ({url, write}: Args) => {
      if (!url) {
        return console.debug(
          "Expected url as an argument!  Usage: `yarn benchmark [url]` (no braces)",
        )
      }

      const results = await runBenchmark(url)

      // `.lhr` is the Lighthouse Result as a JS object
      console.log(`Benchmark complete for`, url)
      console.log(
        "Performance score was",
        results.lhr.categories.performance.score * 100,
      )

      if (write) {
        fs.writeFileSync(
          path.join(__dirname, `../output/report-${new Date().getTime()}.html`),
          results.report,
        )
      }
    },
  )
  .option("u", {
    alias: "url",
    demandOption: true,
    describe: "The url to benchmark",
  })
  .option("w", {
    alias: "write",
    default: true,
    describe: "Write output to file",
  })
  .demandCommand(1).argv
