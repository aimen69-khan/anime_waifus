"use strict";

const SERIES = {
  "demon-slayer":  { name: "Demon Slayer",    color: "#4fd1a1" },
  "one-piece":     { name: "One Piece",       color: "#ff9a3c" },
  "jjk":           { name: "Jujutsu Kaisen",  color: "#8b7cff" },
  "bleach":        { name: "Bleach",          color: "#ff7a5c" },
  "frieren":       { name: "Frieren",         color: "#8fd3ff" },
  "oshi-no-ko":    { name: "Oshi no Ko",      color: "#ff7ac8" },
  "naruto":        { name: "Naruto",          color: "#ffcf4a" },
  "solo-leveling": { name: "Solo Leveling",   color: "#6f9bff" },
  "black-clover":  { name: "Black Clover",    color: "#bfe04a" }
};

/* ---------- Characters ---------- */
const CHARACTERS = [
  /* Demon Slayer */
  { id: "mitsuri-kanroji", name: "Mitsuri Kanroji", series: "demon-slayer", role: "Love Hashira", power: 88,
    tags: ["cheerful", "super strength", "flexible blade"],
    about: "The Love Hashira is warm, openhearted and endlessly kind. Her whip-like blade and unusual muscle density make her one of the strongest swordswomen in the Demon Slayer Corps." },
  { id: "shinobu-kocho", name: "Shinobu Kocho", series: "demon-slayer", role: "Insect Hashira", power: 84,
    tags: ["calm smile", "poison expert", "sharp mind"],
    about: "Gentle on the surface and fierce underneath. Shinobu compensates for lighter strength with speed, precision and a poison she developed herself." },

  /* One Piece */
  { id: "nami", name: "Nami", series: "one-piece", role: "Navigator, Straw Hat Pirates", power: 78,
    tags: ["navigator", "weather magic", "treasure hunter"],
    about: "A brilliant cartographer who can read any sea, Nami fights with her Clima-Tact and a talent for outsmarting stronger opponents." },
  { id: "nico-robin", name: "Nico Robin", series: "one-piece", role: "Archaeologist, Straw Hat Pirates", power: 86,
    tags: ["calm", "scholar", "Hana Hana no Mi"],
    about: "The only person able to read the Poneglyphs. Robin sprouts extra limbs anywhere she likes, and she stays composed in the middle of any storm." },
  { id: "boa-hancock", name: "Boa Hancock", series: "one-piece", role: "Pirate Empress", power: 92,
    tags: ["empress", "Mero Mero no Mi", "haki user"],
    about: "Ruler of Amazon Lily and a Warlord of the Sea. Hancock is proud, elegant and fiercely loyal once her heart is set." },

  /* Jujutsu Kaisen */
  { id: "yuki-tsukumo", name: "Yuki Tsukumo", series: "jjk", role: "Special Grade Sorcerer", power: 96,
    tags: ["special grade", "free spirit", "mass-based power"],
    about: "One of only four special grade sorcerers. Yuki is blunt, carefree and capable of hitting with the weight of a planet." },
  { id: "mei-mei", name: "Mei Mei", series: "jjk", role: "Grade 1 Sorcerer", power: 80,
    tags: ["strategist", "crow control", "money-minded"],
    about: "A cool-headed professional who sees the world through her crows and prices every job accordingly. Efficient, precise and rarely rattled." },

  /* Bleach */
  { id: "yoruichi-shihoin", name: "Yoruichi Shihoin", series: "bleach", role: "Former Captain, Flash Goddess", power: 93,
    tags: ["shunpo master", "cat form", "hand-to-hand"],
    about: "Known as the Flash Goddess, Yoruichi is the fastest Soul Reaper in history and a martial arts master with a playful streak." },
  { id: "rangiku-matsumoto", name: "Rangiku Matsumoto", series: "bleach", role: "Lieutenant, Squad 10", power: 82,
    tags: ["lieutenant", "ash blade", "loyal friend"],
    about: "Easygoing and fun-loving, but deeply loyal. Her zanpakuto turns into a cloud of ash that moves at her command." },

  /* Frieren */
  { id: "frieren", name: "Frieren", series: "frieren", role: "Elf Mage", power: 97,
    tags: ["elf", "over 1000 years old", "mage"],
    about: "A mage who outlived her hero party and now travels to understand the people she once overlooked. Quiet, dry-humored and absurdly powerful." },
  { id: "ubel", name: "Übel", series: "frieren", role: "First-Class Mage", power: 85,
    tags: ["first-class", "slicing magic", "intense"],
    about: "A blunt, highly skilled mage whose imagination-driven spells cut through nearly anything. Übel trusts instinct over theory." },
  { id: "fern", name: "Fern", series: "frieren", role: "First-Class Mage", power: 92,
    tags: ["first-class", "slicing magic", "intense"],
    about: "Fern is the deadpan, hyper-disciplined prodigy who essentially acts as the pragmatic mom of Frieren's journey. While she looks like a stoic, low-energy teenager wrapped in dark robes, she is a terrifyingly lethal mage." },

  /* Oshi no Ko */
  { id: "ai-hoshino", name: "Ai Hoshino", series: "oshi-no-ko", role: "Idol, B-Komachi", power: 90,
    tags: ["idol", "center stage", "mysterious"],
    about: "A once-in-a-generation idol whose smile hid a lot. Ai's presence on stage made everyone feel like she was singing to them alone." },
  { id: "mem-cho", name: "Mem-Cho", series: "oshi-no-ko", role: "Streamer and Idol", power: 70,
    tags: ["online star", "playful", "loyal"],
    about: "A bubbly online personality with a sharp sense of humor and a talent for turning attention into fans." },

  /* Naruto */
  { id: "hinata-hyuga", name: "Hinata Hyuga", series: "naruto", role: "Hyuga Clan Kunoichi", power: 97,
    tags: ["Byakugan", "gentle fist", "devoted"],
    about: "Shy at first, but her determination never wavers. Hinata's Gentle Fist and Byakugan make her a top-tier ninja." },
    { id: "ino", name: "Ino Yamanaka", series: "naruto", role: "Yamanaka Clan", power: 87,
    tags: ["Byakugan", "gentle fist", "devoted"],
    about: "Ino Yamanaka is the sharp-witted, fashion-forward kunoichi who evolved from a competitive rival into the indispensable backbone of Konoha’s defense. Behind her confident persona and long blonde ponytail lies a terrifying mastery over the mind itself." },
  { id: "tsunade", name: "Tsunade", series: "naruto", role: "Fifth Hokage", power: 95,
    tags: ["Hokage", "medical ninja", "monstrous strength"],
    about: "One of the legendary Sannin. Tsunade can heal almost any wound and shatter the ground with a single punch." },
  { id: "kushina-uzumaki", name: "Kushina Uzumaki", series: "naruto", role: "Uzumaki Clan Kunoichi", power: 89,
    tags: ["chakra chains", "fierce mom", "sealing"],
    about: "Loud, fearless and fiercely protective. Kushina's chakra chains and sealing talent made her one of Konoha's most formidable fighters." },

  /* Solo Leveling */
  { id: "cha-hae-in", name: "Cha Hae-In", series: "solo-leveling", role: "S-Rank Hunter", power: 91,
    tags: ["S-rank", "swordswoman", "keen senses"],
    about: "A top-ranked Hunter with exceptional sword skills and a rare sensitivity to other people's mana." },
  { id: "esil-radiru", name: "Esil Radiru", series: "solo-leveling", role: "Elf Princess", power: 83,
    tags: ["elf", "archer", "elegant"],
    about: "An elven warrior and skilled archer, graceful in battle and steadfast in loyalty." },

  /* Black Clover */
  { id: "mereoleona-vermillion", name: "Mereoleona Vermillion", series: "black-clover", role: "Captain, Crimson Lion Kings", power: 81,
    tags: ["fire magic", "captain", "intense"],
    about: "A blazing fire mage with a legendary temper and mountains of strength. Mereoleona hits first and trains harder than anyone." },
    { id: "mimosa", name: "Mimosa Vermillion", series: "black-clover", role: "Combat Medic & Tactical Support Specialist", power: 94,
    tags: ["Royal Knights Squad, Clover Kingdom Royal Family"],
    about: "Mimosa Vermillion is the gentle-hearted noble of the Golden Dawn whose angelic appearance hides immense battlefield grit. While she comes from one of the Clover Kingdom's most powerful royal families, Mimosa rejects aristocratic elitism in favor of genuine kindness, sharp honesty, and unwavering devotion to her allies." },
  { id: "charlotte-roselei", name: "Charlotte Roselei", series: "black-clover", role: "Captain, Blue Rose Knights", power: 89,
    tags: ["thorn magic", "captain", "romantic"],
    about: "A dignified captain who commands thorny vines with elegance. Charlotte is strict, caring and a little dramatic." },
  { id: "vanessa-enoteca", name: "Vanessa Enoteca", series: "black-clover", role: "Black Bulls Mage", power: 85,
    tags: ["thread magic", "fortune teller", "laid back"],
    about: "A laid-back Black Bull whose thread magic can bind, trap and curse. She loves a drink and a good gamble." }
];


const state = {
  query: "",
  series: "all",
  sort: "series",
  favoritesOnly: false,
  favorites: loadFavorites(),
  currentId: null
};


const $ = (sel) => document.querySelector(sel);
const grid = $("#grid");
const chipsEl = $("#chips");
const emptyEl = $("#empty");
const countEl = $("#resultCount");
const favCountEl = $("#favCount");
const navFav = $("#navFav");
const modal = $("#modal");
const toastEl = $("#toast");
let lastFocus = null;
let toastTimer = null;


function loadFavorites() {
  try {
    const raw = localStorage.getItem("waifu-hall-favs");
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    return new Set();
  }
}
function saveFavorites() {
  try {
    localStorage.setItem("waifu-hall-favs", JSON.stringify([...state.favorites]));
  } catch (e) { /* storage unavailable, ignore */ }
}


function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function placeholder(c) {
  const color = SERIES[c.series].color;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
    <defs>
      <pattern id="d" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.8" fill="rgba(29,22,54,0.22)"/>
      </pattern>
    </defs>
    <rect width="300" height="400" fill="${color}"/>
    <rect width="300" height="400" fill="url(#d)"/>
    <text x="150" y="235" text-anchor="middle" font-family="Arial Black, Impact, sans-serif"
          font-size="120" fill="#1d1636">${initials(c.name)}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}


function buildImage(c) {
  const img = document.createElement("img");
  const exts = ["jpg", "png", "webp"];
  let i = 0;
  img.alt = c.name + " from " + SERIES[c.series].name;
  img.loading = "lazy";
  img.onerror = () => {
    i++;
    if (i < exts.length) {
      img.src = `images/${c.id}.${exts[i]}`;
    } else {
      img.onerror = null;
      img.src = placeholder(c);
    }
  };
  img.src = `images/${c.id}.${exts[0]}`;
  return img;
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}


function getVisible() {
  const q = state.query.trim().toLowerCase();
  let list = CHARACTERS.filter((c) => {
    if (state.series !== "all" && c.series !== state.series) return false;
    if (state.favoritesOnly && !state.favorites.has(c.id)) return false;
    if (!q) return true;
    const hay = [c.name, SERIES[c.series].name, c.role, ...c.tags].join(" ").toLowerCase();
    return hay.includes(q);
  });

  const seriesOrder = Object.keys(SERIES);
  if (state.sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sort === "power") {
    list.sort((a, b) => b.power - a.power);
  } else {
    list.sort((a, b) =>
      seriesOrder.indexOf(a.series) - seriesOrder.indexOf(b.series) || a.name.localeCompare(b.name));
  }
  return list;
}


function renderChips() {
  chipsEl.innerHTML = "";
  const make = (key, label, color) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = label;
    b.setAttribute("aria-pressed", String(state.series === key));
    if (color) {
      b.style.setProperty("--chip-color", color);
      b.style.setProperty("--chip-ink", "#1d1636");
    }
    b.addEventListener("click", () => {
      state.series = key;
      renderChips();
      renderGrid();
    });
    chipsEl.appendChild(b);
  };
  make("all", "All series", null);
  Object.entries(SERIES).forEach(([key, s]) => make(key, s.name, s.color));
}

function renderGrid() {
  const list = getVisible();
  grid.innerHTML = "";

  list.forEach((c) => {
    const s = SERIES[c.series];
    const isFav = state.favorites.has(c.id);

    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--accent", s.color);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${c.name}`);

    const art = document.createElement("div");
    art.className = "card-art";
    art.appendChild(buildImage(c));

    const tag = document.createElement("span");
    tag.className = "card-series";
    tag.textContent = s.name;
    art.appendChild(tag);

    const fav = document.createElement("button");
    fav.type = "button";
    fav.className = "fav-btn";
    fav.innerHTML = isFav ? "♥" : "♡";
    fav.setAttribute("aria-pressed", String(isFav));
    fav.setAttribute("aria-label", (isFav ? "Remove " : "Add ") + c.name + (isFav ? " from" : " to") + " favorites");
    fav.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(c.id, fav);
    });

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `<h3></h3><p class="card-role"></p>`;
    body.querySelector("h3").textContent = c.name;
    body.querySelector(".card-role").textContent = c.role;

    card.append(fav, art, body);
    card.addEventListener("click", () => openModal(c.id));
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(c.id);
      }
    });
    grid.appendChild(card);
  });

  emptyEl.hidden = list.length > 0;
  countEl.textContent = `${list.length} ${list.length === 1 ? "character" : "characters"}` +
    (state.favoritesOnly ? " in your favorites" : "");
  favCountEl.textContent = state.favorites.size;
  navFav.setAttribute("aria-pressed", String(state.favoritesOnly));
}


function toggleFavorite(id, btn) {
  const c = CHARACTERS.find((x) => x.id === id);
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${c.name} removed from favorites`);
  } else {
    state.favorites.add(id);
    showToast(`${c.name} added to favorites`);
    if (btn) {
      btn.classList.remove("pop");
      void btn.offsetWidth;
      btn.classList.add("pop");
    }
  }
  saveFavorites();
  favCountEl.textContent = state.favorites.size;

  if (state.favoritesOnly) {
    renderGrid();
  } else if (btn) {
    const on = state.favorites.has(id);
    btn.innerHTML = on ? "♥" : "♡";
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", (on ? "Remove " : "Add ") + c.name + (on ? " from" : " to") + " favorites");
  }
  if (state.currentId === id) updateModalFav();
}

function openModal(id) {
  const c = CHARACTERS.find((x) => x.id === id);
  if (!c) return;
  const s = SERIES[c.series];
  state.currentId = id;
  if (modal.hidden) lastFocus = document.activeElement;

  modal.querySelector(".modal-card").style.setProperty("--accent", s.color);
  const art = $("#modalArt");
  art.innerHTML = "";
  art.appendChild(buildImage(c));

  $("#modalSeries").textContent = s.name;
  $("#modalName").textContent = c.name;
  $("#modalRole").textContent = c.role;
  $("#modalAbout").textContent = c.about;
  $("#modalTags").innerHTML = c.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  $("#modalPowerNum").textContent = c.power + " / 100";

  const bar = $("#modalPowerBar");
  bar.style.width = "0";
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = c.power + "%"; }));

  updateModalFav();
  modal.hidden = false;
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal-close").focus();
}

function updateModalFav() {
  const btn = $("#modalFav");
  const on = state.favorites.has(state.currentId);
  btn.textContent = on ? "Remove from favorites" : "Add to favorites";
}

function closeModal() {
  modal.hidden = true;
  state.currentId = null;
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}

function summon() {
  const pool = CHARACTERS.filter((c) => c.id !== state.currentId);
  const pick = pool[Math.floor(Math.random() * pool.length)];
  openModal(pick.id);
}


$("#searchInput").addEventListener("input", (e) => {
  state.query = e.target.value;
  renderGrid();
});

$("#sortSelect").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderGrid();
});

navFav.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  renderGrid();
  document.getElementById("collection").scrollIntoView({ behavior: "smooth" });
});

$("#resetBtn").addEventListener("click", () => {
  state.query = "";
  state.series = "all";
  state.favoritesOnly = false;
  $("#searchInput").value = "";
  renderChips();
  renderGrid();
});

$("#summonBtn").addEventListener("click", summon);
$("#modalNext").addEventListener("click", summon);
$("#modalFav").addEventListener("click", () => toggleFavorite(state.currentId, null));

modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();

  if (e.key === "Tab") {
    const focusable = modal.querySelectorAll("button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

renderChips();
renderGrid();