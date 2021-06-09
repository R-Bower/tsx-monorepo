import {launch} from "chrome-launcher"
import lighthouse from "lighthouse"

export async function runBenchmark(url: string) {
  const chrome = await launch({
    chromeFlags: ["--headless", "--ignore-certificate-errors"],
  })
  const options = {
    logLevel: "info",
    maxWaitForLoad: 5000,
    onlyCategories: ["performance"],
    output: "html",
    port: chrome.port,
    throttling: {
      cpuSlowdownMultiplier: process.env.CPU_SLOWDOWN,
    },
  }

  const result = await lighthouse(url, options)

  await chrome.kill()

  return result
}
