const updates = [{
    date: "Jul '26",
    text: "Design Theater: A Benchmark for Generative UI was accepted at AIES 2026."
  }, {
    date: "Apr '26",
    text: "Ranked 7<sup>th</sup> out of 2,000+ participants across a two-phase competition at AISEHack 2026, organized by <a href='https://www.anrf.in/' target='_blank' rel='noopener noreferrer' class='text-link'>ANRF</a> in collaboration with <a href='https://www.ibm.com/' target='_blank' rel='noopener noreferrer' class='text-link'>IBM</a> and <a href='https://www.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIT Delhi</a>, hosted at <a href='https://www.iiit.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIIT Hyderabad</a>."
  }, {
    date: "Feb '26",
    text: "Led a team to 2<sup>nd</sup> place at the AMD AI Reinforcement Learning Hackathon, leading LLM fine-tuning and optimization under strict latency constraints. The event was organized by <a href='https://www.amd.com/' target='_blank' rel='noopener noreferrer' class='text-link'>AMD</a>, <a href='https://scai.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>Yardi School of AI</a> at <a href='https://www.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIT Delhi</a>, and <a href='https://unsloth.ai/' target='_blank' rel='noopener noreferrer' class='text-link'>Unsloth AI</a>."
  }, {
    date: "Jan '26",
    text: "Developed Ink2Info, a health informatics solution that digitized handwritten prescriptions into structured Electronic Health Records (EHRs), bridging the critical gap between traditional paper-based clinical workflows and modern digital health infrastructure."
  }, {
    date: "Nov '25",
    text: "Worked on CATS (Culturally Adaptive Therapeutic System), an agentic system for physiotherapists that created personalized exercise videos aligned with patients' cultural backgrounds, showing exercises through culturally-appropriate demonstrations."
  }, {
    date: "Oct '25",
    text: "Deployed De-Tail, an experimental reasoning-transparent search assistant tool using OpenAI reasoner, featuring step-by-step thought chains and real-time web search integration with Tavily API."
  }, {
    date: "Sept '25",
    text: "Started Data Science Internship with Prof. Aaditya Dar, economist at Amazon."
  }, {
    date: "Sep '25",
    text: "Submitted poster to India HCI 2025 on co-designing agentic AI, WhatsApp-native performance dashboards for government officers, with public sector workers as design partners."
  }, {
    date: "Aug '25",
    text: "Completed research internship at Michigan State University with Prof. Prabhat Barnwal, built and deployed Sewa Assist and Peer Knowledge Exchange Platform."
  }, {
    date: "May '25",
    text: "Completed Lawgic, an AI powered legal document analyzer using fine-tuned transformer models for Indian court data, as a college minor project."
  }, {
    date: "Apr '24",
    text: "Built and shipped the official website for the International Conference on Sustainability and Digitalization at Jamia Hamdard, handling the full conference tech infrastructure end-to-end."
  }, {
    date: "Oct '23",
    text: "Built Vulture web vulnerability scanner using OWASP ZAP API, ranked top 10 among 100+ submissions at university hackathon."
  }];

const research = [{
    title: "Design Theater: A Benchmark for Generative UI",
    authors: "Md Kaif Imteyaz",
    status: "LLM Benchmarking | Accepted, AIES 2026",
    description: "Developed a benchmark to measure authenticity gaps between generated reasoning traces and actual model behavior through systematic evaluation and interpretability analysis.",
    image: "public/design.png",
    alt: "Design Theater LLM benchmarking research",
    link: "https://arxiv.org/pdf/2607.22928",
    linkText: "Paper",
    link2: "https://github.com/kashifimteyaza/design-theater.io",
    linkText2: "Repo"
  }, {
    title: "Episode-Aware PM2.5 Forecasting Across India",
    authors: "Md Kaif Imteyaz",
    status: "Spatiotemporal Deep Learning | Ongoing Research",
    description: "Designed a spatiotemporal deep learning model for country-level PM2.5 forecasting over a 140x124 grid at 25 km resolution, predicting 16 future hours from a 10-hour lookback across 26 input channels with no future meteorological context.",
    image: "public/spato-temp.png",
    alt: "PM2.5 spatiotemporal forecasting heatmap across India"
  }, {
    title: "CATS: Culturally Adaptive Therapeutic System",
    authors: "Md Kaif Imteyaz",
    status: "Agentic AI | Final Undergraduate Project",
    description: "Designed an agentic AI system for physiotherapists that generates personalized exercise videos aligned with patients' cultural backgrounds, while providing real-time AI posture analysis, automated exercise monitoring, and intelligent voice coaching to support rehabilitation and treatment adherence.",
    image: "public/cats-ui.png",
    alt: "CATS physiotherapy system",
    link: "https://github.com/Kaif-Imteyaz/CATS",
    linkText: "Repository"
  }];

const projects = [{
    title: "Ink2Info: Digitizing Health Informatics",
    tech: "Intelligent Document Processing (IDP), Clinical Data Standardization, Computer Vision",
    year: "2026",
    description: "Developed a prescription digitization pipeline using OpenAI and Gemma 7B with a Fabric.js canvas for real-time handwriting extraction, directly modifying inference behavior of the underlying models for domain adaptation. Implemented role-based access control with HMAC-signed QR codes for secure data sharing across multiple user roles.",
    image: "public/ink2info.png",
    alt: "Ink2Info prescription digitizer",
    link: "https://github.com/Kaif-Imteyaz/Ink2Info",
    linkText: "Repository"
  }, {
    title: "De-Tail: Agentic AI Search Assistant",
    tech: "LLMs, RAG, Chain-of-Thought Reasoning, Agentic Workflows",
    year: "2025",
    description: "Engineered a retrieval-augmented generation pipeline that exposes its full step-by-step reasoning chain, integrating OpenAI Reasoner with Tavily API for real-time web retrieval. Designed end-to-end retrieval flow from query intake through document fetching, reranking signal generation, and response synthesis, with full transparency at each stage.",
    image: "public/detail-ui.png",
    alt: "De-Tail project",
    link: "https://github.com/Kaif-Imteyaz/De-Tail",
    linkText: "Repository"
  }, {
    title: "Anti-Corrupt Infrastructure",
    tech: "Full-Stack System Design, GovTech Architecture, AI-Driven Auditing",
    year: "2025",
    description: "Developed AI-based platform to ensure transparency in infrastructure projects and prevent corruption. Automated systems for project tracking, fund allocation, and milestone verification.",
    image: "public/antiCorrupt-UI.png",
    alt: "Anti-Corrupt Infrastructure project",
    link: "https://github.com/Kaif-Imteyaz/Anti-Corrupt-Infra",
    linkText: "Repository"
  }, {
    title: "Vulture: Vulnerability Scanner",
    tech: "Automated Security Testing (DAST), Vulnerability Scanning",
    year: "2023",
    description: "Built web app identifying vulnerabilities using OWASP ZAP API during 2-day hackathon. Ranked among top 10 projects among 100+ submissions.",
    image: "public/vulture.png",
    alt: "Vulture project",
    link: "https://www.youtube.com/watch?v=Vt5HbBhyJlA",
    linkText: "Demo Video"
  }];

const profile = {
  name: "Md Kaif Imteyaz",
  greeting: "Hey, I'm Kaif.",
  profileImage: "public/xyz.jpg"
};

let projectsExpanded = false;

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
const mobileNavDrawer = document.querySelector(".mobile-nav-drawer");
const closeBtn = document.querySelector(".close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const catRunGame = document.getElementById("catRunGame");
const catRunCat = document.getElementById("catRunCat");
const catRunMilestones = document.getElementById("catRunMilestones");
const catRunCaption = document.getElementById("catRunCaption");
const catRunBubble = document.getElementById("catRunBubble");
const showAllUpdatesBtn = document.getElementById("showAllUpdatesBtn");
const updatesTimeline = document.getElementById("updatesTimeline");
const timelineDots = document.getElementById("timelineDots");
const timelineYears = document.getElementById("timelineYears");
const timelineActive = document.getElementById("timelineActive");
const timelinePrev = document.getElementById("timelinePrev");
const timelineNext = document.getElementById("timelineNext");
const researchList = document.getElementById("researchList");
const projectsList = document.getElementById("projectsList");
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const footerText = document.getElementById("footerText");
const themeToggleBtn = document.getElementById("themeToggleBtn");

(function applyInitialTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = stored ? stored === "dark" : prefersDark;
  if (useDark) document.body.classList.add("dark-mode");
})();

function initThemeToggle() {
  if (!themeToggleBtn) return;
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

function initMobileMenu() {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNavOverlay.classList.add("active");
  });
  closeBtn.addEventListener("click", closeMobileMenu);
  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) closeMobileMenu();
  });
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function closeMobileMenu() {
  mobileNavOverlay.classList.remove("active");
}

// Walking cat ambient strip
const WALK_FRAMES = [[-96, 0], [-96, -32]];
const SLEEP_FRAMES = [[-64, 0], [-64, -32]];
const CAT_TIRED = [-96, -64];
const CAT_ALERT = [-224, -96];
// Cat walks slowly: each milestone (dot-to-dot) takes ~5.5s to cover
const MILESTONE_SPACING = 200; // px between adjacent milestones
const MILESTONE_TIME_SEC = 5.5;
const WALK_SPEED = MILESTONE_SPACING / (MILESTONE_TIME_SEC * 60); // ~0.61 px/frame
const WALK_FRAME_INTERVAL = 30;
const SLEEP_FRAME_INTERVAL = 60;
const CAT_TRIGGER_X = 24 + 24;
const CAT_CENTER_X = 24 + 16;
const BRIDGE_WIDTH = 100;
const BRIDGE_ARC_HEIGHT = 20;
const CAPTION_MS = 3500;

const YEAR_PALETTE = ["#8b95a1", "#7ba05b", "#b56576", "#c9a34e", "#3b73d1"];
let YEAR_COLOR_MAP = null;
let YEAR_COUNT_MAP = null;

function buildYearColorMap() {
  const years = [...new Set(updates.map(u => 2000 + Number(u.date.split(" '")[1])))].sort((a, b) => a - b);
  const map = {};
  years.forEach((y, i) => { map[y] = YEAR_PALETTE[i % YEAR_PALETTE.length]; });
  return map;
}

function buildYearCountMap() {
  const map = new Map();
  for (const u of updates) {
    const y = 2000 + Number(u.date.split(" '")[1]);
    map.set(y, (map.get(y) || 0) + 1);
  }
  return map;
}

function yearOfUpdate(u) {
  return 2000 + Number(u.date.split(" '")[1]);
}

function colorForUpdate(u) {
  return YEAR_COLOR_MAP[yearOfUpdate(u)] || "var(--text-light)";
}

let walkState = null;

function makeWalkState() {
  return {
    milestones: [],
    bridges: [],
    nextUpdateIdx: 0,
    lastSpawnedYear: null,
    frameCounter: 0,
    spriteFrame: 0,
    sleepFrame: 0,
    distance: 0,
    captionTimer: null,
    sleepTimer: null,
    alertTimer: null,
    paused: false,
    sleeping: false,
    alerting: false
  };
}

function setCatSprite(pos) {
  catRunCat.style.backgroundPosition = `${pos[0]}px ${pos[1]}px`;
}

function showWalkCaption(update) {
  catRunCaption.innerHTML = `<span class="update-date">${update.date}</span>${update.text}`;
  catRunCaption.classList.add("visible");
  clearTimeout(walkState.captionTimer);
}

let catBubbleAutoHideTimer = null;
function showCatBubble(text) {
  catRunBubble.innerHTML = text;
  catRunBubble.classList.add("visible");
  clearTimeout(catBubbleAutoHideTimer);
  catBubbleAutoHideTimer = setTimeout(() => {
    catRunBubble.classList.remove("visible");
  }, 3000);
}

let timelineHintAutoHideTimer = null;
function showTimelineHintOnPause() {
  const el = document.getElementById("timelineHint");
  if (!el) return;
  el.classList.add("visible");
  clearTimeout(timelineHintAutoHideTimer);
  timelineHintAutoHideTimer = setTimeout(() => {
    el.classList.remove("visible");
  }, 3000);
}

function onCatRest() {
  // Keep the last update caption visible; it clears when the next milestone triggers
  showTimelineHintOnPause();
}

function hideCatBubble() {
  catRunBubble.classList.remove("visible");
}

function pauseByClick() {
  const s = walkState;
  s.paused = true;
  s.sleeping = false;
  clearTimeout(s.sleepTimer);
  clearTimeout(s.captionTimer);
  catRunCaption.classList.remove("visible");
  setCatSprite(CAT_TIRED);
  catRunCat.style.transform = "translateY(0px)";
  showCatBubble("sigh, thanks! tap me to keep going");
  s.sleepTimer = setTimeout(goToSleep, 3000);
  onCatRest();
}

function goToSleep() {
  const s = walkState;
  s.paused = false;
  s.sleeping = true;
  hideCatBubble();
  s.sleepFrame = 0;
  setCatSprite(SLEEP_FRAMES[0]);
}

function sleepOnBridge(br) {
  const s = walkState;
  clearTimeout(s.sleepTimer);
  s.paused = false;
  s.sleeping = true;
  s.pausedBridge = br;
  s.sleepFrame = 0;
  setCatSprite(SLEEP_FRAMES[0]);
  showCatBubble("Time for a catnap!  tap to wake me");
  onCatRest();
}

function pauseAfterLoop() {
  const s = walkState;
  clearTimeout(s.sleepTimer);
  s.paused = false;
  s.sleeping = true;
  s.pausedBridge = null;
  s.sleepFrame = 0;
  setCatSprite(SLEEP_FRAMES[0]);
  showCatBubble("all caught up :)");
  onCatRest();
}

function wakeAndResume() {
  const s = walkState;
  clearTimeout(s.sleepTimer);
  clearTimeout(s.alertTimer);
  s.paused = false;
  s.sleeping = false;
  s.alerting = true;
  s.pausedBridge = null;
  hideCatBubble();
  setCatSprite(CAT_ALERT);
  s.alertTimer = setTimeout(() => {
    s.alerting = false;
    setCatSprite(WALK_FRAMES[s.spriteFrame]);
  }, 300);
}

function onCatStripClick() {
  const s = walkState;
  if (s.alerting) return;
  if (s.sleeping) {
    wakeAndResume();
  } else if (s.paused) {
    wakeAndResume();
  } else {
    pauseByClick();
  }
}

function spawnMilestone() {
  const gameW = catRunGame.clientWidth || 600;
  const rightmost = walkState.milestones.reduce(
    (m, ms) => Math.max(m, ms.x),
    -Infinity
  );

  // One full loop completed → reset to the newest update
  const wrapping = walkState.nextUpdateIdx >= updates.length;
  if (wrapping) {
    walkState.nextUpdateIdx = 0;
    walkState.lastSpawnedYear = null;
  }

  const update = updates[walkState.nextUpdateIdx];
  const year = yearOfUpdate(update);

  // Fixed spacing between milestones
  const x = rightmost === -Infinity
    ? Math.max(gameW - 20, MILESTONE_SPACING)
    : rightmost + MILESTONE_SPACING;

  // Bridge on year change. Skip pause when EITHER side of the bridge is a 1-update year (23, 24)
  if (walkState.lastSpawnedYear !== null && year !== walkState.lastSpawnedYear) {
    const prevCount = YEAR_COUNT_MAP.get(walkState.lastSpawnedYear) || 0;
    const nextCount = YEAR_COUNT_MAP.get(year) || 0;
    const skipPause = prevCount <= 1 || nextCount <= 1;
    walkState.bridges.push({
      x: x - MILESTONE_SPACING / 2,
      year,
      color: YEAR_COLOR_MAP[year] || "var(--text-light)",
      hasPaused: skipPause
    });
  }
  walkState.lastSpawnedYear = year;

  // Penultimate-of-year: NEXT is same year, ONE-AFTER is different year
  const peek1 = walkState.nextUpdateIdx + 1;
  const peek2 = walkState.nextUpdateIdx + 2;
  const nextInSameYear = peek1 < updates.length && yearOfUpdate(updates[peek1]) === year;
  const twoInSameYear = peek2 < updates.length && yearOfUpdate(updates[peek2]) === year;
  const isPenultimateOfYear = nextInSameYear && !twoInSameYear;
  // Last of loop: this is the final (oldest) update — cat rests after triggering it
  const isLastOfLoop = walkState.nextUpdateIdx === updates.length - 1;

  walkState.milestones.push({
    x,
    update,
    triggered: false,
    color: colorForUpdate(update),
    isPenultimateOfYear,
    isLoopStart: wrapping,
    isLastOfLoop,
    endedYear: year
  });
  walkState.nextUpdateIdx++;
}

function renderMilestones() {
  const els = catRunMilestones.children;
  const total = walkState.milestones.length + walkState.bridges.length;
  while (els.length < total) {
    catRunMilestones.appendChild(document.createElement("div"));
  }
  while (els.length > total) {
    catRunMilestones.removeChild(els[els.length - 1]);
  }
  let i = 0;
  for (const ms of walkState.milestones) {
    const el = els[i++];
    el.className = "cat-run-milestone";
    el.style.transform = `translateX(${ms.x}px)`;
    el.style.setProperty("--year-color", ms.color);
    el.innerHTML = "";
  }
  for (const br of walkState.bridges) {
    const el = els[i++];
    el.className = "cat-run-bridge";
    el.style.transform = `translateX(${br.x - BRIDGE_WIDTH / 2}px)`;
    el.style.setProperty("--year-color", br.color);
    if (!el.firstChild) {
      el.innerHTML = `
        <svg class="cat-run-bridge-svg" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" stroke-width="1" opacity="0.4"/>
          <path d="M 0 30 Q 50 -10 100 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M 15 30 Q 50 8 85 30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.75"/>
          <line x1="10" y1="30" x2="10" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="90" y1="30" x2="90" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="50" y1="30" x2="50" y2="16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
        </svg>
        <div class="cat-run-bridge-label">'${String(br.year).slice(-2)}</div>
      `;
    } else {
      el.querySelector(".cat-run-bridge-label").textContent = `'${String(br.year).slice(-2)}`;
    }
  }
}

function catYOffset() {
  const s = walkState;
  if (s.alerting || s.paused || s.sleeping) return 0;
  let bridgeY = 0;
  for (const br of s.bridges) {
    const dx = br.x - CAT_CENTER_X;
    if (Math.abs(dx) < BRIDGE_WIDTH / 2 + 6) {
      const t = dx / (BRIDGE_WIDTH / 2);
      const lift = -Math.max(0, BRIDGE_ARC_HEIGHT * (1 - t * t));
      if (lift < bridgeY) bridgeY = lift;
    }
  }
  return bridgeY;
}

function walkTick() {
  if (document.hidden || catRunGame.hidden) {
    return requestAnimationFrame(walkTick);
  }
  const s = walkState;

  if (s.sleeping) {
    s.frameCounter++;
    if (s.frameCounter % SLEEP_FRAME_INTERVAL === 0) {
      s.sleepFrame = (s.sleepFrame + 1) % SLEEP_FRAMES.length;
      setCatSprite(SLEEP_FRAMES[s.sleepFrame]);
    }
    catRunCat.style.transform = "translateY(0px)";
    return requestAnimationFrame(walkTick);
  }

  if (!s.paused && !s.alerting) {
    s.frameCounter++;
    if (s.frameCounter % WALK_FRAME_INTERVAL === 0) {
      s.spriteFrame = (s.spriteFrame + 1) % WALK_FRAMES.length;
      setCatSprite(WALK_FRAMES[s.spriteFrame]);
    }
    s.distance += WALK_SPEED;
    for (const ms of s.milestones) ms.x -= WALK_SPEED;
    for (const br of s.bridges) br.x -= WALK_SPEED;

    // Sleep on bridge (only if bridge wasn't marked as hasPaused already)
    for (const br of s.bridges) {
      if (!br.hasPaused && br.x <= CAT_CENTER_X) {
        br.hasPaused = true;
        sleepOnBridge(br);
        break;
      }
    }
  }

  for (const ms of s.milestones) {
    if (!ms.triggered && ms.x <= CAT_TRIGGER_X) {
      ms.triggered = true;
      showWalkCaption(ms.update);
      if (ms.isLastOfLoop) {
        // Cat rests after finishing the whole loop; user must click to restart
        pauseAfterLoop();
        renderMilestones();
        return requestAnimationFrame(walkTick);
      }
    }
  }

  if (!s.paused && !s.alerting) {
    s.milestones = s.milestones.filter(ms => ms.x > -20);
    s.bridges = s.bridges.filter(br => br.x > -BRIDGE_WIDTH);

    const rightmost = s.milestones.length
      ? Math.max(...s.milestones.map(ms => ms.x))
      : -Infinity;
    const gameW = catRunGame.clientWidth || 600;
    if (rightmost < gameW - MILESTONE_SPACING) {
      spawnMilestone();
    }
  }

  catRunCat.style.transform = `translateY(${catYOffset()}px)`;
  renderMilestones();
  requestAnimationFrame(walkTick);
}

function initWalkingCat() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    initTimeline();
    updatesTimeline.hidden = false;
    catRunGame.hidden = true;
    return;
  }
  YEAR_COLOR_MAP = buildYearColorMap();
  YEAR_COUNT_MAP = buildYearCountMap();
  walkState = makeWalkState();
  setCatSprite(WALK_FRAMES[0]);

  const gameW = catRunGame.clientWidth || 600;
  const firstUpdate = updates[0];
  walkState.nextUpdateIdx = 0;
  walkState.lastSpawnedYear = null;

  // Intro: hold cat still, show greeting bubble, then start walking
  walkState.paused = true;
  setCatSprite(WALK_FRAMES[0]);
  showCatBubble("hi! i'm ginger come, i'll show you around");
  const startWalking = () => {
    if (!walkState.paused) return;
    walkState.paused = false;
    clearTimeout(walkState.sleerpTimer);
    hideCatBubble();
    walkState.milestones.push({
      x: Math.min(gameW - 60, CAT_TRIGGER_X + 90),
      update: firstUpdate,
      triggered: false,
      color: colorForUpdate(firstUpdate)
    });
    walkState.nextUpdateIdx = 1;
    walkState.lastSpawnedYear = yearOfUpdate(firstUpdate);
  };
  // Start walking when the Updates section scrolls into view
  const updatesSection = document.getElementById("updates");
  const timelineHint = document.getElementById("timelineHint");
  const showTimelineHint = () => {
    if (!timelineHint) return;
    timelineHint.classList.add("visible");
    setTimeout(() => timelineHint.classList.remove("visible"), 3000);
  };
  if (updatesSection && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        obs.disconnect();
        setTimeout(startWalking, 1500);
        setTimeout(showTimelineHint, 2500);
      }
    }, { threshold: 0.35 });
    obs.observe(updatesSection);
  } else {
    walkState.sleepTimer = setTimeout(startWalking, 4500);
    setTimeout(showTimelineHint, 5500);
  }

  const introClickHandler = () => {
    if (walkState.paused && walkState.nextUpdateIdx === 0) {
      startWalking();
    } else {
      onCatStripClick();
    }
  };

  catRunGame.addEventListener("click", introClickHandler);
  catRunGame.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      introClickHandler();
    }
  });

  requestAnimationFrame(walkTick);
}

// Horizontal-spine timeline (revealed on demand)
const MONTHS = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Sept: 9, Oct: 10, Nov: 11, Dec: 12
};

function parseUpdateDate(str) {
  const [mon, yr] = str.split(" '");
  return (2000 + Number(yr)) * 12 + (MONTHS[mon] || 1);
}

let timelineInitialized = false;
let pinnedIdx = 0;
let hoveredIdx = null;
let expandedYear = null;
let timelinePoints = null;

function computeYearSegments() {
  const years = [...new Set(timelinePoints.map(p => Math.floor(p.t / 12)))].sort((a, b) => a - b);
  const n = years.length;
  if (n === 0) return { years: [], segments: {} };
  if (expandedYear === null || !years.includes(expandedYear)) {
    expandedYear = years[years.length - 1]; // newest by default
  }
  const otherW = n === 1 ? 0 : 75 / (n - 1);
  const expandedW = n === 1 ? 100 : 25;
  const segments = {};
  let x = 0;
  for (const y of years) {
    const w = y === expandedYear ? expandedW : otherW;
    segments[y] = { x, w };
    x += w;
  }
  return { years, segments };
}

function xOfPoint(p, segments, rankByYear) {
  const y = Math.floor(p.t / 12);
  const seg = segments[y];
  const info = rankByYear.get(y);
  const rank = info.ranks.get(p.i);
  // Compress within-year spread: use middle 50% of segment (25% padding each side)
  const PAD = 0.25;
  const frac = info.count === 1
    ? 0.5
    : PAD + (rank / (info.count - 1)) * (1 - 2 * PAD);
  return seg.x + frac * seg.w;
}

function buildTimeline() {
  const { years, segments } = computeYearSegments();

  // Rank each dot within its year (oldest = 0, newest = count-1)
  const rankByYear = new Map();
  for (const y of years) {
    const inYear = timelinePoints
      .filter(p => Math.floor(p.t / 12) === y)
      .sort((a, b) => a.t - b.t);
    const ranks = new Map();
    inYear.forEach((p, k) => ranks.set(p.i, k));
    rankByYear.set(y, { ranks, count: inYear.length });
  }

  timelineDots.innerHTML = timelinePoints.map(p =>
    `<span class="timeline-dot" style="left:${xOfPoint(p, segments, rankByYear)}%" data-idx="${p.i}"></span>`
  ).join("");

  timelineYears.innerHTML = years.map(y => {
    const seg = segments[y];
    const cls = y === expandedYear ? "timeline-year expanded" : "timeline-year";
    return `<span class="timeline-year-tick" style="left:${seg.x}%"></span>` +
           `<span class="${cls}" style="left:${seg.x}%" data-year="${y}">'${String(y).slice(-2)}</span>`;
  }).join("");
}

function renderTimeline() {
  const displayed = hoveredIdx !== null ? hoveredIdx : pinnedIdx;

  // Toggle classes on existing dots (no DOM rebuild, so hover stays stable)
  const dots = timelineDots.children;
  for (let i = 0; i < dots.length; i++) {
    const idx = Number(dots[i].dataset.idx);
    dots[i].classList.toggle("active", idx === pinnedIdx);
    dots[i].classList.toggle("previewing", hoveredIdx !== null && idx === hoveredIdx && idx !== pinnedIdx);
  }

  const u = updates[displayed];
  timelineActive.innerHTML = `<span class="update-date">${u.date}</span>${u.text}`;

  timelinePrev.disabled = pinnedIdx >= updates.length - 1;
  timelineNext.disabled = pinnedIdx <= 0;
}

function stepTimeline(delta) {
  const next = Math.min(updates.length - 1, Math.max(0, pinnedIdx - delta));
  if (next === pinnedIdx) return;
  pinnedIdx = next;
  hoveredIdx = null;
  renderTimeline();
}

function initTimeline() {
  if (timelineInitialized) return;
  timelineInitialized = true;
  pinnedIdx = 0;
  hoveredIdx = null;
  timelinePoints = updates.map((u, i) => ({ i, t: parseUpdateDate(u.date) }));
  buildTimeline();
  renderTimeline();

  timelinePrev.addEventListener("click", () => stepTimeline(-1));
  timelineNext.addEventListener("click", () => stepTimeline(+1));

  timelineDots.addEventListener("mouseover", (e) => {
    const dot = e.target.closest(".timeline-dot");
    if (!dot) return;
    const idx = Number(dot.dataset.idx);
    if (idx === hoveredIdx) return;
    hoveredIdx = idx;
    renderTimeline();
  });
  timelineDots.addEventListener("mouseleave", () => {
    if (hoveredIdx === null) return;
    hoveredIdx = null;
    renderTimeline();
  });
  timelineDots.addEventListener("click", (e) => {
    const dot = e.target.closest(".timeline-dot");
    if (!dot) return;
    const idx = Number(dot.dataset.idx);
    pinnedIdx = idx;
    hoveredIdx = null;
    renderTimeline();
  });

  timelineYears.addEventListener("click", (e) => {
    const label = e.target.closest(".timeline-year");
    if (!label) return;
    const y = Number(label.dataset.year);
    if (y === expandedYear) return;
    expandedYear = y;
    buildTimeline();
    renderTimeline();
  });

  updatesTimeline.tabIndex = 0;
  updatesTimeline.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); stepTimeline(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepTimeline(+1); }
  });
}

function initShowAllUpdates() {
  showAllUpdatesBtn.addEventListener("click", () => {
    if (updatesTimeline.hidden) {
      initTimeline();
      updatesTimeline.hidden = false;
      catRunGame.hidden = true;
      showAllUpdatesBtn.textContent = "Hide timeline";
    } else {
      updatesTimeline.hidden = true;
      catRunGame.hidden = false;
      showAllUpdatesBtn.textContent = "View timeline";
    }
  });
}

function renderResearch() {
  researchList.innerHTML = research.map((r) => `
      <div class="research-item">
        <div class="research-image">
          <img src="${r.image}" alt="${r.alt}" loading="lazy">
        </div>
        <div class="research-content">
          <h3 class="research-title">${r.title}</h3>
          <!-- <p class="research-authors">Author: ${r.authors}</p> -->
          <p class="project-meta">${r.status}</p>
          <p class="research-description">${r.description}</p>
          ${r.link ? `<a href="${r.link}" target="_blank" rel="noopener noreferrer" class="project-link">${r.linkText}</a>` : ""}
          ${r["link2"] ? `<a href="${r["link2"]}" target="_blank" rel="noopener noreferrer" class="project-link">${r["linkText2"]}</a>` : ""}
        </div>
      </div>
    `).join("");
}

function renderProjects() {
  const count = projectsExpanded ? projects.length : 4;
  const visible = projects.slice(0, count);
  projectsList.innerHTML = visible.map((p) => `
      <div class="project-item">
        <div class="project-image">
          <img src="${p.image}" alt="${p.alt}" loading="lazy">
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-meta">${p.tech} | ${p.year}</p>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">${p.linkText}</a>
          <p class="project-description">${p.description}</p>
        </div>
      </div>
    `).join("");
  if (projects.length > 4) {
    toggleProjectsBtn.style.display = "inline-block";
    toggleProjectsBtn.textContent = projectsExpanded ? "See less" : "See more";
  } else {
    toggleProjectsBtn.style.display = "none";
  }
}

function renderFooter() {
  const year = new Date().getFullYear();
  footerText.textContent = `© ${year} ${profile.name}`;
}

function initScrollTop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

(function initContextMenu() {
  const menu = document.createElement("div");
  menu.id = "custom-context-menu";
  menu.innerHTML = "<ul><li id='ctx-new-tab'>Open in new tab</li><li id='ctx-open-mail'>Open in mail app</li><li id='ctx-copy-link'>Copy link</li><li id='ctx-copy-email'>Copy email</li><li id='ctx-copy-text'>Copy</li></ul>";
  document.body.appendChild(menu);

  const newTabItem = document.getElementById("ctx-new-tab");
  const openMailItem = document.getElementById("ctx-open-mail");
  const copyLinkItem = document.getElementById("ctx-copy-link");
  const copyEmailItem = document.getElementById("ctx-copy-email");
  const copyTextItem = document.getElementById("ctx-copy-text");

  let currentLink = null;
  let selectedText = "";

  document.addEventListener("mousedown", () => {
    selectedText = window.getSelection().toString().trim();
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const linkEl = e.target.closest("a[href]");
    const text = selectedText;
    if (!linkEl && !text) {
      menu.style.display = "none";
      return;
    }
    currentLink = linkEl || null;
    const isEmail = linkEl && (linkEl.href.toLowerCase().startsWith("mailto:") || !!linkEl.dataset.addr);
    newTabItem.style.display = linkEl && !isEmail ? "" : "none";
    copyLinkItem.style.display = linkEl && !isEmail ? "" : "none";
    openMailItem.style.display = isEmail ? "" : "none";
    copyEmailItem.style.display = isEmail ? "" : "none";
    copyTextItem.style.display = !linkEl && text ? "" : "none";
    menu.style.display = "block";
    const menuW = menu.offsetWidth || 160;
    const menuH = menu.offsetHeight || 40;
    const x = e.clientX + menuW > window.innerWidth ? e.clientX - menuW : e.clientX;
    const y = e.clientY + menuH > window.innerHeight ? e.clientY - menuH : e.clientY;
    menu.style.left = x + "px";
    menu.style.top = y + "px";
  });

  const toast = (msg) => {
    if (typeof window.__showToast === "function") window.__showToast(msg);
  };

  newTabItem.addEventListener("click", () => {
    if (currentLink) {
      window.open(currentLink.href, "_blank", "noopener,noreferrer");
      toast("Opened in new tab");
    }
    menu.style.display = "none";
  });
  copyLinkItem.addEventListener("click", () => {
    if (currentLink) {
      navigator.clipboard.writeText(currentLink.href);
      toast("Link copied");
    }
    menu.style.display = "none";
  });
  copyTextItem.addEventListener("click", () => {
    if (selectedText) {
      navigator.clipboard.writeText(selectedText);
      toast("Text copied");
    }
    menu.style.display = "none";
  });
  openMailItem.addEventListener("click", () => {
    if (currentLink) {
      const addr = currentLink.dataset.addr || currentLink.href.replace(/^mailto:/i, "");
      const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(addr);
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = "mailto:" + addr;
      document.body.appendChild(iframe);
      setTimeout(() => {
        iframe.remove();
        if (!document.hidden) {
          window.open(gmail, "_blank", "noopener,noreferrer");
        }
      }, 1000);
    }
    menu.style.display = "none";
  });
  copyEmailItem.addEventListener("click", () => {
    if (currentLink) {
      const addr = currentLink.dataset.addr || currentLink.href.replace(/^mailto:/i, "");
      navigator.clipboard.writeText(addr);
      toast("Email copied");
    }
    menu.style.display = "none";
  });

  const hide = () => (menu.style.display = "none");
  document.addEventListener("click", hide);
  document.addEventListener("scroll", hide, true);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });
})();

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key.toLowerCase() === "u")
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initWalkingCat();
  initShowAllUpdates();
  renderResearch();
  renderProjects();
  renderFooter();
  initScrollTop();
  initMobileMenu();
  initThemeToggle();

  toggleProjectsBtn.addEventListener("click", () => {
    projectsExpanded = !projectsExpanded;
    renderProjects();
  });

  const emailUser = "kaifimteyaz.k";
  const emailDomain = "gmail.com";
  const contactEmail = document.getElementById("contactEmail");
  const emailAddr = emailUser + "@" + emailDomain;
  contactEmail.href = "mailto:" + emailAddr;
  contactEmail.textContent = emailAddr;
  contactEmail.addEventListener("click", () => {
    if (navigator.clipboard) navigator.clipboard.writeText(emailAddr).catch(() => {});
  });
});
