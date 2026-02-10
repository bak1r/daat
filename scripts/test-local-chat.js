async function main() {
  const res = await fetch("http://localhost:3006/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Merhaba",
      locale: "tr",
      conversationHistory: [],
    }),
  });

  const text = await res.text();
  console.log("status", res.status);
  console.log(text);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
