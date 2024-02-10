require("dotenv").config();
const { writeFileSync, mkdirSync } = require("node:fs");

const targetPath = "./src/environments/enviroments.ts";

const envFileContent = `
export const environment = {
   mapbox_key: "${process.env["MAPBOX_KEY"]}"
}
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent, "utf-8");
