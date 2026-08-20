import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const [srcSvgBuffer, docsSvgBuffer, gifBuffer, showcase, loading, readme, design] = await Promise.all([
  readFile(new URL("../src/trace-resolve.svg", import.meta.url)),
  readFile(new URL("../docs/trace-resolve.svg", import.meta.url)),
  readFile(new URL("../assets/trace-resolve-preview.gif", import.meta.url)),
  readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
  readFile(new URL("../docs/loading.html", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
  readFile(new URL("../DESIGN.md", import.meta.url), "utf8"),
]);

const svg = srcSvgBuffer.toString("utf8");
const srcHash = createHash("sha256").update(srcSvgBuffer).digest("hex");
const gifHash = createHash("sha256").update(gifBuffer).digest("hex");

const checks = [
  ["canonical SVG hash locked", srcHash === "217b256f1f00ad05925008503ff34974edd077928c9b7b8604d04d1aead27bde"],
  ["preview GIF hash locked", gifHash === "707713aa1dfa8a964a6202fb1456ba6026aa72fe4bbf71c4d4ae67c1bc9704eb"],
  ["src/docs SVG byte-identical", srcSvgBuffer.equals(docsSvgBuffer)],
  ["canonical 400x400 viewBox", svg.includes('viewBox="0 0 400 400"')],
  ["three GenLayer polygons present", (svg.match(/<polygon class="piece/g) || []).length === 3],
  ["pink palette present", ["#FF63D8","#E857F4","#C94DF1"].every(c => svg.includes(c))],
  ["high-contrast trace present", svg.includes("#FFFFFF") && svg.includes("#FFF4FC") && svg.includes("#FFD6F3")],
  ["trace clipped inside mark", svg.includes('clip-path="url(#markClip)"')],
  ["infinite loop present", svg.includes("infinite")],
  ["default duration present", svg.includes("1.65s")],
  ["no orbit animation", !svg.toLowerCase().includes("rotate(360") && !svg.toLowerCase().includes("orbit")],
  ["reduced motion supported", svg.includes("prefers-reduced-motion:reduce")],
  ["showcase uses exact SVG", showcase.includes('data="trace-resolve.svg"')],
  ["loading page uses exact SVG", loading.includes('data="trace-resolve.svg"')],
  ["light surface exists", showcase.includes("surface light")],
  ["neutral surface exists", showcase.includes("surface neutral")],
  ["dark surface exists", showcase.includes("surface dark")],
  ["all target sizes exist", [16,20,24,32,48,64].every(n => showcase.includes(`width="${n}"`))],
  ["README documents reduced motion", readme.toLowerCase().includes("reduced motion")],
  ["README documents React", readme.includes("TraceResolveSpinner")],
  ["DESIGN documents trace timing", design.includes("74%,100%")],
];

let failed = false;
for (const [name, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) failed = true;
}

if (failed) process.exit(1);
console.log(`\n${checks.length}/${checks.length} checks passed.`);
