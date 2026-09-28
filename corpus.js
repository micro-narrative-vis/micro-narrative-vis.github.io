const fields = [
  { name: "Case Grounding", tone: "case" },
  { name: "Distributional Position", tone: "case" },
  { name: "Case–Data Relationship", tone: "case" },
  { name: "Narrative Content", tone: "narrative" },
  { name: "Visual Representation", tone: "narrative" },
  { name: "Narrative Role", tone: "connection" },
  { name: "Narrative Function", tone: "connection" },
  { name: "Spatial Relationship", tone: "connection" },
  { name: "Visual Linkage", tone: "connection" },
  { name: "Transition", tone: "connection" }
];

function parseCSV(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  text = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ""; }
    else if (char === '\n') { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += char;
  }
  if (field.length || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  const headers = rows.shift().map(header => header.trim());
  return rows.filter(cells => cells.some(Boolean)).map(cells =>
    Object.fromEntries(headers.map((header, index) => [header, (cells[index] || "").trim()]))
  );
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>'"]/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;"
  })[char]);
}

function tagsFor(row) {
  return fields.flatMap(field => (row[field.name] || "").split(",")
    .map(value => value.trim()).filter(Boolean)
    .map(value => ({ value, tone: field.tone })));
}

function render(rows) {
  const grid = document.getElementById("corpus-grid");
  grid.innerHTML = rows.map(row => `
    <article class="corpus-card">
      <header class="card-head">
        <span class="card-number">${escapeHTML(row.id)}</span>
        <h2 title="${escapeHTML(row["title-short"])}">${escapeHTML(row["title-short"])}</h2>
      </header>
      <div class="card-image">
        <img src="img-corpus/${encodeURIComponent(row.id)}.png" alt="Preview of ${escapeHTML(row["title-short"])}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="year">${escapeHTML(row["年份"])}</span>
        <p class="full-title"><strong>Title:</strong> ${escapeHTML(row.title)}</p>
        <a class="source-link" href="${escapeHTML(row.link)}" target="_blank" rel="noopener noreferrer">View source ↗</a>
        <div class="tags" aria-label="Design patterns">
          ${tagsFor(row).map(tag => `<span class="tag ${tag.tone}">${escapeHTML(tag.value)}</span>`).join("")}
        </div>
      </div>
    </article>`).join("");

  grid.querySelectorAll("img").forEach(image => {
    image.addEventListener("error", () => image.parentElement.classList.add("is-missing"), { once:true });
  });
}

fetch("corpus.csv")
  .then(response => {
    if (!response.ok) throw new Error("Unable to load corpus.csv");
    return response.text();
  })
  .then(text => {
    const rows = parseCSV(text);
    if (!rows.length || !("title-short" in rows[0])) throw new Error("Invalid corpus data");
    render(rows);
  })
  .catch(error => {
    console.error(error);
    const status = document.getElementById("status");
    status.style.display = "block";
    status.textContent = "The corpus could not be loaded. Open the site through a local web server to read corpus.csv.";
  });
