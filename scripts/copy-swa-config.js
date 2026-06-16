const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "staticwebapp.config.json");
const destination = path.join(__dirname, "..", "out", "staticwebapp.config.json");

if (!fs.existsSync(source)) {
  console.warn("staticwebapp.config.json not found — skipping copy");
  process.exit(0);
}

fs.copyFileSync(source, destination);
console.log("Copied staticwebapp.config.json to out/");
