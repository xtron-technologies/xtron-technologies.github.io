const vehicles = [
  {
    id: "terra",
    name: "TERRA",
    fullName: "XTron Terra",
    subtitle: "Electric SUV",
    category: "Road / SUV",
    description: "A premium electric SUV balancing clean geometric surfacing, everyday usability and restrained off-road confidence.",
    render: "images/xtron-terra.png",
    blueprint: "images/xtron-terra-blueprint.png",
    interior: "images/xtron-terra-interior.png",
    specs: [["TYPE", "Electric SUV"], ["LAYOUT", "Dual-Motor AWD"], ["ROLE", "Flagship Utility"], ["STATUS", "Concept"]]
  },
  {
    id: "verge",
    name: "VERGE",
    fullName: "XTron Verge",
    subtitle: "Electric Coupe",
    category: "Road / Coupe",
    description: "A low, driver-focused coupe with crisp surfacing, controlled smoothness and a more intimate interpretation of XTron’s cockpit language.",
    render: "images/xtron-verge.png",
    blueprint: "images/xtron-verge-blueprint.png",
    interior: "images/xtron-verge-interior.png",
    specs: [["TYPE", "Electric Coupe"], ["LAYOUT", "Dual-Motor AWD"], ["ROLE", "Sport Road Car"], ["STATUS", "Concept"]]
  },
  {
    id: "atlas",
    name: "ATLAS",
    fullName: "XTron Atlas",
    subtitle: "Expedition SUV",
    category: "Utility / Off-Road",
    description: "The most rugged XTron platform, built around expedition capability, durable hardware and off-road-focused interaction.",
    render: "images/xtron-atlas.png",
    blueprint: "images/xtron-atlas-blueprint.png",
    interior: "images/xtron-atlas-interior.png",
    specs: [["TYPE", "Expedition SUV"], ["LAYOUT", "Electric AWD"], ["ROLE", "Adventure"], ["STATUS", "Concept"]]
  },
  {
    id: "pulse-gt",
    name: "PULSE GT",
    fullName: "XTron Pulse GT",
    subtitle: "Electric Grand Tourer",
    category: "Performance / GT",
    description: "A long-distance performance car with a richer cabin, broad stance and a more luxurious interpretation of the XTron design system.",
    render: "images/xtron-pulse-gt.png",
    blueprint: "images/xtron-pulse-gt-blueprint.png",
    interior: "images/xtron-pulse-gt-interior.png",
    specs: [["TYPE", "Grand Tourer"], ["LAYOUT", "Performance AWD"], ["ROLE", "Fast Touring"], ["STATUS", "Concept"]]
  },
  {
    id: "apex",
    name: "APEX",
    fullName: "XTron Apex",
    subtitle: "Electric Track Car",
    category: "Performance / Track",
    description: "A dedicated electric track platform focused on aero, telemetry, weight reduction and an uncompromised motorsport cockpit.",
    render: "images/xtron-apex.png",
    blueprint: "images/xtron-apex-blueprint.png",
    interior: "images/xtron-apex-interior.png",
    specs: [["TYPE", "Track Car"], ["LAYOUT", "Performance EV"], ["ROLE", "Circuit"], ["STATUS", "Concept"]]
  },
  {
    id: "axis",
    name: "AXIS",
    fullName: "XTron Axis",
    subtitle: "Executive Electric Sedan",
    category: "Road / Sedan",
    description: "A calm executive EV with long-wheelbase proportions, restrained lighting and a clean high-tech cabin built for everyday use.",
    render: "images/xtron-axis.png",
    blueprint: "images/xtron-axis-blueprint.png",
    interior: "images/xtron-axis-interior.png",
    specs: [["TYPE", "Executive Sedan"], ["LAYOUT", "Electric AWD"], ["ROLE", "Daily Premium"], ["STATUS", "Concept"]]
  },
  {
    id: "aero",
    name: "AERO",
    fullName: "XTron Aero",
    subtitle: "Electric Cabriolet",
    category: "Road / Cabriolet",
    description: "An open-top 2+2 concept that keeps the XTron family language while introducing a lighter, more emotional and lifestyle-focused character.",
    render: "images/xtron-aero.png",
    blueprint: "images/xtron-aero-blueprint.png",
    interior: "images/xtron-aero-interior.png",
    specs: [["TYPE", "Cabriolet"], ["LAYOUT", "Electric RWD/AWD"], ["ROLE", "Open-Air Touring"], ["STATUS", "Concept"]]
  },
  {
    id: "flow",
    name: "FLOW",
    fullName: "XTron Flow",
    subtitle: "Electric MPV",
    category: "Family / MPV",
    description: "A spacious electric people mover using the same technical language in a softer, calmer package focused on families and flexible space.",
    render: "images/xtron-flow.png",
    blueprint: "images/xtron-flow-blueprint.png",
    interior: "images/xtron-flow-interior.png",
    specs: [["TYPE", "Electric MPV"], ["LAYOUT", "EV Platform"], ["ROLE", "Family / People"], ["STATUS", "Concept"]]
  },
  {
    id: "trail",
    name: "TRAIL",
    fullName: "XTron Trail",
    subtitle: "Electric Bakkie",
    category: "Utility / Pickup",
    description: "A South African-minded electric double cab focused on utility, storage, durability and a more tactile version of the XTron cabin.",
    render: "images/xtron-trail.png",
    blueprint: "images/xtron-trail-blueprint.png",
    interior: "images/xtron-trail-interior.png",
    specs: [["TYPE", "Electric Bakkie"], ["LAYOUT", "Electric AWD"], ["ROLE", "Utility / Lifestyle"], ["STATUS", "Concept"]]
  }
];

const microItems = [
  { category: "e-bike", name: "E-Bike 01", desc: "Urban commuter", render: "images/ebike-01.png", blueprint: "images/ebike-01-blueprint.png" },
  { category: "e-bike", name: "E-Bike 02", desc: "Performance commuter", render: "images/ebike-02.png", blueprint: "images/ebike-02-blueprint.png" },
  { category: "e-bike", name: "E-Bike 03", desc: "Adventure platform", render: "images/ebike-03.png", blueprint: "images/ebike-03-blueprint.png" },
  { category: "e-bike", name: "E-Bike 04", desc: "Compact urban", render: "images/ebike-04.png", blueprint: "images/ebike-04-blueprint.png" },

  { category: "e-kart", name: "E-Kart 01", desc: "Electric test platform", render: "images/ekart-01.png", blueprint: "images/ekart-01-blueprint.png" },
  { category: "e-kart", name: "E-Kart 02", desc: "Track focused", render: "images/ekart-02.png", blueprint: "images/ekart-02-blueprint.png" },
  { category: "e-kart", name: "E-Kart 03", desc: "All-terrain kart", render: "images/ekart-03.png", blueprint: "images/ekart-03-blueprint.png" },
  { category: "e-kart", name: "E-Kart 04", desc: "Premium smart kart", render: "images/ekart-04.png", blueprint: "images/ekart-04-blueprint.png" },

  { category: "e-scooter", name: "E-Scooter 01", desc: "Flagship commuter", render: "images/escooter-01.png", blueprint: "images/escooter-01-blueprint.png" },
  { category: "e-scooter", name: "E-Scooter 02", desc: "Compact commuter", render: "images/escooter-02.png", blueprint: "images/escooter-02-blueprint.png" },
  { category: "e-scooter", name: "E-Scooter 03", desc: "All-terrain scooter", render: "images/escooter-03.png", blueprint: "images/escooter-03-blueprint.png" },
  { category: "e-scooter", name: "E-Scooter 04", desc: "Performance scooter", render: "images/escooter-04.png", blueprint: "images/escooter-04-blueprint.png" },

  { category: "e-skateboard", name: "E-Skateboard 01", desc: "Electric longboard", render: "images/eskateboard-01.png", blueprint: "images/eskateboard-01-blueprint.png" },
  { category: "e-skateboard", name: "E-Skateboard 02", desc: "Urban commuter board", render: "images/eskateboard-02.png", blueprint: "images/eskateboard-02-blueprint.png" },
  { category: "e-skateboard", name: "E-Skateboard 03", desc: "All-terrain board", render: "images/eskateboard-03.png", blueprint: "images/eskateboard-03-blueprint.png" },
  { category: "e-skateboard", name: "E-Skateboard 04", desc: "Compact cruiser", render: "images/eskateboard-04.png", blueprint: "images/eskateboard-04-blueprint.png" }
];

function imageFrame(path, title, extra = "") {
  return `
    <div class="image-frame ${extra}" data-lightbox-src="${path}" data-lightbox-title="${title}">
      <img src="${path}" alt="${title}" loading="lazy" />
      <div class="placeholder">
        <span>ADD IMAGE</span>
        <code>${path}</code>
      </div>
    </div>
  `;
}

function renderVehicles() {
  const list = document.getElementById("vehicleList");

  list.innerHTML = vehicles.map((vehicle, index) => `
    <article class="vehicle-row">
      ${imageFrame(vehicle.render, `${vehicle.fullName} exterior`, "vehicle-media")}
      <div class="vehicle-copy">
        <div>
          <div class="vehicle-meta">
            <span>${String(index + 1).padStart(2, "0")} / ${vehicle.category.toUpperCase()}</span>
            <span>XTRON / 2026</span>
          </div>

          <h3>${vehicle.name}</h3>
          <p class="vehicle-subtitle">${vehicle.subtitle}</p>
          <p class="vehicle-description">${vehicle.description}</p>

          <div class="vehicle-specs">
            ${vehicle.specs.map(spec => `
              <div>
                <small>${spec[0]}</small>
                <strong>${spec[1]}</strong>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="vehicle-assets">
          <div>
            ${imageFrame(vehicle.blueprint, `${vehicle.fullName} blueprint`, "asset-thumb")}
            <div class="asset-label">BLUEPRINT / TECHNICAL STUDY</div>
          </div>
          <div>
            ${imageFrame(vehicle.interior, `${vehicle.fullName} interior`, "asset-thumb")}
            <div class="asset-label">INTERIOR / COCKPIT STUDY</div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderMicro(category = "e-bike") {
  const grid = document.getElementById("microGrid");
  const filtered = microItems.filter(item => item.category === category);

  grid.innerHTML = filtered.map((item, index) => `
    <article class="micro-card">
      ${imageFrame(item.render, item.name)}
      <div class="micro-card-copy">
        <span>${String(index + 1).padStart(2, "0")} / ${category.toUpperCase()}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join("");
}

const archiveAssets = [
  ...vehicles.flatMap(v => [
    { title: `${v.fullName} — Exterior`, type: "Exterior", path: v.render },
    { title: `${v.fullName} — Blueprint`, type: "Blueprint", path: v.blueprint },
    { title: `${v.fullName} — Interior`, type: "Interior", path: v.interior }
  ]),
  ...microItems.flatMap(item => [
    { title: `${item.name} — Render`, type: "Render", path: item.render },
    { title: `${item.name} — Blueprint`, type: "Blueprint", path: item.blueprint }
  ])
];

function renderArchive(query = "") {
  const q = query.trim().toLowerCase();
  const assets = archiveAssets.filter(asset =>
    `${asset.title} ${asset.type} ${asset.path}`.toLowerCase().includes(q)
  );

  document.getElementById("assetCount").textContent = assets.length;

  document.getElementById("archiveGrid").innerHTML = assets.map(asset => `
    <article class="archive-card">
      ${imageFrame(asset.path, asset.title)}
      <div class="archive-card-copy">
        <span>${asset.type.toUpperCase()}</span>
        <h3>${asset.title}</h3>
        <code>${asset.path}</code>
      </div>
    </article>
  `).join("");
}

function setupImageFallbacks() {
  document.querySelectorAll(".image-frame img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
    img.addEventListener("load", () => {
      img.style.display = "block";
    });
  });
}

function setupLightbox() {
  const dialog = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const type = document.getElementById("lightboxType");
  const path = document.getElementById("lightboxPath");

  document.addEventListener("click", event => {
    const frame = event.target.closest("[data-lightbox-src]");
    if (!frame) return;

    image.src = frame.dataset.lightboxSrc;
    image.alt = frame.dataset.lightboxTitle;
    title.textContent = frame.dataset.lightboxTitle;
    type.textContent = "XTRON CONCEPT ASSET";
    path.textContent = frame.dataset.lightboxSrc;
    dialog.showModal();
  });

  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

function setupMicroTabs() {
  document.querySelectorAll(".micro-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".micro-tab").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      renderMicro(tab.dataset.category);
      setupImageFallbacks();
    });
  });
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".desktop-nav");

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

renderVehicles();
renderMicro();
renderArchive();
setupImageFallbacks();
setupLightbox();
setupMicroTabs();
setupMenu();

document.getElementById("assetSearch").addEventListener("input", event => {
  renderArchive(event.target.value);
  setupImageFallbacks();
});

document.getElementById("year").textContent = new Date().getFullYear();
