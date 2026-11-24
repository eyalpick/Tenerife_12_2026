// Live weather via Open-Meteo for 3 micro-climates. Cached in localStorage for offline use.
const WX_REGIONS = {
  north: { name: "צפון / אנאגה", lat: 28.41, lng: -16.55, elev: null },
  south: { name: "דרום / חופים", lat: 28.06, lng: -16.73, elev: null },
  teide: { name: "פסגת טיידה (3,555 מ׳)", lat: 28.2723, lng: -16.6425, elev: 3555 }
};
const WX_DAY_REGIONS = { 1: ["north"], 2: ["north"], 3: ["north"], 4: ["north", "south"], 5: ["south"], 6: ["south", "teide"], 7: ["south"], 8: ["south"] };
const WX_KEY = "tenerife_weather_v1";

function wxSummary(code) {
  if (code === 0) return "שמיים בהירים";
  if (code <= 3) return "עננות חלקית";
  if (code <= 48) return "ערפל / עננות כבדה";
  if (code <= 67) return "גשם";
  if (code <= 77) return "שלג";
  if (code <= 82) return "ממטרים";
  return "סופות רעמים";
}

function wxAlerts(region, w) {
  const a = [];
  if (region === "teide") {
    if (w.wind >= 40) a.push("⚠️ רוח חזקה בפסגה – הרכבל עלול להיסגר/להתעכב. בדקו ב-volcanoteide.com בבוקר.");
    else if (w.wind >= 25) a.push("🌬️ רוח ערה בפסגה – מעיל רוח חובה.");
    if (w.max <= 3) a.push("🥶 קור קיצוני בפסגה (קרוב לאפס) – שכבות, כפפות וכובע.");
    else if (w.max <= 8) a.push("🧥 קר בפסגה – פליז + מעיל חם.");
    if (w.rain >= 1) a.push("🌧️ משקעים בפסגה – ייתכן שלג/ערפל, לבדוק לפני העלייה.");
  } else {
    if (w.rain >= 5 || w.prob >= 70) a.push("☔ יום גשום – מעיל גשם וגמישות בתוכנית.");
    else if (w.prob >= 40) a.push("🌦️ סיכוי לממטרים – כדאי מעיל קל.");
    if (w.wind >= 40) a.push("🌬️ רוחות חזקות – זהירות בכבישי הרכס והמצוקים.");
  }
  return a;
}

const Weather = {
  data: null, ts: null,
  load() {
    try { const s = JSON.parse(localStorage.getItem(WX_KEY)); if (s) { this.data = s.data; this.ts = s.ts; } } catch (e) {}
  },
  async fetchAll() {
    const out = {};
    for (const [key, r] of Object.entries(WX_REGIONS)) {
      let url = `https://api.open-meteo.com/v1/forecast?latitude=${r.lat}&longitude=${r.lng}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max` +
        `&timezone=Atlantic%2FCanary&forecast_days=16&wind_speed_unit=kmh`;
      if (r.elev) url += `&elevation=${r.elev}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const j = await res.json();
      out[key] = {};
      j.daily.time.forEach((d, i) => {
        out[key][d] = {
          max: Math.round(j.daily.temperature_2m_max[i]), min: Math.round(j.daily.temperature_2m_min[i]),
          prob: j.daily.precipitation_probability_max[i] || 0, rain: Math.round((j.daily.precipitation_sum[i] || 0) * 10) / 10,
          wind: Math.round(j.daily.wind_speed_10m_max[i]), code: j.daily.weather_code[i]
        };
      });
    }
    this.data = out; this.ts = Date.now();
    localStorage.setItem(WX_KEY, JSON.stringify({ data: out, ts: this.ts }));
  },
  forDay(dayNum, iso) {
    if (!this.data) return null;
    const parts = [];
    for (const key of WX_DAY_REGIONS[dayNum]) {
      const w = this.data[key] && this.data[key][iso];
      if (!w) continue;
      parts.push({ key, name: WX_REGIONS[key].name, w, alerts: wxAlerts(key, w) });
    }
    return parts.length ? parts : null;
  },
  dayHtml(dayNum, iso) {
    const parts = this.forDay(dayNum, iso);
    if (!parts) return '<p class="muted">אין עדיין תחזית ליום זה (טווח התחזית 16 ימים). לחצו "עדכן תחזית חי".</p>';
    return parts.map(p => `<p><strong>${p.name}:</strong> ${wxSummary(p.w.code)} · ${p.w.max}°/${p.w.min}°C · משקעים ${p.w.prob}% (${p.w.rain} מ״מ) · רוח עד ${p.w.wind} קמ״ש</p>` +
      p.alerts.map(a => `<p>${a}</p>`).join('')).join('');
  },
  summaryHtml() {
    if (!this.data) return '<p class="muted">לחצו "עדכן תחזית חי" כדי לטעון תחזית.</p>';
    const today = new Date().toISOString().slice(0, 10);
    const first = ITINERARY[0].iso, base = today > first ? today : first;
    return Object.entries(WX_REGIONS).map(([k, r]) => {
      const w = this.data[k] && this.data[k][base];
      if (!w) return `<div class="wbox"><h4>${r.name}</h4>אין נתון ל-${base}</div>`;
      return `<div class="wbox"><h4>${r.name}</h4>${base.split('-').reverse().slice(0, 2).join('.')}: ${wxSummary(w.code)}<br>${w.max}°/${w.min}°C · רוח ${w.wind} קמ״ש · גשם ${w.prob}%</div>`;
    }).join('');
  }
};
