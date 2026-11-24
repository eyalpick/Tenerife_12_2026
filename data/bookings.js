// Hand-authored booking data. NOTE: no PIN / secret codes and no passenger surnames on purpose (public site).
const TRIP = { start: "2026-12-05T05:20:00+02:00", firstDay: "2026-12-05", lastDay: "2026-12-12" };

const FLIGHTS = {
  ref: "84D9PA",
  bag: "לכל נוסע: פריט אישי 40×30×15 ס״מ + טרולי עלייה למטוס עד 8 ק״ג (55×40×23 ס״מ). כרטיס Economy Light – ללא מזוודה לבטן.",
  legs: [
    { dir: "הלוך – שבת 05.12", no: "LX 257", air: "Swiss", from: "TLV (טרמינל 3)", to: "ZRH", dep: "05:20", arr: "08:40", note: "כולל ארוחת בוקר" },
    { dir: "קונקשן בציריך 4:10 ש׳", no: "LX 8214", air: "Edelweiss Air", from: "ZRH", to: "TFS (טנריף דרום)", dep: "12:50", arr: "16:30", note: "כולל ארוחה" },
    { dir: "חזור – שבת 12.12", no: "SN 3782", air: "Brussels Airlines", from: "TFS", to: "BRU", dep: "14:20", arr: "19:50", note: "" },
    { dir: "קונקשן בבריסל 1:25 ש׳", no: "SN 3293", air: "Brussels Airlines", from: "BRU", to: "TLV (טרמינל 3)", dep: "21:15", arr: "02:35 (13.12)", note: "" }
  ]
};

const CAR = {
  ref: "A35GS", co: "Cicar", model: "Peugeot 208 AUT. (גיר אוטומטי)", phone: "922390248",
  pickup: "שבת 05.12 ~17:00 – דלפק Cicar בטרמינל TFS", ret: "שבת 12.12 – מגרש Cicar ב-TFS (לתדלק מלא בכניסה לשדה)",
  price: "188.53 € – משולם בדלפק באיסוף. ביטוח מקיף 100%, ללא השתתפות עצמית וללא פיקדון, ק״מ חופשי."
};

const LODGINGS = [
  { id: "north", title: "דירת צפון – Apartamento con vistas al jardín", dates: "05.12 – 08.12 (3 לילות)", ref: "5720.107.095",
    addr: "Calle Manuel Yanes Barreto, 1, 38400 Puerto de la Cruz", gps: "N 28° 24.664, W 16° 33.552", phone: "+34600657686",
    checkin: "15:00–00:00", checkout: "עד 11:00", parking: "חניה פרטית במקום – חינם",
    maps: "https://www.google.com/maps/place/C.+Manuel+Yanes+Barreto,+1,+38400+Puerto+de+la+Cruz,+Santa+Cruz+de+Tenerife,+%D7%A1%D7%A4%D7%A8%D7%93%E2%80%AD/@28.4107896,-16.5590887,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a7fc03290d9a5:0x442542b5218f7bb2!8m2!3d28.4107896!4d-16.5590887!16s%2Fg%2F11c19srg4h",
    note: "חדר שינה + סלון + מטבח מלא, מדיח ומכונת כביסה." },
  { id: "south", title: "דירת דרום – Las Americas Pool & Private Patio Apartment 10", dates: "08.12 – 12.12 (4 לילות)", ref: "5739.209.307",
    addr: "Avenida Antonio Dominguez, 42 Bloque 4 - 7, 38660 Playa de las Américas", gps: "N 28° 3.397, W 16° 43.510", phone: "+34628298987",
    checkin: "14:00–23:00", checkout: "עד 10:00", parking: "חניה פרטית במקום – 12 € ליום",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Antonio+Dominguez+42+Playa+de+las+Americas",
    note: "חדר שינה + סלון + פטיו פרטי, מיזוג בכל חדר, מטבח ומכונת כביסה." }
];

// days: which day cards show this booking
const ACTIVITIES = [
  { days: [5], icon: "fa-ship", title: "שייט לווייתנים ודולפינים – Travelin' Lady", ref: "GYGKBF3FWKXR (GetYourGuide)",
    when: "רביעי 09.12 – יציאה 09:00 (עד 10:30)", meet: "התייצבות ברציף הדייגים ב-Los Cristianos ב-08:30: הפס הכחול על הרצפה → שער ירוק → קיוסק מס׳ 2",
    price: "59.80 € לזוג (חיוב 06.12, ביטול חינם עד 08.12 09:00)", maps: "https://www.google.com/maps/place/Travelin+Lady+Tenerife/@28.0494058,-16.7190012,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a982b7e0d010b:0x9de9fa43718cf7f!8m2!3d28.0494058!4d-16.7190012!16s%2Fg%2F11cn3pn7s8" },
  { days: [6], icon: "fa-cable-car", title: "רכבל הר הגעש טיידה – Teide Cable Car", ref: "2UPU8-5EF1 (כרטיסים: -20574, -50552)",
    when: "חמישי 10.12 – עלייה 12:10", meet: "להיות בשער העלייה ב-11:50 (20 דק׳ מראש). פליז + מעיל רוח, כובע, כפפות, נעלי הליכה סגורות.",
    price: "86.00 € לזוג – כולל תערוכת Science and Legend. שינוי/ביטול חינם עד 09.12 18:00 ב-volcanoteide.com", maps: "https://www.google.com/maps/place/Teide+Cable+Car/data=!4m7!3m6!1s0xc6a8386feaf6b95:0x8a90b97491150633!8m2!3d28.2544624!4d-16.6258129!16s%2Fg%2F120jfbpd!19sChIJlWuv_oaDagwRMwYVkXS5kIo" },
  { days: [6], icon: "fa-spa", title: "ספא תרמי – Aqua Club Termal", ref: "Spalopia – VIP Thermal Circuit (Non Resident)",
    when: "חמישי 10.12 – 17:30 עד 20:30", meet: "התייצבות מומלצת 17:15 לקבלת חלוקים. Calle Galicia 6, Torviscas Alto, Costa Adeje. טל׳ +34 922 71 65 55",
    price: "118.00 € לזוג – שולם במלואו. ביטול חינם עד 09.12 17:30", maps: "https://www.google.com/maps/place/Aqua+Club+Termal/data=!4m7!3m6!1s0xc6a9757edc1db5f:0x76319601aebf444d!8m2!3d28.0873003!4d-16.7245736!16s%2Fg%2F1thmgn2w!19sChIJX9vB7VeXagwRTUS_rgGWMXY" },
  { days: [7], icon: "fa-person-swimming", title: "2 צלילות מודרכות לאיל – Diving Atlantis", ref: "D156-261110-2 (P64) · הזמנה 6af2c4270689 · אישור 534118",
    when: "שישי 11.12 – יציאה 09:00, סיום ~13:15", meet: "התייצבות 08:15–08:30, Paseo Maritimo 17, Los Cristianos. טל׳/ווטסאפ +34 671 40 89 70",
    price: "90 € + ציוד 15 €. שולמה מקדמה 20 € – יתרה 85 € בדלפק. מעל 25 שעות עד הטיסה.", maps: "https://www.google.com/maps/place/Diving+Atlantis+Tenerife/@28.0481228,-16.711924,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a8c3429b8e319:0x497de37ad5a91e8f!8m2!3d28.0481228!4d-16.711924!16s%2Fg%2F11b877xdxy" }
];

const WEEKEND_NOTE = "";

// All files in assets/. public=false => kept local only (contains traveler details), never published.
const DOCS = [
  { file: "טיסות.pdf", title: "כרטיסי טיסה", icon: "fa-plane", public: false },
  { file: "cicar_car_rental_confirmation_A35GS.pdf", title: "אישור רכב Cicar", icon: "fa-car", public: false },
  { file: "Bookings _ Step 6 _ CICAR.pdf", title: "אישור רכב Cicar (עותק נוסף)", icon: "fa-car", public: false },
  { file: "Apartamento con vistas al jardín.pdf", title: "אישור דירת צפון", icon: "fa-bed", public: false },
  { file: "Las Americas Pool & Private Patio 10.pdf", title: "אישור דירת דרום", icon: "fa-bed", public: false },
  { file: "Travelin Lady Eco Yacht Whale Dolphin Safari.pdf", title: "שובר שייט Travelin' Lady", icon: "fa-ship", public: false },
  { file: "Mount Teide Cable Car.pdf", title: "כרטיסי רכבל טיידה", icon: "fa-cable-car", public: false },
  { file: "Spalopia SPA.pdf", title: "אישור ספא Aqua Club Termal", icon: "fa-spa", public: false },
  { file: "צלילה.pdf", title: "אישור צלילות", icon: "fa-person-swimming", public: false },
  { file: "צלילה1.pdf", title: "אישור צלילות (2)", icon: "fa-person-swimming", public: false },
  { file: "travelin_lady_meeting_point.jpg", title: "תמונה: נקודת מפגש השייט", icon: "fa-image", public: true },
  { file: "teide_clothing_recommendations.png", title: "תמונה: לבוש לטיידה (למירי)", icon: "fa-image", public: true }
];

const DAY_IMAGES = {
  5: { file: "travelin_lady_meeting_point.jpg", cap: "נקודת המפגש לשייט בנמל Los Cristianos – שער ירוק, פס כחול על הרצפה ברציף הדייגים" },
  6: { file: "teide_clothing_recommendations.png", cap: "הנחיות לבוש לטיידה – למירי" }
};
