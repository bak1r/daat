const fs = require("fs");

function readMoonshotKey() {
  const envPath = ".env.local";
  const env = fs.readFileSync(envPath, "utf8");
  const match = env.match(/^MOONSHOT_API_KEY\s*=\s*(.+)\s*$/m);
  if (!match) throw new Error("MOONSHOT_API_KEY not found in .env.local");

  // Trim whitespace and strip surrounding quotes if any
  return match[1].trim().replace(/^['\"]|['\"]$/g, "");
}

async function main() {
  const key = readMoonshotKey();

  const res = await fetch("https://api.moonshot.ai/v1/models", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  const text = await res.text();
  console.log("status", res.status);
  console.log(text.slice(0, 800));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
