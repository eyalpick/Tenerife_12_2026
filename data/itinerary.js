const ITINERARY = [
 {
  "num": 1,
  "weekday": "שבת",
  "date": "05.12.2026",
  "title": "נחיתה בדרום, איסוף רכב, נסיעה לצפון וערב קנרי ב-<code>Puerto de la Cruz</code>",
  "intro": [
   "<strong>ציר נסיעה:</strong> שדה התעופה <code>TFS</code> ⬅ אוטוסטרדה <code>TF-1</code> ו-<code>TF-5</code> ⬅ <code>Puerto de la Cruz</code> (כ-90 ק\"מ, כ-75 דקות בכביש מהיר דו-מסלולי ומואר)."
  ],
  "items": [
   {
    "time": "16:30–17:30",
    "tag": "חובה",
    "html": "<strong>נחיתה ב-<code>TFS</code> ואיסוף הרכב השכור בדלפק <code>Cicar</code> שבטרמינל:</strong> אישור <code>A35GS</code>, רכב <code>Peugeot 208 AUT.</code>, תשלום <code>188.53 €</code> במקום ללא פיקדון וללא בדיקת רכב ביציאה.",
    "sub": [],
    "stops": [
     1
    ]
   },
   {
    "time": "17:30–18:45",
    "tag": "",
    "html": "<strong>נסיעה ל-<code>Puerto de la Cruz</code>:</strong> נסיעה נוחה באוטוסטרדה <code>TF-1</code> ו-<code>TF-5</code> (התחלה בשקיעה, הגעה לצפון בחשיכה).",
    "sub": [],
    "stops": []
   },
   {
    "time": "18:45–19:15",
    "tag": "חובה",
    "html": "<strong>צ'ק-אין בדירה (<code>Apartamento con vistas al jardín</code>):</strong> חניה פרטית חינם במקום, פריקת מזוודות והתארגנות קלה (אישור <code>5720.107.095</code>).",
    "sub": [],
    "stops": [
     2
    ]
   },
   {
    "time": "19:15–19:50",
    "tag": "חובה",
    "html": "<strong>הצטיידות חובה בסופרמרקט הסמוך (<code>HiperDino Melchor Luz</code> – 350 מטר מהדירה):</strong>",
    "sub": [
     "<em>דגש קריטי:</em> סופרמרקטים גדולים סגורים מחר ביום ראשון! מצטיידים במצרכים לארוחת הבוקר של ראשון, פירות טריים, שישיית מים מינרליים ונשנושים לדרך."
    ],
    "stops": [
     3
    ]
   },
   {
    "time": "19:50–22:15",
    "tag": "מומלץ",
    "html": "<strong>סיור ערב רגלי תחת אורות החג וארוחת ערב ברובע הדייגים:</strong>",
    "sub": [
     "הליכה רגלית נעימה (10 דקות) דרך טיילת <code>San Telmo</code> אל כיכר <code>Plaza del Charco</code> המוארת באורות דצמבר וחג המולד, ואל סמטאות האבן של רובע הדייגים <code>La Ranilla</code> ורחוב <code>Calle Méquinez</code>.",
     "ארוחת ערב מקומית: דגים טריים כשרים על הפלנצ'ה ו-<code>Papas Arrugadas</code> עם רוטב מוחו למירי, ומנות קנריות מסורתיות לאיל. חזרה לדירה ברגל."
    ],
    "stops": [
     4
    ]
   }
  ],
  "lodging": "<code>Apartamento con vistas al jardín</code>, <code>Puerto de la Cruz</code> (לילה 1 מתוך 3).",
  "iso": "2026-12-05",
  "title_en": "Landing in South, Drive to North, Evening in Puerto de la Cruz",
  "stops": [
   {
    "n": 1,
    "name": "Tenerife South Airport (TFS) - Cicar Desk",
    "name_he": "נמל התעופה טנריף דרום - דלפק סיקאר",
    "cat": "logistics",
    "prio": "חובה",
    "time": "16:30 - 17:30",
    "addr": "Aeropuerto de Tenerife Sur, 38610 Granadilla de Abona, Santa Cruz de Tenerife",
    "lat": 28.0445,
    "lng": -16.5725,
    "maps": "https://www.google.com/maps/search/?api=1&query=Aeropuerto+de+Tenerife+Sur+TFS",
    "notes": "נחיתה ב-16:30, איסוף רכב פיג'ו 208 אוטומטי בדלפק Cicar בטרמינל (אישור A35GS)."
   },
   {
    "n": 2,
    "name": "Apartamento con vistas al jardín",
    "name_he": "דירת צפון - פורטו דה לה קרוז",
    "cat": "lodging",
    "prio": "חובה",
    "time": "18:45 - 19:15",
    "addr": "Calle Manuel Yanes Barreto, 1, 38400 Puerto de la Cruz, Santa Cruz de Tenerife",
    "lat": 28.41107,
    "lng": -16.5592,
    "maps": "https://www.google.com/maps/place/C.+Manuel+Yanes+Barreto,+1,+38400+Puerto+de+la+Cruz,+Santa+Cruz+de+Tenerife,+%D7%A1%D7%A4%D7%A8%D7%93%E2%80%AD/@28.4107896,-16.5590887,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a7fc03290d9a5:0x442542b5218f7bb2!8m2!3d28.4107896!4d-16.5590887!16s%2Fg%2F11c19srg4h",
    "notes": "צ'ק-אין (אישור 5720.107.095), חניה פרטית חינם במקום."
   },
   {
    "n": 3,
    "name": "HiperDino Melchor Luz",
    "name_he": "סופרמרקט היפרדינו מלצ'ור לוז",
    "cat": "logistics",
    "prio": "חובה",
    "time": "19:15 - 19:50",
    "addr": "Calle Melchor Luz, 38400 Puerto de la Cruz",
    "lat": 28.414,
    "lng": -16.5545,
    "maps": "https://www.google.com/maps/search/?api=1&query=HiperDino+Melchor+Luz+Puerto+de+la+Cruz",
    "notes": "הצטיידות קריטית במוצרים ומים (הסופרים הגדולים סגורים מחר ביום ראשון!)."
   },
   {
    "n": 4,
    "name": "Plaza del Charco & La Ranilla District",
    "name_he": "כיכר דל צ'ארקו ורובע הדייגים לה רנייה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "19:50 - 22:15",
    "addr": "Plaza del Charco, 38400 Puerto de la Cruz",
    "lat": 28.4165,
    "lng": -16.5505,
    "maps": "https://www.google.com/maps/place/Pl.+del+Charco,+38400+Puerto+de+la+Cruz,+Santa+Cruz+de+Tenerife,+%D7%A1%D7%A4%D7%A8%D7%93%E2%80%AD/@28.4164592,-16.5510383,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a7f9372c02af9:0x78edfc321134dd4d!8m2!3d28.4164592!4d-16.5510383!16s%2Fg%2F11pxlv_wkn",
    "notes": "אורות חג מולד, סמטאות האבן של La Ranilla וארוחת ערב דגים כשרים למירי על הפלנצ'ה."
   }
  ]
 },
 {
  "num": 2,
  "weekday": "ראשון",
  "date": "06.12.2026",
  "title": "עוקפים את מרתון אנאגה ⬅ <code>Loro Parque</code> ברגל בבוקר, הבירה <code>Santa Cruz</code>, בזיליקת <code>Candelaria</code> מול האוקיינוס ומופע הגוספל ב-<code>Teatro Leal</code>",
  "intro": [
   "<strong>הסבר אסטרטגי:</strong> ביום ראשון נמנעים לחלוטין מעלייה לשמורת אנאגה ומכניסה לחניוני לה לגונה בשעות היום, עקב אירועי מרתון אנאגה הענק (<code>K42 Canarias Anaga Marathon</code>) שקו הזינוק והסיום שלו ב-<code>Plaza del Cristo</code> והרצים ממלאים את שבילי הרכס. במקום זאת, מנצלים את הבוקר לביקור חלק ב-<code>Loro Parque</code> ברגל (ללא רכב וללא פקקים), יורדים באוטוסטרדה הרחבה לבירה ולבזיליקת קנדלריה, ומגיעים ללה לגונה בערב (לאחר סיום המרתון ב-<code>18:00</code>) לשוק החג ולמופע הגוספל המרהיב!"
  ],
  "items": [
   {
    "time": "08:30–09:00",
    "tag": "מומלץ",
    "html": "<strong>סיור בוקר נעים ב-<code>Playa Jardín</code> ובגני סזאר מנריקה:</strong> יציאה רגלית ישירה מהדירה אל חוף החול השחור, גני הקקטוסים והמפלים מול גלי האוקיינוס באור יום מלא (ללא צורך ברכב).",
    "sub": [],
    "stops": [
     1
    ]
   },
   {
    "time": "09:00–09:30",
    "tag": "מומלץ",
    "html": "<strong>הליכה רגלית בטיילת לשער <code>Loro Parque</code>:</strong> הגעה מוקדמת לפני פתיחת השערים ב-<code>09:30</code>, כניסה חלקה ומהירה עם כרטיסי <code>Twin Ticket</code>.",
    "sub": [],
    "stops": []
   },
   {
    "time": "09:30–12:30",
    "tag": "מומלץ",
    "html": "<strong>ביקור ממוקד ב-<code>Loro Parque</code> (3 שעות בדיוק!):</strong>",
    "sub": [
     "עולם הקרח של הפינגווינים <code>Planet Penguin</code> ומנהרת הכרישים והמדוזות <code>AquaViva</code> בשעה וחצי הראשונות (לפני הגעת אוטובוסי התיירים מהדרום!).",
     "מופע אריות הים ומופע הדולפינים.",
     "<strong><code>11:45–12:20</code> – מופע האורקות הענק <code>Orca Ocean</code> (גולת הכותרת!):</strong> התייצבות באצטדיון לקראת תחילת המופע ב-<code>11:55</code> (ישיבה מעל שורה 6 למניעת הרטבה).",
     "גשרי הצמרות <code>Katandra Treetops</code> ויציאה מסודרת מהפארק ב-<code>12:30</code> בשיא הפעילות."
    ],
    "stops": [
     2
    ]
   },
   {
    "time": "12:30–12:45",
    "tag": "",
    "html": "<strong>הליכה רגלית חזרה לדירה ואיסוף הרכב מהחניה הפרטית.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "12:45–13:20",
    "tag": "",
    "html": "<strong>נסיעה באוטוסטרדה <code>TF-5</code> אל הבירה <code>Santa Cruz de Tenerife</code>:</strong> נסיעה מהירה ונוחה (כ-35 ק\"מ), חניה בחניון התת-קרקעי המרווח של <code>Plaza de España</code>.",
    "sub": [],
    "stops": []
   },
   {
    "time": "13:20–14:45",
    "tag": "מומלץ",
    "html": "<strong>סיור רגלי בבירה <code>Santa Cruz</code> וארוחת צהריים / טאפאס:</strong>",
    "sub": [
     "כיכר ספרד המרכזית (<code>Plaza de España</code>) עם אגם המים הענק ומבני הממשל.",
     "שוק האוכל ההיסטורי הססגוני <strong><code>Mercado Nuestra Señora de África</code></strong> (שוק מקורה קולוניאלי מרהיב, דוכני פירות טרופיים ומעדנים מקומיים).",
     "מבט על האודיטוריום העתידני של סנטיאגו קלטרווה (<code>Auditorio de Tenerife Adán Martín</code>) מול גלי הים.",
     "עצירה לארוחת טאפאס אותנטית או דגים טריים בכיכרות העיר."
    ],
    "stops": [
     3,
     4
    ]
   },
   {
    "time": "14:45–15:15",
    "tag": "",
    "html": "<strong>נסיעה דרומה בכביש המהיר <code>TF-1</code> אל עיירת החוף <code>Candelaria</code>:</strong> נסיעה חלקה לאורך קו החוף המזרחי (כ-20 ק\"מ).",
    "sub": [],
    "stops": []
   },
   {
    "time": "15:15–16:15",
    "tag": "מומלץ",
    "html": "<strong>ביקור במרכז הרוחני של האי – <code>Basílica de Nuestra Señora de Candelaria</code>:</strong>",
    "sub": [
     "הבזיליקה המלכותית המרשימה היושבת ישירות על שפת האוקיינוס – משכנה של הפטרונית השחורה של כל האיים הקנריים (<code>La Virgen Morena</code>).",
     "התרשמות מ-<strong>9 פסלי הברונזה הענקיים של מלכי הגואנצ'ים הקדומים (<code>Menceyes</code>)</strong> הניצבים בגאון על הרציף מול משברי הגלים.",
     "אווירת יום ראשון קדושה ומרגשת, תפילה וביקור באוצרות האמנות הדתית."
    ],
    "stops": [
     5
    ]
   },
   {
    "time": "16:15–16:45",
    "tag": "",
    "html": "<strong>נסיעה חזרה צפונה ב-<code>TF-1</code> ו-<code>TF-5</code> לרובע <code>La Paz</code> ב-<code>Puerto de la Cruz</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "16:45–17:30",
    "tag": "אופציונלי",
    "html": "<strong>הגן הבוטני המלכותי <code>Jardín Botánico</code> בפורטו דה לה קרוז:</strong> ביקור בגן שהוקם ב-1788 בפקודת מלך ספרד, עץ הפיקוס הענק בן 200 שנה ששורשי האוויר שלו יוצרים יער שלם (כניסה <code>3 €</code>, פתוח עד <code>18:00</code>).",
    "sub": [],
    "stops": [
     6
    ]
   },
   {
    "time": "17:30–18:30",
    "tag": "",
    "html": "<strong>התרעננות בדירה ב-<code>Puerto de la Cruz</code>:</strong> מקלחת, מנוחה והתארגנות בלבוש חגיגי לקראת מופע הערב.",
    "sub": [],
    "stops": []
   },
   {
    "time": "18:30–19:00",
    "tag": "",
    "html": "<strong>נסיעה בכביש <code>TF-5</code> אל חניון <code>Parking Las Quinteras</code> בסן קריסטובל דה לה לגונה:</strong> אירועי מרתון <code>K42</code> בכיכר הסתיימו ב-<code>18:00</code>, הכבישים והחניונים פנויים! חניה נוחה ומרווחת כ-350 מטר ממרכז העיר העתיקה.",
    "sub": [],
    "stops": [
     7
    ]
   },
   {
    "time": "19:00–20:00",
    "tag": "מומלץ",
    "html": "<strong>שיטוט בין אורות חג המולד ברחובות הקולוניאליים וארוחת טאפאס:</strong> רחוב <code>Calle Carrera</code>, שוק חג המולד, עצירה לכוס ייין מקומי, טאפאס וקפה <code>Barraquito</code>.",
    "sub": [],
    "stops": []
   },
   {
    "time": "20:00–21:45",
    "tag": "חובה",
    "html": "<strong>מופע פסטיבל הגוספל ה-21 בתיאטרון ההיסטורי <code>Teatro Leal</code>: <code>Cinque Cullar &amp; The International Peace Troupe</code>!</strong> מופע גוספל אנרגטי וסוחף בתיאטרון בארוקי מפואר מ-1915 (כרטיסים דרך <code>Tickety.es</code>).",
    "sub": [],
    "stops": [
     8
    ]
   },
   {
    "time": "21:45–22:15",
    "tag": "",
    "html": "<strong>נסיעה חזרה מלה לגונה בירידה חלקה על <code>TF-5</code> לדירה ב-<code>Puerto de la Cruz</code>:</strong> חניה פרטית חינם בדירה.",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "<code>Puerto de la Cruz</code> (לילה 2 מתוך 3).",
  "iso": "2026-12-06",
  "title_en": "Loro Parque Morning, Capital Santa Cruz, Candelaria Basilica & Gospel at Teatro Leal",
  "stops": [
   {
    "n": 1,
    "name": "Playa Jardín",
    "name_he": "חוף פלאיה חרדין וגני סזאר מנריקה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "08:30 - 09:00",
    "addr": "Playa Jardin, 38400 Puerto de la Cruz",
    "lat": 28.4152,
    "lng": -16.5598,
    "maps": "https://www.google.com/maps/search/?api=1&query=Playa+Jardin+Puerto+de+la+Cruz",
    "notes": "סיור בוקר רגלי מהדירה בגני הקקטוסים וחוף החול השחור."
   },
   {
    "n": 2,
    "name": "Loro Parque",
    "name_he": "לורו פארק",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "09:30 - 12:30",
    "addr": "Av. Loro Parque, s/n, 38400 Puerto de la Cruz",
    "lat": 28.4081,
    "lng": -16.5647,
    "maps": "https://www.google.com/maps/search/?api=1&query=Loro+Parque+Tenerife",
    "notes": "3 שעות ביקור ממוקד ברגל ללא פקקים: עולם הפינגווינים, אריות ים וגולת הכותרת מופע האורקות ב-11:55."
   },
   {
    "n": 3,
    "name": "Plaza de España & Mercado Nuestra Señora de África",
    "name_he": "כיכר ספרד ושוק אפריקה בסנטה קרוז",
    "cat": "culture_city",
    "prio": "מומלץ",
    "time": "13:20 - 14:45",
    "addr": "Av. Marítima, 38003 Santa Cruz de Tenerife",
    "lat": 28.4674,
    "lng": -16.2472,
    "maps": "https://www.google.com/maps/place/Plaza+de+Espa%C3%B1a/@28.4676874,-16.2473624,18z/data=!3m1!4b1!4m6!3m5!1s0xc41cb0050fb49ed:0xe173c7bb57021828!8m2!3d28.4676874!4d-16.2473624!16s%2Fg%2F11zy9wcc7h",
    "notes": "חניה תת-קרקעית בכיכר ספרד, ביקור בשוק המקורה ההיסטורי וארוחת טאפאס / דגים."
   },
   {
    "n": 4,
    "name": "Auditorio de Tenerife Adán Martín",
    "name_he": "האודיטוריום של טנריף - קלטרווה",
    "cat": "culture_city",
    "prio": "מומלץ",
    "time": "14:15 - 14:45",
    "addr": "Av de la Constitucion, 1, 38003 Santa Cruz de Tenerife",
    "lat": 28.4559,
    "lng": -16.2514,
    "maps": "https://www.google.com/maps/search/?api=1&query=Auditorio+de+Tenerife+Adan+Martin",
    "notes": "מבנה האודיטוריום העתידני של סנטיאגו קלטרווה על קו המים."
   },
   {
    "n": 5,
    "name": "Basílica de Nuestra Señora de Candelaria",
    "name_he": "בזיליקת קנדלריה ו-9 פסלי מלכי הגואנצ'ים",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "15:15 - 16:15",
    "addr": "Plaza de la Patrona de Canarias, 1, 38530 Candelaria",
    "lat": 28.3512,
    "lng": -16.3688,
    "maps": "https://www.google.com/maps/search/?api=1&query=Basilica+de+Nuestra+Senora+de+Candelaria",
    "notes": "הפטרונית השחורה של האיים הקנריים ו-9 פסלי הברונזה הענקיים מול האוקיינוס."
   },
   {
    "n": 6,
    "name": "Jardín Botánico Puerto de la Cruz",
    "name_he": "הגן הבוטני המלכותי",
    "cat": "nature_viewpoint",
    "prio": "אופציונלי",
    "time": "16:45 - 17:30",
    "addr": "Calle Retama, 2, 38400 Puerto de la Cruz",
    "lat": 28.4116,
    "lng": -16.5332,
    "maps": "https://www.google.com/maps/search/?api=1&query=Jardin+Botanico+Puerto+de+la+Cruz",
    "notes": "גן בוטני היסטורי מ-1788 ועץ פיקוס ענק בן 200 שנה (כניסה 3 יורו)."
   },
   {
    "n": 7,
    "name": "Parking Las Quinteras",
    "name_he": "חניון לאס קינטראס - לה לגונה",
    "cat": "logistics",
    "prio": "חובה",
    "time": "19:00 - 22:00",
    "addr": "Calle las Quinteras, 38201 San Cristóbal de La Laguna",
    "lat": 28.4878,
    "lng": -16.3195,
    "maps": "https://www.google.com/maps/search/?api=1&query=Parking+Las+Quinteras+La+Laguna",
    "notes": "חניון מרווח ונוח 350 מטר ממרכז העיר העתיקה (אירועי המרתון הסתיימו ב-18:00)."
   },
   {
    "n": 8,
    "name": "Teatro Leal",
    "name_he": "תיאטרון לאל - מופע פסטיבל הגוספל ה-21",
    "cat": "attraction_must",
    "prio": "חובה",
    "time": "20:00 - 21:45",
    "addr": "Calle Obispo Rey Redondo, 50, 38201 San Cristóbal de La Laguna",
    "lat": 28.4883,
    "lng": -16.3162,
    "maps": "https://www.google.com/maps/search/?api=1&query=Teatro+Leal+San+Cristobal+de+La+Laguna",
    "notes": "מופע Cinque Cullar & The International Peace Troupe בתיאטרון בארוקי מפואר מ-1915."
   }
  ]
 },
 {
  "num": 3,
  "weekday": "שני",
  "date": "07.12.2026",
  "title": "יום אנאגה השקט והחגיגי ⬅ שקיעה באל סאוזל ⬅ תהלוכת הלפידים הלילית בלה לגונה",
  "intro": [
   "<strong>הסבר אסטרטגי:</strong> ביום שני שמורת אנאגה נקייה לחלוטין ממרתונים, מרצים ומפקקי יום ראשון. שבילי יער הגשם פתוחים, כביש החוף הצר ל-<code>Casa África</code> זמין לחניה שקטה, ומסיימים בשקיעה במצוקי <code>El Sauzal</code> ומתחברים ישירות אל תהלוכת הלפידים המרגשת בלה לגונה ללא שום נסיעה כפולה!"
  ],
  "items": [
   {
    "time": "08:30–09:15",
    "tag": "נסיעה",
    "html": "<strong>נסיעה נופית מ-<code>Puerto de la Cruz</code> בכביש <code>TF-12</code> אל הרי <code>Anaga</code> ותצפית <code>Mirador de Jardina</code>:</strong> עלייה מפותלת מול תצפית פנורמית פתוחה על העמק והר טיידה.",
    "sub": [],
    "stops": [
     1
    ]
   },
   {
    "time": "09:15–09:40",
    "tag": "מומלץ",
    "html": "<strong>תצפית <code>Mirador Cruz del Carmen</code>:</strong> מרפסת תצפית מעל יערות הגשם, נקודת מידע של שמורת הטבע ואוויר הרים צלול.",
    "sub": [],
    "stops": [
     2
    ]
   },
   {
    "time": "09:40–10:15",
    "tag": "מומלץ",
    "html": "<strong>מסלול יער הגשם <code>Sendero de los Sentidos</code> (שביל החושים):</strong> הליכה רגלית קסומה (35 דק') ביער <code>Laurisilva</code> פרהיסטורי בין שרכים ענקיים וצמחי ער אטלנטי מכוסי טחב.",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:15–10:35",
    "tag": "נסיעה",
    "html": "<strong>נסיעה על דרך הרכס הצרה והמיוערת אל <code>Mirador Pico del Inglés</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:35–11:00",
    "tag": "מומלץ",
    "html": "<strong>תצפית הרכס <code>Mirador Pico del Inglés</code>:</strong> תצפית 360 מעלות פראית ועוצרת נשימה מעל המצוקים המחודדים של אנאגה ושני צדי האוקיינוס (צילום קלאסי בשביל החפור בסלע).",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "11:00–11:45",
    "tag": "נסיעה",
    "html": "<strong>ירידה הררית מפותלת דרך <code>El Bailadero</code> והכפר <code>Taganana</code> אל כביש החוף הצר <code>TF-134</code>:</strong> נופי אוקיינוס אטלנטי פראי וקירות לבה נישאים.",
    "sub": [],
    "stops": []
   },
   {
    "time": "11:45–12:30",
    "tag": "מומלץ",
    "html": "<strong>סיור רגלי מול צוקי הלבה השחורים של <code>Roque de las Bodegas</code> ונסיעה לתצפית על צוקי <code>Playa de Benijo</code>:</strong> מראות דרמטיים של משברי הגלים המתנפצים על עמודי הבזלת השחורים.",
    "sub": [],
    "stops": [
     4
    ]
   },
   {
    "time": "12:30–13:45",
    "tag": "מומלץ",
    "html": "<strong>ארוחת צהריים אותנטית ב-<code>Casa África</code> על קו המים (ביום שני שקט וללא פקקים!):</strong> מנת הדגל <code>Pulpo Frito</code> (תמנון מטוגן) לאיל, דג היום <code>Vieja a la plancha</code> בגריל למירי, תפוחי אדמה <code>Papas Arrugadas</code> עם רוטב <code>Mojo Verde</code>. (גיבוי במקרה עומס: <code>Restaurante Roque de Las Bodegas</code> הסמוכה או <code>El Mirador de Benijo</code>).",
    "sub": [],
    "stops": [
     5
    ]
   },
   {
    "time": "13:45–14:45",
    "tag": "נסיעה",
    "html": "<strong>נסיעה פנורמית דרך כפר הדייגים <code>San Andrés</code> אל חוף <code>Playa de Las Teresitas</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "14:45–15:20",
    "tag": "מומלץ",
    "html": "<strong>עצירה בחוף <code>Playa de Las Teresitas</code>:</strong> החול הזהוב שיובא ממדבר סהרה, שדרת הדקלים הטרופית ושוברי הגלים המגנים.",
    "sub": [],
    "stops": [
     6
    ]
   },
   {
    "time": "15:20–15:55",
    "tag": "נסיעה",
    "html": "<strong>נסיעה צפונה בכביש <code>TF-5</code> אל עמק אורוטבה וסנטה אורסולה.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "15:55–16:25",
    "tag": "מומלץ",
    "html": "<strong>תצפית <code>Mirador de Humboldt</code> ועצירת צילום מול פסל הענקית <code>La Giganta</code> בפארק <code>La Quinta</code>:</strong> תצפית על כל מרבד הבננות של העמק וצילום מול פסל אמא אדמה החי המכוסה צמחים מול טיידה.",
    "sub": [],
    "stops": [
     7
    ]
   },
   {
    "time": "16:25–16:45",
    "tag": "נסיעה",
    "html": "<strong>נסיעה קצרה בכביש <code>TF-5</code> אל העיירה <code>El Sauzal</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "16:45–18:15",
    "tag": "מומלץ",
    "html": "<strong>פארק המצוקים <code>Parque Los Lavaderos</code> / <code>Mirador de Las Breñas</code> ושקיעה מלאה מול טיידה:</strong> גנים תלויים בגובה 300 מטר מעל הים, כוס קפה/קאווה מול שקיעת השמש המרהיבה בים ב-<strong><code>18:10</code></strong> מול צוקי החוף והר טיידה!",
    "sub": [],
    "stops": [
     8
    ]
   },
   {
    "time": "18:15–18:45",
    "tag": "נסיעה",
    "html": "<strong>נסיעה ישירה מ-<code>El Sauzal</code> מזרחה על <code>TF-5</code> אל חניון <code>Parking Las Quinteras</code> בלה לגונה:</strong> כ-18 ק\"מ, כ-20 דק' נסיעה. חניה נוחה ומרווחת מחוץ לאזור הרחובות החסומים, במרחק 350 מטר הליכה מכיכר הקונספסיון.",
    "sub": [],
    "stops": []
   },
   {
    "time": "18:45–19:45",
    "tag": "מומלץ",
    "html": "<strong>שיטוט ערב חג ברחובות הקולוניאליים המוארים של לה לגונה וארוחת טאפאס:</strong> אווירת ערב חג ה-<code>Inmaculada Concepción</code>, אורות חג מולד ברחובות העיר העתיקה ועצירה לטאפאס מקומי ויין.",
    "sub": [],
    "stops": []
   },
   {
    "time": "19:45–20:45",
    "tag": "מומלץ",
    "html": "<strong>צפייה בתהלוכת הלפידים המסורתית (<code>Procesión de las Antorchas</code>):</strong> תהלוכת לפידים ונרות מרשימה וייחודית היוצאת מכנסיית <code>Parroquia Matriz de Nuestra Señora de la Concepción</code> וצועדת ברחובות הקולוניאליים הצרים. מראה אותנטי, מרגש ופוטוגני תחת אור הלהבות המרצדות.",
    "sub": [],
    "stops": [
     9
    ]
   },
   {
    "time": "20:45–21:15",
    "tag": "נסיעה",
    "html": "<strong>נסיעה חזרה מלה לגונה בכביש <code>TF-5</code> מערבה לדירה ב-<code>Puerto de la Cruz</code>:</strong> יציאה חלקה מהחניון ישירות לאוטוסטרדה בירידה (כ-25 דק' נסיעה). חניה פרטית חינם בדירה.",
    "sub": [],
    "stops": []
   },
   {
    "time": "21:15–22:30",
    "tag": "חובה",
    "html": "<strong>התרעננות בדירה, ארגון ואריזת מזוודות לקראת צ'ק-אאוט בבוקר והמעבר לדרום:</strong> לילה 3 מתוך 3 בצפון – לילה אחרון בדירה ב-<code>Puerto de la Cruz</code>. הכנת המזוודות ברכב לבוקר המחרת.",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "<code>Puerto de la Cruz</code> (לילה 3 מתוך 3 – לילה אחרון בצפון).",
  "iso": "2026-12-07",
  "title_en": "Anaga Rainforest, Wild Atlantic Coast, Sunset at El Sauzal & Torch Procession",
  "stops": [
   {
    "n": 1,
    "name": "Mirador de Jardina",
    "name_he": "תצפית מיראדור דה חרדינה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "09:15 - 09:40",
    "addr": "TF-12, 38293 San Cristóbal de La Laguna",
    "lat": 28.5135,
    "lng": -16.2995,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+de+Jardina+Anaga",
    "notes": "תצפית פנורמית פתוחה על עמק לה לגונה והר טיידה."
   },
   {
    "n": 2,
    "name": "Mirador Cruz del Carmen & Sendero de los Sentidos",
    "name_he": "קרוז דל כרמן ומסלול שביל החושים ביער אנאגה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "09:40 - 10:15",
    "addr": "TF-12, 38294 San Cristóbal de La Laguna",
    "lat": 28.5308,
    "lng": -16.2801,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+Cruz+del+Carmen",
    "notes": "מסלול הליכה קסום (35 דק') ביער הגשם הפרהיסטורי לאוריסילבה."
   },
   {
    "n": 3,
    "name": "Mirador Pico del Inglés",
    "name_he": "תצפית פיקו דל אינגלס",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "10:35 - 11:00",
    "addr": "TF-114, 38139 Santa Cruz de Tenerife",
    "lat": 28.5372,
    "lng": -16.2642,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+Pico+del+Ingles",
    "notes": "תצפית 360 מעלות דרמטית מעל מצוקי אנאגה המחודדים ושני צדי האוקיינוס."
   },
   {
    "n": 4,
    "name": "Roque de las Bodegas & Playa de Benijo",
    "name_he": "רוקה דה לאס בודגס וצוקי פלאיה דה בניחו",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "11:45 - 12:30",
    "addr": "TF-134, 38129 Taganana",
    "lat": 28.5728,
    "lng": -16.1965,
    "maps": "https://www.google.com/maps/place/Playa+del+Roque+de+las+Bodegas/@28.5696729,-16.2051019,17z/data=!3m1!4b1!4m6!3m5!1s0xc41c9aab48b3d0d:0xcba8ab010fb66cd8!8m2!3d28.5690488!4d-16.2050732!16s%2Fg%2F120mhxv1",
    "notes": "צוקי לבה שחורים ועמודי בזלת מול משברי הגלים."
   },
   {
    "n": 5,
    "name": "Restaurante Casa África",
    "name_he": "מסעדת קאזה אפריקה",
    "cat": "restaurant",
    "prio": "מומלץ",
    "time": "12:30 - 13:45",
    "addr": "Calle Roque de las Bodegas, 3, 38129 Taganana",
    "lat": 28.5719,
    "lng": -16.1972,
    "maps": "https://www.google.com/maps/search/?api=1&query=Restaurante+Casa+Africa+Taganana",
    "notes": "מנת דגל Pulpo Frito לאיל, דג היום Vieja בגריל למירי, תפוחי אדמה במוחו."
   },
   {
    "n": 6,
    "name": "Playa de Las Teresitas",
    "name_he": "חוף פלאיה דה לאס טרסיטאס",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "14:45 - 15:20",
    "addr": "Playa de Las Teresitas, 38120 San Andrés",
    "lat": 28.5085,
    "lng": -16.1865,
    "maps": "https://www.google.com/maps/search/?api=1&query=Playa+de+Las+Teresitas+Tenerife",
    "notes": "חוף החול המוזהב מסהרה עם שדרת הדקלים הטרופית ושוברי הגלים."
   },
   {
    "n": 7,
    "name": "Mirador de Humboldt & Estatua La Giganta",
    "name_he": "תצפית הומבולדט ופסל הענקית לה חיגנטה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "15:55 - 16:25",
    "addr": "Carretera General del Norte, 38390 Santa Úrsula",
    "lat": 28.4192,
    "lng": -16.4862,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+de+Humboldt+Santa+Ursula",
    "notes": "תצפית על עמק אורוטבה וצילום מול פסל אמא אדמה החי המכוסה צמחים בפארק La Quinta."
   },
   {
    "n": 8,
    "name": "Parque Los Lavaderos & Mirador de Las Breñas",
    "name_he": "פארק לוס לבאדרוס ותצפית השקיעה באל סאוזל",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "16:45 - 18:15",
    "addr": "Calle los Lavaderos, 1, 38360 El Sauzal",
    "lat": 28.4735,
    "lng": -16.4385,
    "maps": "https://www.google.com/maps/search/?api=1&query=Parque+Los+Lavaderos+El+Sauzal",
    "notes": "גנים תלויים בגובה 300 מ' מעל הים ושקיעה מלאה מול הר טיידה ב-18:10."
   },
   {
    "n": 9,
    "name": "Parroquia Matriz de Nuestra Señora de la Concepción",
    "name_he": "כנסיית הקונספסיון ותהלוכת הלפידים הלילית",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "19:45 - 20:45",
    "addr": "Plaza de la Concepción, 38201 San Cristóbal de La Laguna",
    "lat": 28.4895,
    "lng": -16.3155,
    "maps": "https://www.google.com/maps/search/?api=1&query=Parroquia+Matriz+de+Nuestra+Senora+de+la+Concepcion+La+Laguna",
    "notes": "תהלוכת הלפידים המסורתית (Procesión de las Antorchas) ברחובות הקולוניאליים הצרים."
   }
  ]
 },
 {
  "num": 4,
  "weekday": "שלישי",
  "date": "08.12.2026",
  "title": "חגיגות הבארוק ב-<code>La Orotava</code> ⬅ עץ הדרקון ב-<code>Icod</code>, בריכות <code>Garachico</code>, כפר <code>Masca</code> באור יום מלא ומצוקי <code>Los Gigantes</code> בשקיעה ⬅ דרום!",
  "intro": [
   "<strong>הסבר אסטרטגי:</strong> בוקר חג ה-<code>Inmaculada</code> מוקדש לשיא חגיגות הבארוק בעיירה הקולוניאלית המפוארת ביותר באיים: הבלן המונומנטלי הענק בכיכר העירייה, 15 דקות ספיגת אווירת קודש במיסה הסולמנית בכנסיית הבארוק (מקהלה ועוגב), מאפה טרוצ'ס חם ב-<code>Casa Egon</code> וצפייה ביציאת התהלוכה המסורתית לרחוב. ב-<code>12:45</code> ממשיכים מערבה ומשלימים באור יום מלא את עץ הדרקון, גרצ'יקו, כביש המצוקים <code>TF-436</code>, כפר מאסקה באור יום מלא ושקיעה בלוס חיגנטס בדרך לדרום!"
  ],
  "items": [
   {
    "time": "09:30–09:45",
    "tag": "חובה",
    "html": "<strong>צ'ק-אאוט מהדירה ב-<code>Puerto de la Cruz</code> והעמסת המזוודות ברכב:</strong> נפרדים מהדירה בצפון, כל המזוודות מסודרות בתא המטען.",
    "sub": [],
    "stops": []
   },
   {
    "time": "09:45–10:00",
    "tag": "נסיעה",
    "html": "<strong>נסיעה קצרה (10 דקות) לעיירת הבארוק <code>La Orotava</code> וחניה ב-<code>Parking Plaza de la Constitución</code>:</strong> חניה תת-קרקעית נוחה ומרווחת במרכז ההיסטורי של העיירה.",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:00–11:30",
    "tag": "מומלץ",
    "html": "<strong>סיור רגלי ב-<code>La Orotava</code> וביקור במיצג חג המולד הענק:</strong>",
    "sub": [
     "הגעה לכיכר העירייה (<strong><code>Plaza del Ayuntamiento</code></strong>): כניסה והתרשמות מ-<strong><code>Belén Monumental a tamaño real</code></strong> – אחד ממיצגי חג המולד הגדולים והמרשימים ביותר בספרד! כל הרחבה הופכת לכפר היסטורי ענק עם דמויות בגודל טבעי בלבוש פולקלור קנרי מסורתי, שחזור בעלי מלאכה עתיקים, תעלות מים ובתי אבן.",
     "הליכה קצרה לבית המרפסות המפורסם (<strong><code>Casa de los Balcones</code></strong>) עם מרפסות העץ הקולוניאליות המגולפות מאורן קנרי."
    ],
    "stops": [
     1,
     2
    ]
   },
   {
    "time": "11:30–11:45",
    "tag": "מומלץ",
    "html": "<strong>כניסה ממוקדת (15 דקות) למיסה הסולמנית (<code>Solemne Eucaristía</code>) בכנסיית הבארוק:</strong> כניסה שקטה לתוך <code>Parroquia Matriz de Nuestra Señora de la Concepción</code> (יצירת המופת הבארוקית של טנריף), ספיגת ניחוח הקטורת, שירת המקהלה ונגינת העוגב, מבט בתקרת העץ המעוטרת ובפסל הבתולה המקושט בזהב ופרחים.",
    "sub": [],
    "stops": []
   },
   {
    "time": "11:45–12:15",
    "tag": "מומלץ",
    "html": "<strong>קפה ומאפה <code>Truchas de Batata</code> חם ב-<code>Pastelería Casa Egon</code>:</strong> עצירה במאפייה ההיסטורית הפועלת מ-1916 לטעימת מאפה חג המולד הקנרי המסורתי הממולא בבטטה מתוקה ושקדים.",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "12:15–12:45",
    "tag": "מומלץ",
    "html": "<strong>צפייה ביציאת התהלוכה המסורתית (<code>Solemne Procesión</code>):</strong> צפייה ברגעי השיא שבהם פסל הבתולה נישא מתוך הכנסייה אל הרחובות הקולוניאליים המרוצפים, מלווה בתזמורת העירונית של אורוטבה, אחוות הכנסייה בלבוש מסורתי והתרגשות התושבים.",
    "sub": [],
    "stops": [
     4
    ]
   },
   {
    "time": "12:45–13:30",
    "tag": "נסיעה",
    "html": "<strong>נסיעה מערבה בכביש <code>TF-5</code> אל עבר <code>Icod de los Vinos</code>:</strong> נסיעה נופית וחלקה לאורך החוף הצפוני-מערבי, חניה בסמוך לפארק עץ הדרקון.",
    "sub": [],
    "stops": []
   },
   {
    "time": "13:30–14:15",
    "tag": "מומלץ",
    "html": "<strong>ביקור ב-<code>Icod de los Vinos</code>:</strong> עץ הדרקון הקדום <strong><code>El Drago Milenario</code></strong> (העץ הוותיק והענק ביותר בעולם מסוגו, בן כ-1,000 שנה), כיכר <code>Plaza de San Marcos</code> הציורית וטעימת ליקרים קנריים מקומיים.",
    "sub": [],
    "stops": [
     5
    ]
   },
   {
    "time": "14:15–14:30",
    "tag": "נסיעה",
    "html": "<strong>ירידה קצרה בכביש המפותל אל עיירת החוף ההיסטורית <code>Garachico</code> (15 דקות).</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "14:30–15:30",
    "tag": "מומלץ",
    "html": "<strong>סיור בעיירה הקולוניאלית <code>Garachico</code> ובריכות הלבה:</strong> העיירה ההיסטורית שנחרבה בהתפרצות געשית ב-1706 ושוקמה, מבצר האבן <code>Castillo de San Miguel</code>, בריכות הלבה השחורות הטבעיות <strong><code>El Caletón</code></strong> מול משברי האוקיינוס, וארוחת טאפאס מקומית ודגים טריים.",
    "sub": [],
    "stops": [
     6
    ]
   },
   {
    "time": "15:30–16:15",
    "tag": "נסיעה",
    "html": "<strong>עלייה בכביש המצוקים הפראי והמפורסם <code>TF-436</code> אל עבר מאסקה באור יום מלא:</strong> נסיעה נופית עוצרת נשימה במעלה רכס <code>Teno</code>, פיתולים מרשימים בין קירות בזלת תלולים ונופי אוקיינוס מגבוה.",
    "sub": [],
    "stops": []
   },
   {
    "time": "16:15–16:45",
    "tag": "מומלץ",
    "html": "<strong>תצפית הרכס הפנורמית <code>Mirador Cruz de Hilda</code>:</strong> נקודת תצפית דרמטית במיוחד הצופה עמוק לתוך קניון מאסקה, הטרסות החקלאיות וכפר השודדים המבודד.",
    "sub": [],
    "stops": [
     7
    ]
   },
   {
    "time": "16:45–17:30",
    "tag": "מומלץ",
    "html": "<strong>ביקור בכפר המבודד <code>Masca</code> באור יום מלא!:</strong> סיור רגלי קסום בין בתי האבן ההיסטוריים, עצי הדקל והקקטוסים על רכס הסכין, צילומים פנורמיים מרהיבים וכוס קפה/מיץ מקומי (השקיעה ב-<code>18:10</code>, כך שכל הביקור בכפר מתרחש באור יום מלא!).",
    "sub": [],
    "stops": [
     8
    ]
   },
   {
    "time": "17:30–18:15",
    "tag": "מומלץ",
    "html": "<strong>ירידה דרך <code>Santiago del Teide</code> ותצפית <code>Mirador Archipenque</code> על מצוקי <code>Los Gigantes</code> בשקיעה:</strong> תצפית מרהיבה על קירות הבזלת האדירים בגובה 600 מטר הנופלים אנכית לאוקיינוס, הנצבעים בזהב ובאדום בשעת השקיעה (<code>18:10</code>).",
    "sub": [],
    "stops": [
     9
    ]
   },
   {
    "time": "18:15–19:00",
    "tag": "נסיעה",
    "html": "<strong>נסיעה חלקה באוטוסטרדה <code>TF-1</code> אל <code>Playa de las Américas</code> בדרום האי:</strong> כ-30 ק\"מ, נסיעה מהירה ונוחה.",
    "sub": [],
    "stops": []
   },
   {
    "time": "19:00–19:45",
    "tag": "חובה",
    "html": "<strong>צ'ק-אין, חניה פרטית והתארגנות בדירה בדרום (<code>Las Americas Pool &amp; Private Patio Apartment 10</code>):</strong> כתובת: <code>Avenida Antonio Dominguez, 42 Bloque 4 - 7, 38660 Playa de las Américas</code>. מס' אישור: <code>5739.209.307</code>. חניה פרטית שמורה ב-<code>12 €</code> ליום, פריקת מזוודות והתארגנות בדירה הממוזגת עם הפטיו הפרטי.",
    "sub": [],
    "stops": [
     10
    ]
   },
   {
    "time": "19:45–21:30",
    "tag": "מומלץ",
    "html": "<strong>סיור ערב ראשון בטיילת הדרום, הצטיידות בסופרמרקט וארוחת ערב איטלקית ב-<code>Bianco Restaurant</code>:</strong>",
    "sub": [
     "הליכה רגלית בטיילת <code>Golden Mile</code> המוארת והצטיידות קלה במצרכים בסופרמרקט סמוך (<code>Mercadona</code> / <code>HiperDino</code>).",
     "<strong>ארוחת ערב ב-<code>Bianco Restaurant</code>:</strong> מסעדה איטלקית תוססת ואיכותית ב-<code>Centro Comercial Safari</code> שעל שדרת <code>Golden Mile</code> – כ-450 מטר בלבד (6 דקות הליכה רגלית נינוחה) מדירת הדרום שלכם (ללא צורך בהזזת הרכב!).",
     "<strong>התאמה קולינרית מושלמת:</strong> למירי מבחר עשיר של פיצות מובחרות מתנור עצים, פסטות טריות, ריזוטו, דגים כשרים וסלטים עשירים; לאיל מגוון מנות איטלקיות, בשרים, קינוחים וקוקטיילים מעולים."
    ],
    "stops": [
     11
    ]
   }
  ],
  "lodging": "<code>Las Americas Pool &amp; Private Patio Apartment 10</code>, <code>Playa de las Américas</code> (לילה 1 מתוך 4 בדרום).",
  "iso": "2026-12-08",
  "title_en": "La Orotava Baroque Festivities, Dragon Tree, Garachico, Masca & Los Gigantes Sunset to South",
  "stops": [
   {
    "n": 1,
    "name": "Plaza del Ayuntamiento - Belén Monumental",
    "name_he": "כיכר העירייה ומיצג חג המולד הענק באורוטבה",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "10:00 - 11:30",
    "addr": "Plaza del Ayuntamiento, 38300 La Orotava",
    "lat": 28.3898,
    "lng": -16.5244,
    "maps": "https://www.google.com/maps/search/?api=1&query=Plaza+del+Ayuntamiento+La+Orotava",
    "notes": "חניה ב-Parking Plaza de la Constitución, כפר חג מולד ענק בגודל טבעי בכיכר העירייה."
   },
   {
    "n": 2,
    "name": "Casa de los Balcones",
    "name_he": "בית המרפסות ההיסטורי",
    "cat": "culture_city",
    "prio": "מומלץ",
    "time": "11:00 - 11:30",
    "addr": "Calle San Francisco, 3, 38300 La Orotava",
    "lat": 28.3905,
    "lng": -16.5255,
    "maps": "https://www.google.com/maps/search/?api=1&query=Casa+de+los+Balcones+La+Orotava",
    "notes": "מרפסות עץ קולוניאליות מגולפות מאורן קנרי מ-1632."
   },
   {
    "n": 3,
    "name": "Pastelería Casa Egon",
    "name_he": "קונדיטוריית קאזה אגון מ-1916",
    "cat": "restaurant",
    "prio": "מומלץ",
    "time": "11:45 - 12:15",
    "addr": "Calle León, 5, 38300 La Orotava",
    "lat": 28.3908,
    "lng": -16.5238,
    "maps": "https://www.google.com/maps/search/?api=1&query=Pasteleria+Casa+Egon+La+Orotava",
    "notes": "מאפה חג מולד חם Truchas de Batata ממולא בבטטה מתוקה ושקדים."
   },
   {
    "n": 4,
    "name": "Parroquia de la Concepción & Procesión de la Inmaculada",
    "name_he": "כנסיית הבארוק ויציאת התהלוכה החגיגית",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "12:15 - 12:45",
    "addr": "Calle Tomás Pérez, 38300 La Orotava",
    "lat": 28.3888,
    "lng": -16.5235,
    "maps": "https://www.google.com/maps/search/?api=1&query=Parroquia+de+la+Concepcion+La+Orotava",
    "notes": "צפייה ביציאת התהלוכה המסורתית בליווי התזמורת העירונית ואחוות הכנסייה."
   },
   {
    "n": 5,
    "name": "El Drago Milenario",
    "name_he": "פארק עץ הדרקון העתיק באיקוד",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "13:30 - 14:15",
    "addr": "Plaza de San Marcos, 38430 Icod de los Vinos",
    "lat": 28.3668,
    "lng": -16.7218,
    "maps": "https://www.google.com/maps/search/?api=1&query=El+Drago+Milenario+Icod+de+los+Vinos",
    "notes": "העץ העתיק והענק ביותר בעולם מסוגו (כבן 1,000 שנה) וכיכר סן מרקוס."
   },
   {
    "n": 6,
    "name": "Piscinas Naturales El Caletón & Garachico",
    "name_he": "בריכות הלבה אל קלטון ומרכז גראצ'יקו",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "14:30 - 15:30",
    "addr": "Av. Marítima, 38450 Garachico",
    "lat": 28.3732,
    "lng": -16.7635,
    "maps": "https://www.google.com/maps/search/?api=1&query=Piscinas+Naturales+El+Caleton+Garachico",
    "notes": "בריכות הלבה השחורות שנוצרו בהתפרצות 1706, מבצר סן מיגל וטאפאס מקומי."
   },
   {
    "n": 7,
    "name": "Mirador Cruz de Hilda",
    "name_he": "תצפית הרכס קרוז דה הילדה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "16:15 - 16:45",
    "addr": "TF-436, 38489 Buenavista del Norte",
    "lat": 28.3115,
    "lng": -16.8402,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+Cruz+de+Hilda+Masca",
    "notes": "תצפית דרמטית במעלה כביש המצוקים TF-436 עמוק לתוך קניון מסקה."
   },
   {
    "n": 8,
    "name": "Masca Village",
    "name_he": "הכפר המבודד מסקה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "16:45 - 17:30",
    "addr": "Masca, 38489 Buenavista del Norte",
    "lat": 28.3054,
    "lng": -16.8405,
    "maps": "https://www.google.com/maps/search/?api=1&query=Masca+Tenerife",
    "notes": "ביקור בכפר השודדים הציורי באור יום מלא על רכס הסכין."
   },
   {
    "n": 9,
    "name": "Mirador Archipenque",
    "name_he": "תצפית ארצ'יפנקה על מצוקי לוס גיגאנטס בשקיעה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "17:30 - 18:15",
    "addr": "Calle Tomas Zerolo, 38683 Santiago del Teide",
    "lat": 28.2435,
    "lng": -16.8408,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+Archipenque+Los+Gigantes",
    "notes": "קירות הבזלת האדירים בגובה 600 מטר נצבעים בזהב ובאדום בשקיעה (18:10)."
   },
   {
    "n": 10,
    "name": "Las Americas Pool & Private Patio Apartment 10",
    "name_he": "דירת דרום - פלאיה דה לאס אמריקאס",
    "cat": "lodging",
    "prio": "חובה",
    "time": "19:00 - 19:45",
    "addr": "Avenida Antonio Dominguez, 42 Bloque 4 - 7, 38660 Playa de las Américas",
    "lat": 28.0566,
    "lng": -16.7252,
    "maps": "https://www.google.com/maps/search/?api=1&query=Avenida+Antonio+Dominguez+42+Playa+de+las+Americas",
    "notes": "צ'ק-אין (אישור 5739.209.307), חניה פרטית במקום (12 יורו ליום)."
   },
   {
    "n": 11,
    "name": "Bianco Restaurant",
    "name_he": "מסעדת ביאנקו במרכז ספארי",
    "cat": "restaurant",
    "prio": "מומלץ",
    "time": "19:45 - 21:30",
    "addr": "Centro Comercial Safari, Av. Las Américas, 38660 Playa de las Américas",
    "lat": 28.0545,
    "lng": -16.7288,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bianco+Restaurant+Safari+Centre+Playa+de+las+Americas",
    "notes": "450 מטר ברגל מהדירה, פיצות עצים, פסטות ודגים כשרים למירי, בשרים וקוקטיילים לאיל."
   }
  ]
 },
 {
  "num": 5,
  "weekday": "רביעי",
  "date": "09.12.2026",
  "title": "שייט לווייתנים ודולפינים ביאכטת <code>Travelin' Lady</code> ⬅ <code>Siam Park</code> ⬅ כפר הדייגים <code>La Caleta</code> ⬅ שקיעה ב-<code>Playa del Duque</code> והצטיידות למחר",
  "intro": [],
  "items": [
   {
    "time": "08:10–08:25",
    "tag": "",
    "html": "<strong>נסיעה קצרה מהדירה לחניון נמל <code>Los Cristianos</code> (כ-3 ק\"מ).</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "08:25–09:00",
    "tag": "חובה",
    "html": "<strong>התייצבות ברציף הדייגים ב-<code>08:30</code></strong> ועלייה ליאכטה <code>Travelin' Lady</code> (אישור <code>GYGKBF3FWKXR</code>).",
    "sub": [],
    "stops": [
     1
    ]
   },
   {
    "time": "09:00–10:30",
    "tag": "חובה",
    "html": "<strong>שייט בוטיק אקולוגי לצפייה בלווייתנים ודולפינים ביאכטת <code>Travelin' Lady</code>:</strong> הפלגת בוקר במים שקטים בשמורת <code>Palm-Mar</code> (עד 20 נוסעים).",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:30–10:45",
    "tag": "",
    "html": "<strong>ירידה מהסירה ונסיעה קצרה ישירות ל-<code>Siam Park</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:45–13:45",
    "tag": "מומלץ",
    "html": "<strong>3 שעות של הנאה וריגוש בפארק המים <code>Siam Park</code>:</strong> מים מחוממים ל-<code>24°C–25°C</code>, בריכת הגלים הענקית <code>Siam Beach</code>, נהר האבובים הטרופי <code>Mai Thai River</code>, מגלשות אבובים וארוחה קלה. יציאה ב-<code>13:45</code>.",
    "sub": [],
    "stops": [
     2
    ]
   },
   {
    "time": "13:45–14:45",
    "tag": "מומלץ",
    "html": "<strong>חזרה קצרה לדירה בדרום:</strong> מקלחת חמה, התרעננות והחלפת בגדים יבשים.",
    "sub": [],
    "stops": []
   },
   {
    "time": "14:45–15:40",
    "tag": "אופציונלי",
    "html": "<strong>מפרץ <code>El Puertito de Armeñime</code>:</strong> (אופציונלי בלבד עקב עבודות בנייה באזור. ניתן לדלג ישירות ל-<code>La Caleta</code>).",
    "sub": [],
    "stops": []
   },
   {
    "time": "15:40–17:15",
    "tag": "מומלץ",
    "html": "<strong>כפר הדייגים היוקרתי <code>La Caleta de Adeje</code>:</strong> שיטוט רגלי על שבילי דק העץ מעל סלעי הים והמשברים, אווירה קסומה, וטעימת טאפאס דגים או שתייה מול האוקיינוס (80 דק').",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "17:15–18:25",
    "tag": "מומלץ",
    "html": "<strong>טיילת החוף היוקרתית <code>Playa del Duque</code> ו-<code>Costa Adeje</code> בשקיעה:</strong> הליכה בטיילת החוף היפה ביותר בדרום וצפייה בשקיעה מוזהבת מלאה (ב-<code>18:10</code>) מעל האוקיינוס מול מרינת <code>Puerto Colón</code>.",
    "sub": [],
    "stops": [
     4
    ]
   },
   {
    "time": "18:25–19:15",
    "tag": "חובה",
    "html": "<strong>הצטיידות בסופרמרקט גדול (<code>HiperDino</code> / <code>Mercadona</code> באדחה):</strong> קניית מצרכים טריים, פירות, שישיות מים ונשנושים לטיידה.",
    "sub": [],
    "stops": [
     5
    ]
   },
   {
    "time": "19:15–21:30",
    "tag": "מומלץ",
    "html": "<strong>ארוחת ערב מעולה על קו המים ב-<code>Costa Adeje</code> / בדרום וחזרה לדירה.</strong>",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "<code>Las Americas Pool &amp; Private Patio Apartment 10</code>, <code>Playa de las Américas</code> (לילה 2 מתוך 4).",
  "iso": "2026-12-09",
  "title_en": "Whale Watching Boat, Siam Park, La Caleta & Sunset at Playa del Duque",
  "stops": [
   {
    "n": 1,
    "name": "Travelin' Lady Whale Watching - Meeting Point",
    "name_he": "שייט לווייתנים טרוולין ליידי - נקודת מפגש נמל לוס כריסטיאנוס",
    "cat": "attraction_must",
    "prio": "חובה",
    "time": "08:30 - 10:30",
    "addr": "Muelle Pesquero, Puerto de Los Cristianos, 38650 Los Cristianos",
    "lat": 28.0498,
    "lng": -16.7208,
    "maps": "https://www.google.com/maps/place/Travelin+Lady+Tenerife/@28.0494058,-16.7190012,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a982b7e0d010b:0x9de9fa43718cf7f!8m2!3d28.0494058!4d-16.7190012!16s%2Fg%2F11cn3pn7s8",
    "notes": "חובת התייצבות ב-08:30 ברציף הדייגים (פס כחול לשער ירוק וקיוסק 2), הפלגה ב-09:00 (אישור GYGKBF3FWKXR)."
   },
   {
    "n": 2,
    "name": "Siam Park",
    "name_he": "פארק המים סיאם פארק",
    "cat": "attraction_must",
    "prio": "מומלץ",
    "time": "10:45 - 13:45",
    "addr": "Av. Siam, s/n, 38660 Costa Adeje",
    "lat": 28.0722,
    "lng": -16.7262,
    "maps": "https://www.google.com/maps/search/?api=1&query=Siam+Park+Costa+Adeje",
    "notes": "3 שעות ביקור, מים מחוממים ל-24-25 מעלות, בריכת הגלים Siam Beach ונהר האבובים Mai Thai River."
   },
   {
    "n": 3,
    "name": "La Caleta de Adeje",
    "name_he": "כפר הדייגים לה קלטה דה אדחה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "15:40 - 17:15",
    "addr": "La Caleta, 38679 Costa Adeje",
    "lat": 28.1008,
    "lng": -16.7552,
    "maps": "https://www.google.com/maps/search/?api=1&query=La+Caleta+Adeje",
    "notes": "שבילי דק עץ מעל סלעי הים והמשברים, אווירה קסומה וטאפאס דגים מול המים."
   },
   {
    "n": 4,
    "name": "Playa del Duque",
    "name_he": "חוף פלאיה דל דוקה בשקיעה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "17:15 - 18:25",
    "addr": "Playa del Duque, 38660 Costa Adeje",
    "lat": 28.0905,
    "lng": -16.7435,
    "maps": "https://www.google.com/maps/place/Playa+del+Duque/data=!4m7!3m6!1s0xc6a974a4966c4d1:0x82b346cca767a4ea!8m2!3d28.091441!4d-16.7439204!16s%2Fg%2F1q5bm__jl!19sChIJ0cRmSUqXagwR6qRnp8xGs4I",
    "notes": "טיילת החוף היוקרתית ביותר בדרום ושקיעה מוזהבת ב-18:10 מעל האוקיינוס."
   },
   {
    "n": 5,
    "name": "Mercadona CC X-Sur (Gran Sur Adeje)",
    "name_he": "סופרמרקט מרקדונה X-Sur (גראן סור אדחה)",
    "cat": "logistics",
    "prio": "חובה",
    "time": "18:25 - 19:15",
    "addr": "CC X-Sur, C. Lisboa, 2, 38660 Fañabé, Adeje",
    "lat": 28.08818,
    "lng": -16.72803,
    "maps": "https://www.google.com/maps/place/Mercadona/data=!4m7!3m6!1s0xc6a9833ad778c3f:0x977a8b96f7c33898!8m2!3d28.0881805!4d-16.7280273!16s%2Fg%2F1jglvsxb3!19sChIJP4x3rTOYagwRmDjD95aLepc",
    "notes": "קניית מצרכים טריים, פירות, שישיות מים ונשנושים לטיידה למחר."
   }
  ]
 },
 {
  "num": 6,
  "weekday": "חמישי",
  "date": "10.12.2026",
  "title": "שמורת הר הגעש <code>Mount Teide</code> ברכבל, צילום ב-<code>Minas de San José</code>, ארוחת צהריים חמה בפראדור, שופינג אופציונלי ⬅ 3 שעות ספא תרמי מחומם ב-<code>Aqua Club Termal</code> בערב!",
  "intro": [
   "<strong>פרטי הזמנת הרכבל וציוד חובה (נעול – ✅):</strong> כרטיסי רכבל הטיידה <strong><code>2UPU8-5EF1</code></strong> לשעה <strong><code>12:10</code></strong> (<strong>חובת התייצבות בשער העלייה ב-<code>11:50</code> – 20 דק' מראש!</strong>). נעלי הליכה סגורות מחורצות, פליז + מעיל רוח חם, כובע וכפפות."
  ],
  "items": [
   {
    "time": "08:30–09:55",
    "tag": "מומלץ",
    "html": "<strong>עלייה מדרום בכביש <code>TF-21</code> דרך הכפר <code>Vilaflor</code> ועצירה בעץ האורן הענק <code>El Pino Gordo</code>:</strong> צילום של העץ העבה והעתיק ביותר באי ותצפית כניסה לקלדרה.",
    "sub": [],
    "stops": [
     1
    ]
   },
   {
    "time": "09:55–10:50",
    "tag": "מומלץ",
    "html": "<strong>תצפית <code>Los Azulejos</code> ומתחם הסלעים <code>Roques de García</code>:</strong> תצפית על סלע <code>Roque Cinchado</code> המפורסם, מצוקי הבזלת הרב-גוניים ונוף הר טיידה (30 דק'). יוצאים לחניון הרכבל ב-<code>10:50</code>.",
    "sub": [],
    "stops": [
     2
    ]
   },
   {
    "time": "11:00–12:10",
    "tag": "חובה",
    "html": "<strong>חניה בחניון הרכבל, התארגנות ציוד, התייצבות בשער ב-<code>11:50</code> בדיוק והמתנה לעלייה לרכבל של <code>12:10</code>:</strong> בדיקת ביגוד חם (פליז, מעיל רוח, כובע וכפפות) ונעליים סגורות.",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "12:10–13:30",
    "tag": "חובה",
    "html": "<strong>רכבל הר הגעש טיידה, תצפית פסגה ושביל <code>Pico Viejo</code>:</strong>",
    "sub": [
     "עלייה ברכבל לתחנה העליונה <code>La Rambleta</code> (3,555 מטר).",
     "תצפית פנורמית מעל העננים והליכה בשביל התצפית הפתוח <strong><code>Sendero Pico Viejo</code> (<code>PNT 12</code>)</strong> לעבר הלוע הענק של פיקו וייחו ואיי האוקיינוס."
    ],
    "stops": []
   },
   {
    "time": "13:30–13:50",
    "tag": "מומלץ",
    "html": "<strong>ירידה ברכבל לתחנה התחתונה וביקור בתערוכת <code>Science and Legend</code> (20 דק').</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "13:50–14:15",
    "tag": "מומלץ",
    "html": "<strong>עצירת צילום וסיור רגלי קצר בדיונות הפומיס של <code>Minas de San José</code>:</strong> נסיעה קצרה של 5 דקות. עצירת צילום והתרשמות מהנוף הירחי המוזהב של חול וולקני וסלעי בזלת (15–20 דק' עם מעיל חם, ללא ישיבה בקור ההררי!).",
    "sub": [],
    "stops": [
     4
    ]
   },
   {
    "time": "14:15–15:25",
    "tag": "מומלץ",
    "html": "<strong>ארוחת צהריים חמה, מפנקת ונינוחה במסעדת <code>Parador de Las Cañadas del Teide</code>:</strong>",
    "sub": [
     "נסיעה קצרה של 5 דקות אל מבנה האבן ההיסטורי והחמים של הפראדור בלב הקלדרה.",
     "ישיבה בחלל חם ונעים מול חלונות ענקיים המשקיפים אל פסגת הטיידה.",
     "אכילת מרק קנרי חם, גבינה צלויה בדבש דקלים, תפוחי אדמה במוחו ודגים/בשרים מסורתיים. חוויה חמה ומנחמת אחרי הקור בפסגה (שעה אחת)."
    ],
    "stops": [
     5
    ]
   },
   {
    "time": "15:25–15:55",
    "tag": "מומלץ",
    "html": "<strong>תצפית לועות ההתפרצות <code>Mirador de las Narices del Teide</code>:</strong> עצירת צילום מרהיבה על כביש <code>TF-38</code> המשקיפה על לועות ההתפרצות ההיסטורית של 1798 ושדות הלבה השחורים.",
    "sub": [],
    "stops": [
     6
    ]
   },
   {
    "time": "15:55–16:35",
    "tag": "",
    "html": "<strong>ירידה פנורמית בכביש <code>TF-38</code> דרך שדות הלבה ויערות האורן של <code>Chío</code> אל <code>Adeje</code> (40 דק').</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "16:35–17:05",
    "tag": "אופציונלי",
    "html": "<strong>עצירת קפה ושופינג ב-<code>Galeón Outlet</code> ב-<code>Adeje</code>:</strong> (אופציונלי בלבד. ניתן לוותר ולהגיע ישירות למתחם הספא).",
    "sub": [],
    "stops": []
   },
   {
    "time": "17:05–17:15",
    "tag": "",
    "html": "<strong>נסיעה קצרה אל מתחם הספא <code>Aqua Club Termal</code> ב-<code>Costa Adeje</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "17:15–20:30",
    "tag": "חובה",
    "html": "<strong>3 שעות של פינוק והתאוששות בספא התרמי המחומם <code>Aqua Club Termal</code> (הוזמן ב-<code>Spalopia</code> – ✅):</strong>",
    "sub": [
     "<strong>פרטי הזמנה:</strong> חבילת <strong><code>VIP Thermal Circuit (Non Resident)</code></strong> לשעה <strong><code>17:30</code></strong> (התייצבות מומלצת ב-<code>17:15</code> לקבלת חלוקים ומגבות בדלפק, משך: 3 שעות / 180 דק'). מחיר: <strong><code>118.00 €</code></strong> לזוג (שולם במלואו מראש).",
     "<strong>תכולת החבילה:</strong> 3 שעות במסלול התרמי המקורה (<code>Circuito Termal</code> ב-34–36 מעלות, בריכת ציפה <code>Flotarium</code>, ג'קוזי ענק, סאונות וחמאם טורקי), 2.5 שעות שמורות במיטה באלינזית פרטית (<code>Private Balinese Bed</code>), כיבוד קל (פירות העונה או נאצ'וס עם גוואקמולי) + קאווה או מיץ טבעי, חלוקי רחצה, מגבות וכפכפים כלולים.",
     "חימום מושלם, שחרור שרירים והרגעת הגוף מיד לאחר הקור והמאמץ בהר הגעש. ביטול חינם במערכת <code>Spalopia</code> עד יום רביעי <strong><code>09.12.2026</code></strong> בשעה <strong><code>17:30</code></strong>."
    ],
    "stops": [
     7
    ]
   },
   {
    "time": "20:30–22:00",
    "tag": "מומלץ",
    "html": "<strong>יציאה מהספא בחשיכה מלאה, חזרה קצרה לדירה וארוחת ערב רגועה ומפנקת בדרום:</strong> ארוחת ערב מפנקת ורגועה באזור <code>Costa Adeje</code> / ה-<code>Golden Mile</code> (אפשרות מצוינת וזמינה ברגל: <code>Bianco Restaurant</code> ב-<code>Safari Centre</code> הסמוך לדירה).",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "<code>Las Americas Pool &amp; Private Patio Apartment 10</code>, <code>Playa de las Américas</code> (לילה 3 מתוך 4).",
  "iso": "2026-12-10",
  "title_en": "Teide Volcano Cable Car, Roques de García, Warm Lunch at Parador & 3h Thermal Spa at Aqua Club",
  "stops": [
   {
    "n": 1,
    "name": "El Pino Gordo",
    "name_he": "עץ האורן הענק אל פינו גורדו בווילאפלור",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "09:15 - 09:55",
    "addr": "TF-21, 38613 Vilaflor",
    "lat": 28.1612,
    "lng": -16.6342,
    "maps": "https://www.google.com/maps/search/?api=1&query=Pino+Gordo+Vilaflor",
    "notes": "עצירת צילום בעץ האורן העבה והעתיק ביותר באי בדרך העלייה לקלדרה."
   },
   {
    "n": 2,
    "name": "Roques de García & Mirador Los Azulejos",
    "name_he": "סלעי רוקס דה גרסיה ותצפית לוס אסולחוס",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "09:55 - 10:50",
    "addr": "TF-21, 38300 Teide National Park",
    "lat": 28.2235,
    "lng": -16.6308,
    "maps": "https://www.google.com/maps/place/Roques+de+Garc%C3%ADa/data=!4m7!3m6!1s0xc6a8516dbd16569:0x640da7f77e75f85e!8m2!3d28.2242148!4d-16.6321404!16s%2Fg%2F11txfbm6vx!19sChIJaWXR2xaFagwRXvh1fvenDWQ",
    "notes": "סלע Roque Cinchado המפורסם, מצוקי בזלת רב-גוניים ונוף הר טיידה."
   },
   {
    "n": 3,
    "name": "Teleférico del Teide",
    "name_he": "רכבל הר הגעש טיידה",
    "cat": "attraction_must",
    "prio": "חובה",
    "time": "11:50 - 13:50",
    "addr": "TF-21, km 40.2, 38300 Teide National Park",
    "lat": 28.2547,
    "lng": -16.6258,
    "maps": "https://www.google.com/maps/place/Teide+Cable+Car/data=!4m7!3m6!1s0xc6a8386feaf6b95:0x8a90b97491150633!8m2!3d28.2544624!4d-16.6258129!16s%2Fg%2F120jfbpd!19sChIJlWuv_oaDagwRMwYVkXS5kIo",
    "notes": "התייצבות בשער ב-11:50, עלייה ב-12:10 (אישור 2UPU8-5EF1). תצפית פסגה La Rambleta (3,555 מ') ושביל Pico Viejo."
   },
   {
    "n": 4,
    "name": "Minas de San José",
    "name_he": "מינס דה סן חוסה - נוף ירחי מוזהב",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "13:50 - 14:15",
    "addr": "TF-21, 38300 Teide National Park",
    "lat": 28.2698,
    "lng": -16.5925,
    "maps": "https://www.google.com/maps/place/Minas+de+San+Jose/data=!4m7!3m6!1s0xc6a83b170e25c77:0x425b27d900bc79ce!8m2!3d28.2658618!4d-16.588666!16s%2Fg%2F11bwq6ptqr!19sChIJd1zicLGDagwRznm8ANknW0I",
    "notes": "עצירת צילום בנוף הירחי המוזהב של חול וולקני וסלעי בזלת."
   },
   {
    "n": 5,
    "name": "Parador de Las Cañadas del Teide",
    "name_he": "מסעדת פראדור דה לאס קניאדס דל טיידה",
    "cat": "restaurant",
    "prio": "מומלץ",
    "time": "14:15 - 15:25",
    "addr": "TF-21, km 41.5, 38300 Teide National Park",
    "lat": 28.2248,
    "lng": -16.6262,
    "maps": "https://www.google.com/maps/search/?api=1&query=Parador+de+Las+Canadas+del+Teide",
    "notes": "ארוחת צהריים חמה ומפנקת בחלל חם עם חלונות ענק מול הטיידה, מרק חם, גבינה צלויה ודגים."
   },
   {
    "n": 6,
    "name": "Mirador de las Narices del Teide",
    "name_he": "תצפית נריסס דל טיידה בכביש TF-38",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "15:25 - 15:55",
    "addr": "TF-38, 38680 Santiago del Teide",
    "lat": 28.2438,
    "lng": -16.7025,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mirador+de+las+Narices+del+Teide",
    "notes": "לועות ההתפרצות ההיסטורית של 1798 ושדות הלבה השחורים בירידה לחוף הדרומי."
   },
   {
    "n": 7,
    "name": "Aqua Club Termal",
    "name_he": "ספא תרמי מחומם אקווה קלאב טרמל",
    "cat": "attraction_must",
    "prio": "חובה",
    "time": "17:15 - 20:30",
    "addr": "Calle Canarios, 38670 Adeje, Santa Cruz de Tenerife",
    "lat": 28.0862,
    "lng": -16.7245,
    "maps": "https://www.google.com/maps/place/Aqua+Club+Termal/data=!4m7!3m6!1s0xc6a9757edc1db5f:0x76319601aebf444d!8m2!3d28.0873003!4d-16.7245736!16s%2Fg%2F1thmgn2w!19sChIJX9vB7VeXagwRTUS_rgGWMXY",
    "notes": "3 שעות מסלול תרמי מחומם (34-36 מעלות), בריכת ציפה Flotarium, ג'קוזי וסאונות להתאוששות אחרי הקור בטיידה."
   }
  ]
 },
 {
  "num": 7,
  "weekday": "שישי",
  "date": "11.12.2026",
  "title": "בוקר 2 צלילות מודרכות לאיל &amp; בוקר שלווה למירי ⬅ צהריים דגים ב-<code>Los Abrigos</code> ⬅ מסלול <code>Montaña Amarilla</code> ⬅ שקיעה ב-<code>Playa de La Tejita</code> ⬅ ארוחת ערב שישי חגיגית",
  "intro": [
   "<strong>בטיחות דקומפרסיה וגובה (DCS):</strong> הר טיידה בוצע אתמול. מסיום הצלילות (סביב <code>13:15</code>) ועד ההמראה בשבת (<code>14:20</code>) יש <strong>מעל 25 שעות מנוחה מלאות בגובה פני הים</strong> (עמידה מלאה בתקני <code>DAN</code> ו-<code>PADI</code>)."
  ],
  "items": [
   {
    "time": "08:15–14:00",
    "tag": "חובה",
    "html": "<strong>לאיל – 2 צלילות מודרכות מסירה (עומק עד 30 מטר בדרום טנריף):</strong>",
    "sub": [
     "<strong><code>08:15–08:30</code> – הגעה למועדון הצלילה <code>Diving Atlantis</code> (הוזמן – ✅):</strong> התייצבות במועדון בכתובת <code>Paseo Maritimo, 17 - Los Cristianos</code> (אישור הזמנה: <code>D156-261110-2</code>, מס' הזמנה <code>6af2c4270689</code>, טלפון: <code>+34 671 40 89 70</code>), תדריך בטיחות, התאמת ציוד מלא ומדידת חליפה.",
     "<strong><code>09:00–13:15</code> – 2 צלילות סירה מודרכות:</strong> יציאה בסירה ב-<code>09:00</code> לריף הוולקני של דרום טנריף (מנהרות לבה, חתולי ים <code>Stingrays</code>, צבי ים ולהקות דגים, עומק עד 30 מטר).",
     "<strong><code>13:15–14:00</code> – חזרה לרציף, שטיפת ציוד, מקלחת במועדון וחזרה קצרה לדירה לאיסוף מירי.</strong>"
    ],
    "stops": [
     1
    ]
   },
   {
    "time": "08:15–13:15",
    "tag": "מומלץ",
    "html": "<strong>למירי – בוקר אישי, מפנק ומגוון בדרום (3 חלופות לבחירה חופשית בשעות <code>08:15–13:15</code>):</strong>",
    "sub": [
     "<strong>חלופה 1 (שופינג ורוגע ברגל מהדירה):</strong> יקיצה טבעית נינוחה, קפה בוקר בפטיו הפרטי, טבילה בבריכת המתחם, ושיטוט רגלי בשדרת היוקרה <code>Golden Mile</code> ומרכזי הקניות הצמודים (<code>Safari Centre</code>, <code>Americas Plaza</code>) הפתוחים ברציפות מ-<code>10:00</code>.",
     "<strong>חלופה 2 (שוק מרינה וחוף – <code>Mercadillo de Las Galletas</code>):</strong> שוק ססגוני של בגדים, תיקים, תכשיטים ומזכרות לאורך הטיילת במרינת <code>Las Galletas</code> (פתוח בשישי <code>09:00–14:00</code> – אידיאלי במיוחד אם איל צולל במרינה זו).",
     "<strong>חלופה 3 (שוק הפשפשים של גואזה – <code>Rastro de Guaza</code>):</strong> שוק פשפשים ומציאות עממי ומקומי בדרום (פתוח בשישי <code>09:00–14:00</code>)."
    ],
    "stops": [
     2
    ]
   },
   {
    "time": "14:00–14:25",
    "tag": "",
    "html": "<strong>נסיעה משותפת מהדירה אל כפר הדייגים האותנטי <code>Los Abrigos</code>:</strong> נסיעה נוחה דרומה המבטלת לחלוטין את הזיגזג.",
    "sub": [],
    "stops": []
   },
   {
    "time": "14:25–15:25",
    "tag": "מומלץ",
    "html": "<strong>ארוחת צהריים חגיגית של דגים טריים בנמל <code>Los Abrigos</code>:</strong> מסעדת דגים מול המעגן (<code>Los Roques</code>). דגים כשרים טריים למירי, ופירות ים/בשרים לאיל (שעה אחת).",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "15:25–15:35",
    "tag": "",
    "html": "<strong>נסיעה קצרצרה (10 דק') אל שמורת צוקי הטוף הצהוב <code>Montaña Amarilla</code> (ההר הצהוב).</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "15:35–16:35",
    "tag": "מומלץ",
    "html": "<strong>מסלול הליכה נופי קל ומישורי על קו המים ב-<code>Montaña Amarilla</code>:</strong> הליכה מול הגלים לאורך תצורות הסלע הוולקניות הצהובות והמפוסלות של ההר הצהוב (שעה אחת – בטוח לחלוטין אחרי צלילה).",
    "sub": [],
    "stops": [
     4
    ]
   },
   {
    "time": "16:35–16:45",
    "tag": "",
    "html": "<strong>נסיעה קצרה של 10 דקות אל חוף הטבע הבתולי <code>Playa de La Tejita</code> למרגלות ההר האדום.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "16:45–18:15",
    "tag": "מומלץ",
    "html": "<strong>חוף הטבע <code>Playa de La Tejita</code>, הר הגעש האדום <code>Montaña Roja</code> ושקיעה מלאה:</strong>",
    "sub": [
     "החוף הבתולי והרחב ביותר בדרום טנריף (ללא בינוי ומלונות), השוכן ישירות תחת חרוט הר הגעש האדום <code>Montaña Roja</code>.",
     "טיול קל על החול הרחב, צפייה בגולשי הקייט, ושקיעה מוזהבת עוצרת נשימה (ב-<code>18:10</code>) מעל האוקיינוס וההרים באווירה פראית ורומנטית."
    ],
    "stops": [
     5
    ]
   },
   {
    "time": "18:15–18:40",
    "tag": "",
    "html": "<strong>נסיעה חזרה לדירה ב-<code>Playa de las Américas</code> (הגעה בחשיכה).</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "18:40–19:30",
    "tag": "",
    "html": "<strong>מקלחת חמה, התארגנות ולבוש חגיגי לקראת ערב שישי.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "19:30 ואילך",
    "tag": "מומלץ",
    "html": "<strong>ארוחת ערב שישי חגיגית ומסכמת של הטיול במסעדה מצוינת בדרום.</strong>",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "<code>Las Americas Pool &amp; Private Patio Apartment 10</code>, <code>Playa de las Américas</code> (לילה 4 מתוך 4 – לילה אחרון בטנריף).",
  "iso": "2026-12-11",
  "title_en": "Eyal's Guided Diving & Miri's Relaxed Morning, Fish Lunch in Los Abrigos, Montaña Amarilla & Sunset at La Tejita",
  "stops": [
   {
    "n": 1,
    "name": "Diving Atlantis",
    "name_he": "מועדון צלילה דייבינג אטלנטיס",
    "cat": "attraction_must",
    "prio": "חובה",
    "time": "08:15 - 13:15",
    "addr": "Paseo Marítimo, 17, 38650 Los Cristianos",
    "lat": 28.0515,
    "lng": -16.7132,
    "maps": "https://www.google.com/maps/place/Diving+Atlantis+Tenerife/@28.0481228,-16.711924,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a8c3429b8e319:0x497de37ad5a91e8f!8m2!3d28.0481228!4d-16.711924!16s%2Fg%2F11b877xdxy",
    "notes": "לאיל: 2 צלילות סירה מודרכות בריף הוולקני (אישור D156-261110-2, התייצבות ב-08:15). מעל 25 שעות עד טיסת שבת."
   },
   {
    "n": 2,
    "name": "Golden Mile & Safari Centre",
    "name_he": "שדרת גולדן מייל ומרכזי הקניות",
    "cat": "culture_city",
    "prio": "מומלץ",
    "time": "09:30 - 13:15",
    "addr": "Av. Las Américas, 38660 Playa de las Américas",
    "lat": 28.0548,
    "lng": -16.7285,
    "maps": "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Safari+Playa+de+las+Americas",
    "notes": "למירי: בוקר שלווה רגלי מהדירה, שופינג, בתי קפה וטבילה בבריכה."
   },
   {
    "n": 3,
    "name": "Puerto de los Abrigos",
    "name_he": "מעגן לוס אבריגוס (מסעדות דגים על המים)",
    "cat": "restaurant",
    "prio": "מומלץ",
    "time": "14:25 - 15:25",
    "addr": "Calle la Marina, 16, 38639 Los Abrigos",
    "lat": 28.0298,
    "lng": -16.5912,
    "maps": "https://www.google.com/maps/place/Puerto+de+los+Abrigos/@28.027937,-16.592819,15z/data=!3m1!4b1!4m6!3m5!1s0xc6a9f7cb9712629:0x8ee104e2ef948119!8m2!3d28.0279375!4d-16.592819!16s%2Fg%2F11xl0jwps",
    "notes": "ארוחת צהריים חגיגית מול המעגן: דגים כשרים טריים למירי, פירות ים לאיל. שימו לב: Restaurante Los Roques נסגרה לצמיתות – מומלץ לבחור במסעדות הפעילות על רציף C. La Marina (כגון Restaurante Los Abrigos או Restaurante El Mirador de los Abrigos)."
   },
   {
    "n": 4,
    "name": "Monumento Natural Montaña Amarilla",
    "name_he": "שמורת ההר הצהוב מונטניה אמריה",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "15:35 - 16:35",
    "addr": "Calle Hercules, 38630 Costa del Silencio",
    "lat": 28.0095,
    "lng": -16.6315,
    "maps": "https://www.google.com/maps/search/?api=1&query=Montana+Amarilla+Costa+del+Silencio",
    "notes": "מסלול הליכה נופי קל ומישורי על קו המים מול צוקי הטוף הצהוב המפוסלים (בטוח לגמרי אחרי צלילה)."
   },
   {
    "n": 5,
    "name": "Playa de La Tejita & Montaña Roja",
    "name_he": "חוף לה טחיטה ושקיעה מול ההר האדום",
    "cat": "nature_viewpoint",
    "prio": "מומלץ",
    "time": "16:45 - 18:15",
    "addr": "Playa de la Tejita, 38612 El Médano",
    "lat": 28.0315,
    "lng": -16.5562,
    "maps": "https://www.google.com/maps/place/Playa+de+la+Tejita/data=!4m7!3m6!1s0xc6a9ff5170e8a17:0xaa831a135b97ea0a!8m2!3d28.031759!4d-16.5565657!16s%2Fg%2F11c3x5q0hb!19sChIJF4oOF_WfagwRCuqXWxMag6o",
    "notes": "החוף הבתולי הרחב ביותר בדרום, צפייה בקייטסרפרים ושקיעה מוזהבת ב-18:10 מול הר הגעש האדום."
   }
  ]
 },
 {
  "num": 8,
  "weekday": "שבת",
  "date": "12.12.2026",
  "title": "צ'ק-אאוט דרום, בראנץ' ושוק האומנות של <code>El Médano</code>, קשת הסלע <code>Arco de Tajao</code>, החזרת רכב ב-<code>Cicar TFS</code> וטיסה חזרה (<code>14:20</code>)",
  "intro": [],
  "items": [
   {
    "time": "08:15–08:35",
    "tag": "חובה",
    "html": "<strong>צ'ק-אאוט מהדירה בדרום (<code>Las Americas Pool &amp; Private Patio Apartment 10</code>):</strong> העמסת כל המזוודות לרכב ויציאה לדרך.",
    "sub": [],
    "stops": []
   },
   {
    "time": "08:35–08:55",
    "tag": "",
    "html": "<strong>נסיעה מהירה באוטוסטרדה <code>TF-1</code> לעיירת החוף <code>El Médano</code> (20 דק').</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "08:55–09:50",
    "tag": "מומלץ",
    "html": "<strong>בראנץ' בוקר מול הגלים ושוק האומנות של אל מדאנו (<code>Mercadillo de El Médano</code>):</strong>",
    "sub": [
     "הליכה בטיילת העץ מול גולשי הקייטסרפינג ולוע ההר האדום <code>Montaña Roja</code>, ובראנץ' מול הגלים ב-<code>Café El Médano</code>.",
     "<strong>שוק האומנות של אל מדאנו (<code>Mercadillo de El Médano</code>):</strong> מתקיים מדי שבת בבוקר (<code>09:00–14:00</code>) ממש ברחבת הכיכר המרכזית (<code>Plaza de El Médano</code>) שבה יושב בית הקפה. שוק תוסס של עבודות יד מקומיות, תכשיטים מחומרים טבעיים, בגדי חוף קלים ומזכרות ייחודיות – הזדמנות מושלמת לקניות אחרונות לפני הטיסה! (55 דק')."
    ],
    "stops": [
     1
    ]
   },
   {
    "time": "09:50–10:05",
    "tag": "",
    "html": "<strong>נסיעה אל קשת הסלע הוולקנית הטבעית <code>Arco de Tajao</code> (15 דק').</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:05–10:25",
    "tag": "אופציונלי",
    "html": "<strong>ביקור וצילומים בקשת הסלע <code>Arco de Tajao</code>:</strong> הליכה קצרה של 5 דקות מהחניה אל גשר האבן הוולקני הטבעי המרשים לצילומי פרידה מהאי (20 דק').",
    "sub": [],
    "stops": [
     2
    ]
   },
   {
    "time": "10:25–10:40",
    "tag": "חובה",
    "html": "<strong>נסיעה קצרה (15 דקות) לשדה התעופה טנריף דרום (<code>TFS</code>) ותדלוק מלא בתחנת הדלק שבכניסה לשדה.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "10:40–11:15",
    "tag": "חובה",
    "html": "<strong>החזרת הרכב השכור במגרש <code>Cicar</code> וכניסה לטרמינל:</strong> החזרה מהירה וחלקה (ללא פיקדון וללא בדיקות מיותרות) מעל 3 שעות לפני ההמראה!",
    "sub": [],
    "stops": [
     3
    ]
   },
   {
    "time": "11:15–14:20",
    "tag": "חובה",
    "html": "<strong>בידוק בטחוני, דיוטי פרי, ארוחה קלה והמתנה להמראה בטרמינל <code>TFS</code>.</strong>",
    "sub": [],
    "stops": []
   },
   {
    "time": "14:20",
    "tag": "חובה",
    "html": "<strong>המראה בטיסת <code>Brussels Airlines SN 3782</code></strong> מ-<code>TFS</code> לבריסל ומשם בטיסת <code>SN 3293</code> ישירות לתל אביב (נחיתה בנתב\"ג ב-<code>02:35</code> לפנות בוקר של יום ראשון <code>13.12</code>).",
    "sub": [],
    "stops": []
   }
  ],
  "lodging": "",
  "iso": "2026-12-12",
  "title_en": "Check-out South, El Médano Saturday Craft Market, Arco de Tajao, Car Return at TFS & Departure",
  "stops": [
   {
    "n": 1,
    "name": "Plaza de El Médano & Mercadillo de El Médano",
    "name_he": "כיכר אל מדאנו ושוק האומנות של שבת",
    "cat": "culture_city",
    "prio": "מומלץ",
    "time": "08:55 - 09:50",
    "addr": "Plaza de El Médano, 38612 El Médano",
    "lat": 28.0458,
    "lng": -16.5365,
    "maps": "https://www.google.com/maps/place/Playa+de+El+M%C3%A9dano/data=!4m7!3m6!1s0xc6a9f458772815d:0xc4d7e3e9bc86335f!8m2!3d28.0446295!4d-16.5385068!16s%2Fg%2F11qnh8wbgc!19sChIJXYFyh0WfagwRXzOGvOnj18Q",
    "notes": "בראנץ' בוקר מול הגלים ב-Café El Médano ושוק עבודות יד ומזכרות בכיכר המרכזית (09:00-14:00)."
   },
   {
    "n": 2,
    "name": "Arco de Tajao",
    "name_he": "קשת הסלע הוולקנית ארקו דה טחאו",
    "cat": "nature_viewpoint",
    "prio": "אופציונלי",
    "time": "10:05 - 10:25",
    "addr": "TF-631, 38588 Tajao",
    "lat": 28.1158,
    "lng": -16.4762,
    "maps": "https://www.google.com/maps/search/?api=1&query=Arco+de+Tajao",
    "notes": "הליכה קצרה של 5 דקות מהחניה אל גשר האבן הוולקני הטבעי לצילומי פרידה מהאי."
   },
   {
    "n": 3,
    "name": "Tenerife South Airport (TFS) - Cicar Car Return",
    "name_he": "נמל התעופה טנריף דרום - החזרת רכב Cicar והמראה",
    "cat": "logistics",
    "prio": "חובה",
    "time": "10:40 - 14:20",
    "addr": "Aeropuerto de Tenerife Sur, 38610 Granadilla de Abona",
    "lat": 28.0445,
    "lng": -16.5725,
    "maps": "https://www.google.com/maps/search/?api=1&query=Aeropuerto+de+Tenerife+Sur+TFS",
    "notes": "תדלוק מלא, החזרת רכב קלה ללא בדיקות בדלפק Cicar ב-10:40, המראה בטיסת SN 3782 ב-14:20."
   }
  ]
 }
];
