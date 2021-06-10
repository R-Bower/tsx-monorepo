import fs from "fs"
import fse from "fs-extra"
import path from "path"
import {reduce} from "rambda"

const resultsDir = path.resolve(__dirname, "../benchmarks/results")

export async function main(): Promise<void> {
  const files = fs
    .readdirSync(resultsDir)
    .filter((file) => file.endsWith(".json"))
  const res = await Promise.all(
    files.map((file) => fse.readJson(path.join(resultsDir, file))),
  ).then(
    reduce(
      (acc, result) => ({
        ...acc,
        [result.id]: `${Math.round(result.actualDuration)} ms`,
      }),
      {},
    ),
  )

  fse.writeJsonSync(
    path.resolve(__dirname, "../benchmarks/results.json"),
    res,
    {spaces: 2},
  )
}

main()
