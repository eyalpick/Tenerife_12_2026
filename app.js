const CAT = {
  lodging: { c: "#3b82f6", n: "לינה" }, attraction_must: { c: "#10b981", n: "אטרקציה / הזמנה" },
  nature_viewpoint: { c: "#f97316", n: "טבע / תצפית" }, restaurant: { c: "#a855f7", n: "אוכל" },
  logistics: { c: "#64748b", n: "לוגיסטיקה" }, culture_city: { c: "#eab308", n: "תרבות / עיר" }
};
const DAY_COLORS = ["#ef4444", "#3b82f6", "#f97316", "#a855f7", "#10b981", "#eab308", "#ec4899", "#14b8a6"];
const $ = id => document.getElementById(id);
const enc = f => encodeURI("assets/" + f);

function tagHtml(t) {
  const m = { "חובה": "must", "מומלץ": "rec", "אופציונלי": "opt", "נסיעה": "drive" };
  return t ? `<span class="tag ${m[t]}">${t}</span>` : "";
}

/* ---------- countdown ---------- */
function tickCountdown() {
  const d = new Date(TRIP.start).getTime() - Date.now();
  if (d <= 0) { $("cd-label").textContent = "הטיול התחיל! 🌴"; $("cd-digits").style.display = "none"; return; }
  const p = n => String(n).padStart(2, "0");
  $("cd-d").textContent = p(Math.floor(d / 864e5)); $("cd-h").textContent = p(Math.floor(d % 864e5 / 36e5));
  $("cd-m").textContent = p(Math.floor(d % 36e5 / 6e4)); $("cd-s").textContent = p(Math.floor(d % 6e4 / 1e3));
}

/* ---------- sidebar ---------- */
function renderSidebar() {
  $("flights-card").innerHTML = `<h2 class="card-title"><i class="fa-solid fa-plane"></i> טיסות</h2>
    <div class="kv"><b>קוד הזמנה:</b> <code>${FLIGHTS.ref}</code></div>` +
    FLIGHTS.legs.map(l => `<div class="ticket"><div class="top"><span>${l.dir}</span><span>${l.air} · ${l.no}</span></div>
      <div class="path"><span>${l.from}</span><span class="arrow"><i class="fa-solid fa-plane"></i></span><span>${l.to}</span></div>
      <div class="times"><span>המראה ${l.dep}</span><span>נחיתה ${l.arr}</span></div>${l.note ? `<div class="muted small">${l.note}</div>` : ""}</div>`).join("") +
    `<div class="muted small"><i class="fa-solid fa-suitcase-rolling"></i> ${FLIGHTS.bag}</div>`;

  $("car-card").innerHTML = `<h2 class="card-title"><i class="fa-solid fa-car"></i> רכב שכור</h2>
    <div class="kv"><b>${CAR.co}</b> – ${CAR.model}</div><div class="kv"><b>אישור:</b> <code>${CAR.ref}</code></div>
    <div class="kv"><b>איסוף:</b> ${CAR.pickup}</div><div class="kv"><b>החזרה:</b> ${CAR.ret}</div><div class="kv">${CAR.price}</div>
    <div class="btnrow"><a class="btn green" href="tel:${CAR.phone}"><i class="fa-solid fa-phone"></i> חיוג ל-Cicar</a></div>`;

  $("lodging-card").innerHTML = `<h2 class="card-title"><i class="fa-solid fa-bed"></i> לינה</h2>` + LODGINGS.map(l => `<div class="lodge">
    <h3>${l.title}</h3><div class="kv">📅 ${l.dates}</div><div class="kv"><b>אישור:</b> <code>${l.ref}</code></div>
    <div class="kv">📍 ${l.addr}</div><div class="kv"><b>GPS:</b> <code>${l.gps}</code></div>
    <div class="kv"><b>צ'ק-אין:</b> ${l.checkin} · <b>צ'ק-אאוט:</b> ${l.checkout}</div><div class="kv">🅿️ ${l.parking}</div>
    <div class="muted small">${l.note}</div>
    <div class="btnrow"><a class="btn" target="_blank" rel="noopener" href="${l.maps}"><i class="fa-solid fa-map-pin"></i> Google Maps</a>
    <a class="btn green" href="tel:${l.phone}"><i class="fa-solid fa-phone"></i> חיוג</a>
    <a class="btn green" target="_blank" rel="noopener" href="https://wa.me/${l.phone.replace('+', '')}"><i class="fa-brands fa-whatsapp"></i> ווטסאפ</a></div></div>`).join("") +
    `<div class="muted small">🔑 קודי הגישה לדירות שמורים במייל/בקובץ האישי – לא מפורסמים באתר.</div>`;

  $("docs-card").innerHTML = `<h2 class="card-title"><i class="fa-solid fa-folder-open"></i> מסמכים ושוברים</h2><div class="doc-list">` +
    DOCS.map(d => d.public
      ? `<a class="doc" target="_blank" rel="noopener" href="${enc(d.file)}"><i class="fa-solid ${d.icon}"></i> ${d.title}</a>`
      : `<div class="doc locked" title="${d.file}"><i class="fa-solid fa-lock"></i> ${d.title}<span class="tag">שמור מקומית</span></div>`).join("") +
    `</div><div class="muted small" style="margin-top:.6rem">🔒 קבצי ה-PDF מכילים פרטי נוסעים ולכן לא מפורסמים לאתר הציבורי. קודי ההזמנה מופיעים בכרטיסים; את ה-PDF/QR שמרו בטלפון.</div>`;
}

/* ---------- map ---------- */
let map, dayLayers = {}, activeFilter = "all";
function pinIcon(n, color) { return L.divIcon({ className: "", html: `<div class="pin" style="background:${color}">${n}</div>`, iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -12] }); }
function popupHtml(day, s) {
  return `<strong>${s.name_he}</strong><br><span dir="ltr">${s.name}</span><br>🕒 ${s.time} · ${s.prio} · יום ${day.num}<br>${s.notes}<br><small>${s.addr}</small><br>
    <a class="btn small" target="_blank" rel="noopener" href="${s.maps}"><i class="fa-solid fa-map-location-dot"></i> כרטיס Google Maps</a>`;
}
function initMap() {
  map = L.map("map", { scrollWheelZoom: false }).setView([28.27, -16.6], 9);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap" }).addTo(map);
  ITINERARY.forEach(day => {
    const g = L.featureGroup();
    (ROUTES[day.num] || []).forEach(seg => L.polyline(seg, { color: DAY_COLORS[day.num - 1], weight: 4, opacity: .8 }).addTo(g));
    day.stops.forEach(s => L.marker([s.lat, s.lng], { icon: pinIcon(s.n, (CAT[s.cat] || CAT.logistics).c) }).bindPopup(popupHtml(day, s)).addTo(g));
    dayLayers[day.num] = g;
  });
  $("map-filters").innerHTML = `<button class="chip active" data-f="all">כל הטיול</button>` + ITINERARY.map(d => `<button class="chip" data-f="${d.num}" style="border-color:${DAY_COLORS[d.num - 1]}">יום ${d.num}</button>`).join("");
  $("map-filters").addEventListener("click", e => { const b = e.target.closest(".chip"); if (b) setMapFilter(b.dataset.f); });
  $("legend").innerHTML = Object.values(CAT).map(c => `<span><i style="background:${c.c}"></i>${c.n}</span>`).join("");
  setMapFilter("all");
}
function setMapFilter(f) {
  activeFilter = f;
  document.querySelectorAll("#map-filters .chip").forEach(c => c.classList.toggle("active", c.dataset.f === String(f)));
  Object.entries(dayLayers).forEach(([n, g]) => { const on = f === "all" || String(n) === String(f); if (on && !map.hasLayer(g)) g.addTo(map); if (!on && map.hasLayer(g)) map.removeLayer(g); });
  const b = L.featureGroup(Object.entries(dayLayers).filter(([n]) => f === "all" || String(n) === String(f)).map(([, g]) => g)).getBounds();
  if (b.isValid()) map.fitBounds(b, { padding: [25, 25] });
}

/* ---------- days ---------- */
const items = []; // for the drawer
function renderDays() {
  items.length = 0;
  $("days").innerHTML = ITINERARY.map(day => {
    const dd = day.date.slice(0, 5);
    const bookings = ACTIVITIES.filter(a => a.days.includes(day.num)).map(a => `<div class="booking"><h4><i class="fa-solid ${a.icon}"></i> ${a.title}</h4>
      <div class="kv"><b>אישור:</b> <code>${a.ref}</code></div><div class="kv">🕒 ${a.when}</div><div class="kv">📍 ${a.meet}</div><div class="kv">💶 ${a.price}</div>
      <div class="btnrow"><a class="btn" target="_blank" rel="noopener" href="${a.maps}"><i class="fa-solid fa-map-pin"></i> Google Maps</a></div></div>`).join("");
    const img = DAY_IMAGES[day.num] ? `<figure class="img-card"><img src="${enc(DAY_IMAGES[day.num].file)}" alt="" loading="lazy" data-lb="1"><figcaption>${DAY_IMAGES[day.num].cap}</figcaption></figure>` : "";
    const tl = day.items.map(it => {
      const idx = items.push({ day: day.num, it }) - 1;
      const stopIds = it.stops || [];
      const navBtns = stopIds.map(n => {
        const s = day.stops[n - 1];
        const c = (CAT[s.cat] || CAT.logistics).c;
        const lbl = stopIds.length > 1 ? `ניווט: ${s.name_he}` : "ניווט Google Maps";
        return `<a class="btn small" target="_blank" rel="noopener" href="${s.maps}"><span class="pin-dot" style="background:${c}">${s.n}</span> <i class="fa-solid fa-map-location-dot"></i> ${lbl}</a>` +
          `<button class="btn small ghost" data-focus="${day.num}|${s.n}"><i class="fa-solid fa-crosshairs"></i> במפה</button>`;
      }).join("");
      const moreBtn = it.sub.length ? `<button class="btn small ghost" data-more="${idx}"><i class="fa-solid fa-book-open"></i> קרא בהרחבה</button>` : "";
      const actions = (navBtns || moreBtn) ? `<div class="btnrow">${navBtns}${moreBtn}</div>` : "";
      return `<div class="item"><div class="tm">${it.time || ""}</div><div class="tx">${tagHtml(it.tag)}${it.html}${actions}</div></div>`;
    }).join("");
    return `<div class="day" id="day-${day.num}" data-iso="${day.iso}">
      <div class="day-head" data-toggle="${day.num}"><div><h2><span>יום ${day.num} – ${day.weekday} ${dd}.2026</span></h2><div class="day-sub">${day.title}</div></div><i class="fa-solid fa-chevron-down chev"></i></div>
      <div class="day-body">
        <div class="block w"><h4><i class="fa-solid fa-cloud-sun"></i> תחזית מזג אוויר</h4><div id="wx-${day.num}"></div></div>
        ${bookings}
        ${day.intro.length ? `<div class="block"><h4><i class="fa-solid fa-route"></i> סקירת היום</h4>${day.intro.map(p => `<p>${p}</p>`).join("")}</div>` : ""}
        ${img}
        <div class="block"><div class="block-head"><h4><i class="fa-solid fa-clock"></i> לוח זמנים מפורט</h4><button class="btn small orange" data-map-day="${day.num}"><i class="fa-solid fa-map"></i> הצג את היום במפה</button></div><div class="tl">${tl}</div></div>
        <div class="block l"><h4><i class="fa-solid fa-bed"></i> לינה</h4><p>${day.lodging}</p></div>
      </div></div>`;
  }).join("");
  refreshWeather();
}
function refreshWeather() {
  ITINERARY.forEach(d => { const el = $("wx-" + d.num); if (el) el.innerHTML = Weather.dayHtml(d.num, d.iso); });
  $("weather-summary").innerHTML = Weather.summaryHtml();
  $("weather-ts").textContent = Weather.ts ? " עודכן: " + new Date(Weather.ts).toLocaleString("he-IL") : "";
}

function updateToggleAll() {
  const all = [...document.querySelectorAll(".day")].every(d => d.classList.contains("active"));
  $("toggle-all").innerHTML = all ? '<i class="fa-solid fa-angles-up"></i> סגור את כל הימים' : '<i class="fa-solid fa-angles-down"></i> פתח את כל הימים';
}
function autoOpenToday() {
  const t = new Date(); const iso = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  let card = document.querySelector(`.day[data-iso="${iso}"]`);
  if (card) { const b = document.createElement("span"); b.className = "today"; b.innerHTML = '<i class="fa-solid fa-location-dot"></i> היום'; card.querySelector("h2").prepend(b); }
  else card = document.querySelector(".day");
  card.classList.add("active"); updateToggleAll();
  if (card.querySelector(".today")) setTimeout(() => card.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
}

/* ---------- drawer & events ---------- */
function openDrawer(i) {
  const { it } = items[i];
  $("drawer-title").innerHTML = (it.time ? it.time + " · " : "") + "פרטים";
  $("drawer-body").innerHTML = `<p>${it.html}</p><ul>${it.sub.map(s => `<li>${s}</li>`).join("")}</ul>`;
  $("drawer").classList.add("on"); $("drawer-backdrop").classList.add("on"); document.body.style.overflow = "hidden";
}
function closeDrawer() { $("drawer").classList.remove("on"); $("drawer-backdrop").classList.remove("on"); document.body.style.overflow = ""; }

document.addEventListener("click", e => {
  const t = e.target.closest("[data-toggle]");
  if (t) { $("day-" + t.dataset.toggle).classList.toggle("active"); updateToggleAll(); return; }
  const m = e.target.closest("[data-more]"); if (m) { openDrawer(+m.dataset.more); return; }
  const md = e.target.closest("[data-map-day]"); if (md) { setMapFilter(md.dataset.mapDay); $("map").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  const f = e.target.closest("[data-focus]");
  if (f) { const [d, n] = f.dataset.focus.split("|").map(Number); setMapFilter(String(d)); const s = ITINERARY[d - 1].stops[n - 1]; map.setView([s.lat, s.lng], 13); $("map").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  if (e.target.dataset && e.target.dataset.lb) { $("lightbox-img").src = e.target.src; $("lightbox").classList.add("on"); return; }
  if (e.target.closest("#lightbox")) $("lightbox").classList.remove("on");
});
$("drawer-close").onclick = closeDrawer; $("drawer-backdrop").onclick = closeDrawer;
$("toggle-all").onclick = () => { const ds = [...document.querySelectorAll(".day")]; const any = ds.some(d => !d.classList.contains("active")); ds.forEach(d => d.classList.toggle("active", any)); updateToggleAll(); };
$("weather-btn").onclick = async () => {
  const b = $("weather-btn"); b.disabled = true; b.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> טוען...';
  try { await Weather.fetchAll(); refreshWeather(); b.innerHTML = '<i class="fa-solid fa-check"></i> עודכן'; }
  catch (err) { b.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> שגיאת חיבור'; }
  setTimeout(() => { b.disabled = false; b.innerHTML = '<i class="fa-solid fa-rotate"></i> עדכן תחזית חי'; }, 3500);
};

/* ---------- init ---------- */
Weather.load();
renderSidebar(); renderDays(); tickCountdown(); setInterval(tickCountdown, 1000);
if (window.L) initMap(); else $("map").innerHTML = '<p class="muted" style="padding:1rem">המפה דורשת חיבור לאינטרנט.</p>';
autoOpenToday();
Weather.fetchAll().then(refreshWeather).catch(() => {});
