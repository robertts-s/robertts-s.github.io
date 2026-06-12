const rooms = [
  {
    id: "internet-2000",
    short: "Internet 2000",
    title: "Internet de los 2000",
    intro: "Antes del scroll infinito, conectarse era un acontecimiento. Nicks imposibles, zumbidos, contadores de visitas y partidas que desaparecieron con Flash.",
    timeline: [["1999", "Messenger"], ["2002", "Fotolog"], ["2003", "Tuenti se imagina"], ["2006", "Tuenti abre"], ["2020", "Flash se despide"]],
    artifacts: [
      {
        id: "messenger",
        name: "MSN Messenger",
        year: "1999—2013",
        type: "RITUAL SOCIAL",
        summary: "El lugar donde un cambio de nick podía contar una historia completa.",
        body: "Messenger convirtió el estado de conexión en una nueva forma de presencia. Los nicks, emoticonos, canciones compartidas y conversaciones múltiples crearon un lenguaje que todavía reconocemos.",
        fact: "El famoso zumbido no enviaba palabras: sacudía la ventana del contacto y reproducía un aviso para reclamar atención.",
        visual: '<div class="visual-object visual-msn"></div>',
        interaction: "nudge",
        sound: "messenger"
      },
      {
        id: "social-before-feed",
        name: "Tuenti, Fotolog y el perfil",
        year: "2002—2017",
        type: "IDENTIDAD",
        summary: "Tu perfil era una habitación digital que decorabas para que otros entrasen.",
        body: "Fotolog daba una publicación diaria y Tuenti organizaba la vida social alrededor de fotos, tablones y eventos. La identidad online se construía despacio y con una audiencia reconocible.",
        fact: "En Fotolog, una cuenta gratuita solo podía publicar una foto al día. La escasez hacía que elegirla fuese parte del ritual.",
        visual: '<div class="visual-object visual-profile"></div>',
        interaction: "profile"
      },
      {
        id: "flash-games",
        name: "Minijuegos Flash",
        year: "1996—2020",
        type: "JUGAR",
        summary: "Miles de juegos pequeños, extraños y gratuitos dentro del navegador.",
        body: "Flash convirtió el navegador en una consola improvisada. Portales, animaciones y juegos hechos por estudios diminutos alcanzaron a millones de personas sin instalaciones ni tiendas.",
        fact: "Adobe terminó oficialmente el soporte de Flash Player el 31 de diciembre de 2020, pero proyectos de preservación mantienen vivo parte del catálogo.",
        visual: '<div class="visual-object visual-flash"></div>',
        interaction: "flash"
      }
    ]
  },
  {
    id: "legendary-os",
    short: "Sistemas",
    title: "Sistemas Operativos Legendarios",
    intro: "El escritorio no era solo una herramienta. Tenía sonidos, colores y errores capaces de definir una época completa.",
    timeline: [["1984", "Macintosh"], ["1995", "Windows 95"], ["2001", "Windows XP"], ["2004", "Ubuntu"], ["2009", "Windows 7"]],
    artifacts: [
      {
        id: "windows-95",
        name: "Windows 95",
        year: "1995",
        type: "ESCRITORIO",
        summary: "El botón Inicio puso una puerta de entrada en millones de ordenadores.",
        body: "Windows 95 popularizó una organización del escritorio que sigue resultando familiar: botón Inicio, barra de tareas y ventanas con controles consistentes.",
        fact: "Su lanzamiento fue un acontecimiento cultural. Microsoft utilizó Start Me Up de The Rolling Stones en la campaña.",
        visual: '<div class="visual-object visual-window" data-label="Windows 95"></div>',
        interaction: "boot",
        sound: "startup"
      },
      {
        id: "windows-xp",
        name: "Windows XP y Bliss",
        year: "2001",
        type: "PAISAJE",
        summary: "Una colina verde acabó siendo una de las fotografías más vistas del planeta.",
        body: "Windows XP suavizó la informática doméstica con colores intensos, tareas guiadas y una estabilidad mayor que sus predecesores de consumo.",
        fact: "Bliss fue fotografiada por Charles O'Rear en California. La escena era real y apenas necesitó edición para convertirse en fondo de pantalla.",
        visual: '<div class="visual-object visual-xp"></div>',
        interaction: "wallpaper"
      },
      {
        id: "ubuntu-classic",
        name: "Ubuntu clásico",
        year: "2004—2010",
        type: "SOFTWARE LIBRE",
        summary: "Tonos marrones, CD enviados por correo y una invitación a modificarlo todo.",
        body: "Ubuntu acercó Linux a muchas personas con instalaciones más amables, lanzamientos regulares y una comunidad enorme. Su lema inicial hablaba de humanidad hacia los demás.",
        fact: "ShipIt permitió solicitar gratuitamente CDs oficiales de Ubuntu y recibirlos por correo en numerosos países.",
        visual: '<div class="visual-object visual-linux"></div>',
        interaction: "terminal"
      }
    ]
  },
  {
    id: "mobile-revolution",
    short: "Móviles",
    title: "Móviles que cambiaron el mundo",
    intro: "De una batería que duraba días a llevar Internet entero en el bolsillo. Cada aparato cambió también nuestros gestos.",
    timeline: [["2000", "Nokia 3310"], ["2003", "Sony Ericsson T610"], ["2003", "BlackBerry 6210"], ["2007", "iPhone"], ["2008", "App Store"]],
    artifacts: [
      {
        id: "nokia-3310",
        name: "Nokia 3310",
        year: "2000",
        type: "RESISTENCIA",
        summary: "Mensajes, carcasas intercambiables y Snake II en un objeto casi indestructible.",
        body: "El 3310 condensó la telefonía móvil de principios de siglo: llamadas, SMS, tonos monofónicos y juegos sencillos. Su fama actual mezcla ventas enormes y memoria colectiva.",
        fact: "Permitía escribir SMS concatenados de hasta 459 caracteres, algo destacable cuando lo habitual eran mensajes mucho más cortos.",
        visual: '<div class="visual-object visual-phone" data-label="NOKIA"></div>',
        interaction: "snake",
        sound: "nokia"
      },
      {
        id: "blackberry",
        name: "BlackBerry",
        year: "1999—2016",
        type: "TECLADO",
        summary: "El correo electrónico dejó el escritorio y empezó a vibrar en el bolsillo.",
        body: "BlackBerry convirtió la mensajería y el correo móvil en herramientas inmediatas. Su teclado físico y la rueda o trackball permitían escribir sin mirar tanto la pantalla.",
        fact: "BlackBerry Messenger usaba un PIN propio, una identidad de mensajería que muchos compartían como hoy se comparte un usuario social.",
        visual: '<div class="visual-object visual-blackberry"></div>',
        interaction: "email"
      },
      {
        id: "first-iphone",
        name: "Primer iPhone",
        year: "2007",
        type: "MULTITOUCH",
        summary: "Teléfono, reproductor y navegador se fundieron detrás de una pantalla.",
        body: "El primer iPhone apostó por una interfaz táctil directa y un navegador de escritorio. Su influencia no estuvo en inventar cada pieza, sino en unirlas de una forma convincente.",
        fact: "El modelo original no tenía App Store. Las aplicaciones de terceros llegaron oficialmente en 2008 con iPhone OS 2.",
        visual: '<div class="visual-object visual-iphone"></div>',
        interaction: "swipe"
      }
    ]
  },
  {
    id: "games",
    short: "Consolas",
    title: "Consolas y videojuegos",
    intro: "Pantallas sin luz, discos rayados y baterías agotadas en el peor momento. Jugar también era aprender a convivir con límites.",
    timeline: [["1989", "Game Boy"], ["1994", "PlayStation"], ["2000", "PS2"], ["2004", "Nintendo DS"], ["2004", "PSP"]],
    artifacts: [
      {
        id: "game-boy",
        name: "Game Boy",
        year: "1989",
        type: "PORTÁTIL",
        summary: "Cuatro tonos de verde bastaron para llevar mundos enteros en una mochila.",
        body: "Game Boy priorizó autonomía, resistencia y catálogo frente a una pantalla técnicamente espectacular. Esa decisión la convirtió en una compañera cotidiana.",
        fact: "Tetris fue incluido con muchas unidades fuera de Japón y ayudó a que la consola llegase a públicos muy distintos.",
        visual: '<div class="visual-object visual-console" data-label="GAME BOY"></div>',
        interaction: "tetris",
        sound: "game"
      },
      {
        id: "dual-screen",
        name: "Nintendo DS y PSP",
        year: "2004",
        type: "DOS FUTUROS",
        summary: "Pantalla táctil y juego social frente a potencia multimedia de bolsillo.",
        body: "Nintendo DS exploró el lápiz, el micrófono y la doble pantalla. PSP llevó gráficos ambiciosos, vídeo y música a una portátil. Ambas ampliaron qué podía significar jugar fuera de casa.",
        fact: "PictoChat venía incluido en Nintendo DS y permitía dibujar y conversar localmente sin necesidad de Internet.",
        visual: '<div class="visual-object visual-ds"></div>',
        interaction: "draw"
      },
      {
        id: "playstation-era",
        name: "PlayStation 1 y 2",
        year: "1994—2013",
        type: "SALÓN",
        summary: "Del 3D poligonal al DVD: dos generaciones que cambiaron el centro del salón.",
        body: "La primera PlayStation consolidó el CD y una nueva generación de estudios. PS2 amplió esa herencia y funcionó también como reproductor de DVD para muchas familias.",
        fact: "PlayStation 2 sigue siendo una de las consolas más vendidas de la historia y recibió juegos durante más de una década.",
        visual: '<div class="visual-object visual-ps" data-label="PS"></div>',
        interaction: "disc",
        sound: "console"
      }
    ]
  },
  {
    id: "curious-web",
    short: "Internet curioso",
    title: "Internet curioso",
    intro: "La red también está hecha de accidentes, bromas, páginas minúsculas y decisiones que parecían temporales.",
    timeline: [["1991", "Primera web"], ["1996", "Space Jam"], ["1998", "Google"], ["2005", "YouTube"], ["2010", "Konami en la web"]],
    artifacts: [
      {
        id: "first-web",
        name: "La primera web",
        year: "1991",
        type: "ORIGEN",
        summary: "Texto, enlaces y una idea radical: documentos conectados entre ordenadores.",
        body: "La primera página pública explicaba el propio proyecto World Wide Web. No necesitaba efectos para proponer una nueva manera de publicar y recorrer conocimiento.",
        fact: "CERN restauró la dirección original para preservar una versión accesible de aquel punto de partida.",
        visual: '<div class="visual-object visual-browser" data-label="WORLD WIDE WEB"></div>',
        interaction: "source"
      },
      {
        id: "old-webs",
        name: "Webs que se negaron a envejecer",
        year: "1996—HOY",
        type: "FÓSIL VIVO",
        summary: "Algunas páginas antiguas siguen online como estratos visibles de otra Internet.",
        body: "Campañas, páginas personales y documentación técnica sobreviven con su HTML, gifs y tablas originales. Son útiles precisamente porque el tiempo no fue borrado.",
        fact: "El sitio promocional de Space Jam de 1996 se convirtió en un ejemplo célebre de preservación accidental de la web comercial.",
        visual: '<div class="visual-object visual-browser" data-label="BEST VIEWED 800×600"></div>',
        interaction: "archive"
      },
      {
        id: "easter-eggs",
        name: "Easter eggs históricos",
        year: "1979—HOY",
        type: "SECRETO",
        summary: "Mensajes de autor, comandos absurdos y juegos escondidos dentro de herramientas serias.",
        body: "Los easter eggs permiten que quienes construyen software dejen una firma, una broma o una habitación secreta. Encontrarlos convierte el uso en exploración.",
        fact: "Adventure para Atari 2600 suele citarse como uno de los primeros videojuegos con un easter egg conocido: el nombre de su creador oculto.",
        visual: '<div class="visual-object visual-egg">?</div>',
        interaction: "search"
      }
    ]
  }
];

const achievements = [
  { id: "first-file", icon: "01", title: "Primer recuerdo", description: "Abre tu primer archivo." },
  { id: "all-rooms", icon: "05", title: "Sin puertas cerradas", description: "Visita las cinco salas." },
  { id: "egg-hunter", icon: "??", title: "Arqueólogo digital", description: "Encuentra un objeto oculto." },
  { id: "sound-archive", icon: "♫", title: "Archivo sonoro", description: "Escucha los cinco sonidos históricos." },
  { id: "complete", icon: "∞", title: "Memoria completa", description: "Registra todos los descubrimientos." }
];

const storageKey = "robertts_internet_museum_v1";
const defaultState = {
  rooms: [],
  artifacts: [],
  sounds: [],
  secrets: [],
  achievements: [],
  soundEnabled: false
};

let state = loadState();
let audioContext;
let activeHistoricalAudio;
let snakeTimer;
let konamiPosition = 0;
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

const elements = {
  boot: document.querySelector("#bootScreen"),
  bootLog: document.querySelector("#bootLog"),
  roomMap: document.querySelector("#roomMap"),
  content: document.querySelector("#museumContent"),
  dialog: document.querySelector("#artifactDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  progressFill: document.querySelector("#progressFill"),
  progressTrack: document.querySelector("#progressTrack"),
  progressPercent: document.querySelector("#progressPercent"),
  nextObjective: document.querySelector("#nextObjective"),
  passport: document.querySelector("#passport"),
  passportPercent: document.querySelector("#passportPercent"),
  passportCount: document.querySelector("#passportCount"),
  visitorRank: document.querySelector("#visitorRank"),
  scoreRing: document.querySelector("#scoreRing"),
  achievementList: document.querySelector("#achievementList"),
  achievementCount: document.querySelector("#achievementCount"),
  soundToggle: document.querySelector("#soundToggle"),
  currentPath: document.querySelector("#currentPath"),
  vault: document.querySelector("#finalVault"),
  vaultButton: document.querySelector("#vaultButton"),
  vaultMessage: document.querySelector("#vaultMessage"),
  finalDialog: document.querySelector("#finalDialog"),
  toasts: document.querySelector("#toastStack")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaultState,
      ...saved,
      rooms: [...new Set(saved?.rooms || [])],
      artifacts: [...new Set(saved?.artifacts || [])],
      sounds: [...new Set(saved?.sounds || [])],
      secrets: [...new Set(saved?.secrets || [])],
      achievements: [...new Set(saved?.achievements || [])]
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function bootMuseum() {
  const lines = [
    "<b>[OK]</b> memory index",
    "<b>[OK]</b> artifact renderer",
    "<b>[OK]</b> visitor passport"
  ];
  lines.forEach((line, index) => {
    setTimeout(() => {
      elements.bootLog.innerHTML += `${line}<br>`;
    }, 250 + index * 260);
  });
  setTimeout(() => elements.boot.classList.add("is-hidden"), 1650);
}

function renderMuseum() {
  document.querySelector("#artifactTotal").textContent = String(totalArtifacts()).padStart(2, "0");
  elements.roomMap.innerHTML = rooms.map((room, index) => `
    <button class="map-node ${state.rooms.includes(room.id) ? "is-visited" : ""}" data-room-link="${room.id}" type="button">
      <span>ROOM_${String(index + 1).padStart(2, "0")}</span>
      <strong>${room.short}</strong>
      <small>${state.rooms.includes(room.id) ? "VISITADA" : "SIN EXPLORAR"}</small>
    </button>
  `).join("");

  elements.content.innerHTML = "";
  rooms.forEach((room, roomIndex) => {
    const fragment = document.querySelector("#roomTemplate").content.cloneNode(true);
    const section = fragment.querySelector(".room");
    section.id = room.id;
    section.dataset.roomId = room.id;
    section.classList.toggle("is-visited", state.rooms.includes(room.id));
    fragment.querySelector(".room-index").textContent = `ROOM_${String(roomIndex + 1).padStart(2, "0")} // ${room.timeline[0][0]}—${room.timeline.at(-1)[0]}`;
    fragment.querySelector(".room-title").textContent = room.title;
    fragment.querySelector(".room-intro").textContent = room.intro;
    fragment.querySelector(".room-status strong").textContent = state.rooms.includes(room.id) ? "VISITADA" : "NO VISITADO";
    fragment.querySelector(".timeline").innerHTML = room.timeline.map(point => `
      <div class="timeline-point"><b>${point[0]}</b><span>${point[1]}</span></div>
    `).join("");
    fragment.querySelector(".artifact-grid").innerHTML = room.artifacts.map(artifact => artifactCard(artifact, room.id)).join("");
    elements.content.appendChild(fragment);
  });

  bindDynamicEvents();
  observeRooms();
  renderAchievements();
  updateProgress();
}

function artifactCard(artifact, roomId) {
  const opened = state.artifacts.includes(artifact.id);
  return `
    <button class="artifact-card ${opened ? "is-opened" : ""}" data-artifact="${artifact.id}" data-room="${roomId}" type="button">
      <div class="artifact-visual">${artifact.visual}</div>
      <div class="artifact-meta">
        <div class="artifact-topline">
          <span class="artifact-year">${artifact.year}</span>
          <span class="artifact-type">${artifact.type}</span>
        </div>
        <h3 class="artifact-name">${artifact.name}</h3>
        <p class="artifact-summary">${artifact.summary}</p>
        <div class="artifact-bottom">
          <span class="artifact-state">${opened ? "REGISTRADO" : "SIN ABRIR"}</span>
          <span class="artifact-open">ABRIR ↗</span>
        </div>
      </div>
    </button>
  `;
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-room-link]").forEach(button => {
    button.addEventListener("click", () => {
      visitRoom(button.dataset.roomLink);
      document.querySelector(`#${button.dataset.roomLink}`).scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-artifact]").forEach(card => {
    card.addEventListener("click", () => openArtifact(card.dataset.artifact, card.dataset.room));
  });
}

function observeRooms() {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const roomId = entry.target.dataset.roomId;
      elements.currentPath.textContent = roomId;
      visitRoom(roomId);
    });
  }, { threshold: 0.38 });
  document.querySelectorAll(".room").forEach(room => observer.observe(room));
}

function visitRoom(roomId) {
  if (state.rooms.includes(roomId)) return;
  state.rooms.push(roomId);
  saveState();
  document.querySelector(`#${roomId}`)?.classList.add("is-visited");
  const status = document.querySelector(`#${roomId} .room-status strong`);
  if (status) status.textContent = "VISITADA";
  const mapNode = document.querySelector(`[data-room-link="${roomId}"]`);
  if (mapNode) {
    mapNode.classList.add("is-visited");
    mapNode.querySelector("small").textContent = "VISITADA";
  }
  toast("SALA REGISTRADA", rooms.find(room => room.id === roomId)?.title || roomId);
  evaluateAchievements();
  updateProgress();
}

function findArtifact(id) {
  for (const room of rooms) {
    const artifact = room.artifacts.find(item => item.id === id);
    if (artifact) return { artifact, room };
  }
  return null;
}

function openArtifact(id, roomId) {
  const result = findArtifact(id);
  if (!result) return;
  const { artifact, room } = result;
  visitRoom(roomId || room.id);

  if (!state.artifacts.includes(id)) {
    state.artifacts.push(id);
    saveState();
    const card = document.querySelector(`[data-artifact="${id}"]`);
    card?.classList.add("is-opened");
    if (card) card.querySelector(".artifact-state").textContent = "REGISTRADO";
    toast("NUEVO ARCHIVO", artifact.name);
  }

  elements.dialogContent.innerHTML = `
    <div class="dialog-hero">
      <div class="dialog-hero-visual">${artifact.visual}</div>
      <div>
        <span class="eyebrow">${artifact.year} // ${artifact.type}</span>
        <h2>${artifact.name}</h2>
        <p>${artifact.summary}</p>
      </div>
    </div>
    <div class="dialog-body">
      <div class="dialog-columns">
        <div class="dialog-copy">
          <p>${artifact.body}</p>
          <div class="fact-box"><b>DATO ENCONTRADO</b>${artifact.fact}</div>
        </div>
        <div class="interaction-box">
          <h3>EXPERIENCIA INTERACTIVA</h3>
          <p>Este archivo aún conserva una función. Actívala.</p>
          <div class="micro-experience" id="microExperience">${interactionMarkup(artifact.interaction)}</div>
          <button class="micro-button" id="microAction" type="button">${interactionLabel(artifact.interaction)}</button>
          ${artifact.sound ? `<button class="sound-button" data-sound="${artifact.sound}" type="button">▷ REPRODUCIR SONIDO</button>` : ""}
        </div>
      </div>
    </div>
  `;

  bindArtifactInteraction(artifact);
  elements.dialog.showModal();
  evaluateAchievements();
  updateProgress();
}

function interactionMarkup(type) {
  const markup = {
    nudge: '<div class="chat-line"><b>robertts_ dice:</b> ¿sigues ahí?</div><div class="chat-line">[ Esperando un zumbido... ]</div>',
    profile: "Tu perfil tiene 8.421 visitas.<br>Última foto: hace 6.938 días.",
    flash: "PLUGIN READY<br><br>Objetivo: pulsa antes de que desaparezca.",
    boot: "Award Modular BIOS v4.51PG<br>Memory Test: 640K OK<br>Detecting primary master...",
    wallpaper: "Resolución detectada: 800 × 600<br>Fondo seleccionado: bliss_final_REAL.jpg",
    terminal: "Ubuntu 6.06 LTS<br>user@archive:~$ <span id='terminalCommand'>_</span>",
    snake: '<div class="snake-board" id="snakeBoard"></div>',
    email: "Inbox (12)<br><br>Asunto: ¿Enviado desde mi BlackBerry?",
    swipe: "9:41<br><br>desliza para desbloquear  →",
    tetris: "SCORE 0000<br><br>▦ ▦<br> ▦ ▦",
    draw: "PICTOCHAT — ROOM A<br><br><span id='pixelMessage'>□ □ □ □ □</span>",
    disc: "Sony Computer Entertainment<br><br>Reading disc...",
    source: "&lt;TITLE&gt;World Wide Web&lt;/TITLE&gt;<br>&lt;A HREF='WhatIs.html'&gt;What's out there?&lt;/A&gt;",
    archive: "Snapshot available: 1996<br>Images: 12 · Tables: 8 · Scripts: 0",
    search: '<div class="archive-search"><input id="archiveQuery" type="text" value="" aria-label="Buscar comando secreto" placeholder="buscar en el archivo" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="micro-button" id="archiveSubmit" type="button">GO</button></div><div class="archive-result" id="archiveResult"></div>'
  };
  return markup[type] || "El archivo responde a tu curiosidad.";
}

function interactionLabel(type) {
  const labels = {
    nudge: "ENVIAR ZUMBIDO",
    profile: "FIRMAR LIBRO DE VISITAS",
    flash: "JUGAR 5 SEGUNDOS",
    boot: "ARRANCAR SISTEMA",
    wallpaper: "CAMBIAR FONDO",
    terminal: "EJECUTAR uname -a",
    snake: "MOVER SNAKE",
    email: "RESPONDER DESDE TECLADO",
    swipe: "DESBLOQUEAR",
    tetris: "ENCAJAR PIEZA",
    draw: "DIBUJAR MENSAJE",
    disc: "CARGAR DISCO",
    source: "VER CÓDIGO FUENTE",
    archive: "RECUPERAR SNAPSHOT",
    search: "PEDIR UNA PISTA"
  };
  return labels[type] || "ACTIVAR";
}

function bindArtifactInteraction(artifact) {
  clearInterval(snakeTimer);
  if (artifact.interaction === "snake") renderSnake();
  const action = document.querySelector("#microAction");
  action?.addEventListener("click", () => runInteraction(artifact));
  document.querySelector("[data-sound]")?.addEventListener("click", event => {
    playHistoricalSound(event.currentTarget.dataset.sound);
  });
  document.querySelector("#archiveSubmit")?.addEventListener("click", runArchiveSearch);
  const archiveQuery = document.querySelector("#archiveQuery");
  if (archiveQuery) {
    archiveQuery.value = "";
    archiveQuery.addEventListener("keydown", event => {
      event.stopPropagation();
      if (event.key === "Enter") {
        event.preventDefault();
        runArchiveSearch();
      }
    });
    archiveQuery.addEventListener("keyup", event => event.stopPropagation());
  }
}

function runInteraction(artifact) {
  const box = document.querySelector("#microExperience");
  if (!box) return;

  const outputs = {
    profile: "Libro firmado:<br><span style='color:var(--accent)'>robertts_ estuvo aquí :)</span>",
    flash: "CLICK! +250 PTS<br><br><span style='color:var(--amber)'>NEW HIGHSCORE</span>",
    boot: "Starting Windows 95...<br><br><span style='color:var(--accent)'>C:\\&gt; welcome.exe</span>",
    wallpaper: "Fondo aplicado.<br><br><span style='color:#65aef2'>▰ cielo</span> + <span style='color:#76b947'>▰ colina</span>",
    email: "Respuesta enviada.<br><br>Firma: <span style='color:var(--accent)'>Sent from my BlackBerry</span>",
    swipe: "◉ DESBLOQUEADO<br><br>Sin notificaciones. Qué descanso.",
    tetris: "SCORE 0040<br><br>▦▦▦▦ <span style='color:var(--accent)'>LINE CLEAR!</span>",
    draw: "PICTOCHAT — ROOM A<br><br><span style='color:var(--accent)'>H O L A  : )</span>",
    disc: "Sony Computer Entertainment<br><br><span style='color:var(--accent)'>● DISC ACCEPTED</span>",
    source: "&lt;!-- Lo importante siempre estuvo a la vista. --&gt;<br><br><span style='color:var(--accent)'>&lt;h1&gt;Bienvenido&lt;/h1&gt;</span>",
    archive: "SNAPSHOT RECUPERADO<br><br><span style='color:var(--accent)'>12 GIFs siguen parpadeando.</span>"
  };

  if (artifact.interaction === "nudge") {
    elements.dialog.classList.remove("nudge");
    void elements.dialog.offsetWidth;
    elements.dialog.classList.add("nudge");
    box.innerHTML += '<div class="chat-line"><b>Sistema:</b> has enviado un zumbido.</div>';
    return;
  }

  if (artifact.interaction === "terminal") {
    typeTerminal("Linux archive 2.6.15-26-386 #1 PREEMPT");
    return;
  }

  if (artifact.interaction === "snake") {
    advanceSnake();
    return;
  }

  if (artifact.interaction === "search") {
    document.querySelector("#archiveQuery")?.focus();
    document.querySelector("#archiveResult").textContent = "Pista: los buscadores también leen robots...";
    return;
  }

  box.innerHTML = outputs[artifact.interaction] || "FUNCIÓN RECUPERADA";
}

function typeTerminal(text) {
  const target = document.querySelector("#terminalCommand");
  if (!target) return;
  let index = 0;
  target.textContent = "";
  const timer = setInterval(() => {
    target.textContent += text[index] || "";
    index += 1;
    if (index >= text.length) clearInterval(timer);
  }, 35);
}

function renderSnake(step = 0) {
  const board = document.querySelector("#snakeBoard");
  if (!board) return;
  const snake = [44 + step, 45 + step, 46 + step].map(value => value % 100);
  const food = 49;
  board.innerHTML = Array.from({ length: 100 }, (_, index) => {
    const className = snake.includes(index) ? "on" : index === food ? "food" : "";
    return `<i class="${className}"></i>`;
  }).join("");
}

function advanceSnake() {
  clearInterval(snakeTimer);
  let step = 0;
  snakeTimer = setInterval(() => {
    renderSnake(step);
    step += 1;
    if (step > 3) clearInterval(snakeTimer);
  }, 180);
}

function runArchiveSearch() {
  const input = document.querySelector("#archiveQuery");
  const result = document.querySelector("#archiveResult");
  if (!input || !result) return;
  const query = input.value.trim().toLowerCase();
  input.value = "";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.focus();

  if (query === "robots.txt" || query === "/robots.txt") {
    result.textContent = "User-agent: curious_human · Allow: /secret-room";
    findSecret("robots-file", "Has leído donde normalmente solo miran las máquinas.");
  } else if (query) {
    result.textContent = `0 resultados para "${query}". Prueba robots.txt`;
  } else {
    result.textContent = "La curiosidad necesita una consulta.";
  }
}

function totalArtifacts() {
  return rooms.reduce((total, room) => total + room.artifacts.length, 0);
}

function progressData() {
  const total = rooms.length + totalArtifacts() + 5 + 3;
  const completed = state.rooms.length + state.artifacts.length + state.sounds.length + state.secrets.length;
  return { total, completed, percent: Math.round((completed / total) * 100) };
}

function updateProgress() {
  const progress = progressData();
  elements.progressFill.style.width = `${progress.percent}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(progress.percent));
  elements.progressPercent.textContent = `${progress.percent}%`;
  elements.passportPercent.textContent = `${progress.percent}%`;
  elements.passportCount.textContent = `${progress.completed} de ${progress.total} descubrimientos registrados`;
  elements.scoreRing.style.setProperty("--score", `${progress.percent * 3.6}deg`);
  elements.visitorRank.textContent = visitorRank(progress.percent);
  elements.nextObjective.textContent = nextObjective();

  const unlocked = state.rooms.length === rooms.length && state.secrets.length > 0;
  elements.vault.classList.toggle("is-unlocked", unlocked);
  elements.vaultButton.disabled = !unlocked;
  elements.vaultMessage.textContent = unlocked
    ? "Acceso concedido. El archivo final está preparado."
    : "Completa las cinco salas y encuentra al menos un objeto oculto para abrir el archivo final.";
}

function visitorRank(percent) {
  if (percent === 100) return "Conservador de la red";
  if (percent >= 70) return "Arqueólogo digital";
  if (percent >= 35) return "Explorador de archivos";
  if (percent > 0) return "Visitante curioso";
  return "Visitante nuevo";
}

function nextObjective() {
  if (state.rooms.length < rooms.length) return `Siguiente misión: visita ${rooms.length - state.rooms.length} sala(s) más.`;
  if (state.artifacts.length < totalArtifacts()) return `Quedan ${totalArtifacts() - state.artifacts.length} archivos sin abrir.`;
  if (state.sounds.length < 5) return `Quedan ${5 - state.sounds.length} sonidos por escuchar.`;
  if (state.secrets.length < 3) return `El mapa aún oculta ${3 - state.secrets.length} secreto(s).`;
  return "Museo completado. La memoria queda en tus manos.";
}

function evaluateAchievements() {
  const rules = {
    "first-file": state.artifacts.length >= 1,
    "all-rooms": state.rooms.length === rooms.length,
    "egg-hunter": state.secrets.length >= 1,
    "sound-archive": state.sounds.length === 5,
    "complete": progressData().percent === 100
  };

  achievements.forEach(achievement => {
    if (rules[achievement.id] && !state.achievements.includes(achievement.id)) {
      state.achievements.push(achievement.id);
      toast("LOGRO DESBLOQUEADO", achievement.title);
    }
  });
  saveState();
  renderAchievements();
}

function renderAchievements() {
  elements.achievementList.innerHTML = achievements.map(achievement => {
    const unlocked = state.achievements.includes(achievement.id);
    return `
      <div class="achievement ${unlocked ? "is-unlocked" : ""}">
        <span class="achievement-icon">${achievement.icon}</span>
        <div><strong>${achievement.title}</strong><p>${achievement.description}</p></div>
      </div>
    `;
  }).join("");
  elements.achievementCount.textContent = `${state.achievements.length}/${achievements.length}`;
}

function setSound(enabled) {
  state.soundEnabled = enabled;
  saveState();
  elements.soundToggle.setAttribute("aria-pressed", String(enabled));
  elements.soundToggle.title = enabled ? "Desactivar sonido" : "Activar sonido";
  elements.soundToggle.querySelector(".action-label").textContent = enabled ? "SOUND: ON" : "SOUND: OFF";
  if (enabled) ensureAudio();
}

async function ensureAudio() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (audioContext?.state === "suspended") {
    await audioContext.resume();
  }
  return audioContext;
}

async function playHistoricalSound(soundId) {
  if (!state.soundEnabled) setSound(true);
  const originalPlayed = await playOriginalSound(soundId);
  if (originalPlayed) {
    registerHistoricalSound(soundId);
    return;
  }

  const context = await ensureAudio();
  if (!context || context.state !== "running") {
    toast("AUDIO NO DISPONIBLE", "Este navegador no ofrece Web Audio.");
    return;
  }

  const patterns = {
    messenger: [[660, 0, 0.08], [880, 0.1, 0.08], [660, 0.2, 0.08], [990, 0.3, 0.12]],
    startup: [[261, 0, 0.35], [329, 0.15, 0.35], [392, 0.3, 0.45], [523, 0.48, 0.65]],
    nokia: [[659, 0, 0.1], [587, 0.12, 0.1], [370, 0.24, 0.18], [415, 0.44, 0.18], [554, 0.64, 0.1]],
    game: [[220, 0, 0.08], [330, 0.1, 0.08], [440, 0.2, 0.08], [660, 0.3, 0.14]],
    console: [[220, 0, 0.7], [329, 0.18, 0.72], [493, 0.42, 0.9], [659, 0.7, 0.75]],
    flash: [[520, 0, 0.06], [780, 0.07, 0.06], [1040, 0.14, 0.1]],
    secret: [[880, 0, 0.08], [1174, 0.1, 0.08], [1568, 0.2, 0.25]]
  };
  const progressId = soundId;
  const sequence = patterns[soundId] || patterns.game;
  const now = context.currentTime + 0.03;

  sequence.forEach(([frequency, offset, duration], index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = soundId === "console" ? "sine" : index % 2 ? "square" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, now + offset);
    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.exponentialRampToValueAtTime(soundId === "console" ? 0.2 : 0.12, now + offset + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + offset);
    oscillator.stop(now + offset + duration + 0.02);
  });

  registerHistoricalSound(progressId);
}

async function playOriginalSound(soundId) {
  const files = {
    messenger: "assets/audio/msn-messenger-nudge.mp3",
    startup: "assets/audio/windows-95-startup.mp3",
    nokia: "assets/audio/nokia-3310-tune.mp3",
    game: "assets/audio/game-boy-startup.mp3",
    console: "assets/audio/playstation-startup.mp3"
  };
  const source = files[soundId];
  if (!source) return false;

  try {
    if (activeHistoricalAudio) {
      activeHistoricalAudio.pause();
      activeHistoricalAudio.currentTime = 0;
    }

    const audio = new Audio(source);
    audio.preload = "auto";
    activeHistoricalAudio = audio;
    await audio.play();
    return true;
  } catch {
    return false;
  }
}

function registerHistoricalSound(soundId) {
  if (!state.sounds.includes(soundId) && ["messenger", "startup", "nokia", "game", "console"].includes(soundId)) {
    state.sounds.push(soundId);
    saveState();
    toast("SONIDO ARCHIVADO", `${state.sounds.length}/5 señales recuperadas`);
    evaluateAchievements();
    updateProgress();
  }
}

function findSecret(id, message) {
  if (state.secrets.includes(id)) return;
  state.secrets.push(id);
  saveState();
  playHistoricalSound("secret");
  toast("OBJETO OCULTO ENCONTRADO", message);
  evaluateAchievements();
  updateProgress();
}

function toast(title, message) {
  const item = document.createElement("div");
  item.className = "toast";
  item.innerHTML = `<b>${title}</b><span>${message}</span>`;
  elements.toasts.appendChild(item);
  setTimeout(() => item.remove(), 4200);
}

function openPassport(open) {
  elements.passport.classList.toggle("is-open", open);
  elements.passport.setAttribute("aria-hidden", String(!open));
  document.querySelector("#passportToggle").setAttribute("aria-expanded", String(open));
}

function openRandomArtifact() {
  const all = rooms.flatMap(room => room.artifacts.map(artifact => ({ artifact, room })));
  const unopened = all.filter(item => !state.artifacts.includes(item.artifact.id));
  const pool = unopened.length ? unopened : all;
  const selected = pool[Math.floor(Math.random() * pool.length)];
  openArtifact(selected.artifact.id, selected.room.id);
}

function resetProgress() {
  if (!window.confirm("¿Reiniciar todos los descubrimientos y logros del museo?")) return;
  state = { ...defaultState, soundEnabled: state.soundEnabled };
  saveState();
  openPassport(false);
  renderMuseum();
  toast("VISITA REINICIADA", "El archivo vuelve a estar sin explorar.");
}

document.querySelector("#startTour").addEventListener("click", () => {
  visitRoom(rooms[0].id);
  document.querySelector(`#${rooms[0].id}`).scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#randomArtifact").addEventListener("click", openRandomArtifact);
document.querySelector("#passportToggle").addEventListener("click", () => openPassport(!elements.passport.classList.contains("is-open")));
document.querySelector("#passportClose").addEventListener("click", () => openPassport(false));
document.querySelector("#resetProgress").addEventListener("click", resetProgress);
elements.soundToggle.addEventListener("click", () => setSound(!state.soundEnabled));
document.querySelector("#heroSecret").addEventListener("click", () => {
  findSecret("memory-terminal", "Una terminal de 640K esperaba a alguien curioso.");
});
elements.vaultButton.addEventListener("click", () => {
  if (state.rooms.length === rooms.length && state.secrets.length > 0) {
    document.querySelector(".vault-lock").style.filter = "drop-shadow(0 0 16px var(--accent))";
    elements.finalDialog.showModal();
  }
});
elements.dialog.addEventListener("close", () => {
  clearInterval(snakeTimer);
  elements.dialog.classList.remove("nudge");
  const archiveQuery = document.querySelector("#archiveQuery");
  const archiveResult = document.querySelector("#archiveResult");
  if (archiveQuery) archiveQuery.value = "";
  if (archiveResult) archiveResult.textContent = "";
});
elements.finalDialog.addEventListener("click", event => {
  if (event.target === elements.finalDialog) elements.finalDialog.close();
});

document.addEventListener("keydown", event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target.isContentEditable) {
    return;
  }
  const expected = konamiCode[konamiPosition];
  if (event.key === expected) {
    konamiPosition += 1;
    if (konamiPosition === konamiCode.length) {
      findSecret("konami-code", "↑ ↑ ↓ ↓ ← → ← → B A sigue funcionando.");
      konamiPosition = 0;
    }
  } else {
    konamiPosition = event.key === konamiCode[0] ? 1 : 0;
  }
});

setInterval(() => {
  document.querySelector("#footerClock").textContent = new Date().toLocaleTimeString("es-ES");
}, 1000);

setSound(state.soundEnabled);
renderMuseum();
bootMuseum();
