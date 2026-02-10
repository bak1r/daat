async function ask(message) {
  const res = await fetch("http://localhost:3006/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      locale: "tr",
      conversationHistory: [],
    }),
  });
  const data = await res.json().catch(() => null);
  console.log("\nQ:", message);
  console.log("status", res.status);
  console.log("A:", data?.message || data);
}

(async () => {
  await ask("sahipleri kim?");
  await ask("ekibinizin adı nedir?");
  await ask("resmi ortaklık oranları nedir?");
})();
