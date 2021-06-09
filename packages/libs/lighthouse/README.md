# Lighthouse performance analysis

This is a quicker local alternative to Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) using the same performance tooling.

#### CPU Throttling
Lighthouse computes and saves a benchmarkIndex as a rough approximation of the host device's CPU performance with every report.  We use this value to throttle our local machine to achieve more accurate benchmarks.

### Setup
1. Run `yarn benchmark:setup`
2. Open [./output/lighthouse-results.html](./output/lighthouse-results.html) in your browser if it doesn't open automatically.
3. Scroll down to the bottom of the html report and note your CPU/Memory power from the table.  See: [example image](https://user-images.githubusercontent.com/2301202/96950078-1b03d380-14af-11eb-9583-fbf8133315b2.png).
4. Input your CPU/Memory power from step 3 into https://lighthouse-cpu-throttling-calculator.vercel.app/.  You should receive an integer in the range of 0.1 - 15.0.  
5. Create `.env.local` if it doesn't exist already.
6. set the variable `THROTTLE_SPEED` equal to the digit from step 5.

example:
```dotenv
CPU_SLOWDOWN=5.4
```
