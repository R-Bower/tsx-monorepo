import fs from "fs"
import fse from "fs-extra"
import path from "path"
import {reduce} from "rambda"

const resultsDir = path.resolve(__dirname, "../benchmarks/results")

export async function main(): Promise<void> {
  // collect all json files in the output directory
  const files = fs
    .readdirSync(resultsDir)
    .filter((file) => file.endsWith(".json"))
  // read files at the same time
  const res = await Promise.all(
    files.map((file) => fse.readJson(path.join(resultsDir, file))),
  ).then(
    // sort into object of [id: string]: renderDuration (ms) pairs for quick comparison
    reduce(
      (acc, result) => ({
        ...acc,
        [result.id]: `${Math.round(result.actualDuration)} ms`,
      }),
      {},
    ),
  )
  // write results to benchmarks dir
  fse.writeJsonSync(
    path.resolve(__dirname, "../benchmarks/results.json"),
    res,
    {spaces: 2},
  )
}

main()
