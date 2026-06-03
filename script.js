const updates = [
  {
    date: "Apr '26",
    text: "Ranked 7<sup>th</sup> out of 2,000+ participants across a two-phase competition at AISEHack 2026, organized by <a href='https://www.anrf.in/' target='_blank' rel='noopener noreferrer' class='text-link'>ANRF</a> in collaboration with <a href='https://www.ibm.com/' target='_blank' rel='noopener noreferrer' class='text-link'>IBM</a> and <a href='https://www.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIT Delhi</a>, hosted at <a href='https://www.iiit.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIIT Hyderabad</a>.",
  },
  {
    date: "Feb '26",
    text: "Led a team to 2<sup>nd</sup> place at the AMD AI Reinforcement Learning Hackathon, leading LLM fine-tuning and optimization under strict latency constraints. The event was organized by <a href='https://www.amd.com/' target='_blank' rel='noopener noreferrer' class='text-link'>AMD</a>, <a href='https://scai.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>Yardi School of AI</a> at <a href='https://www.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIT Delhi</a>, and <a href='https://unsloth.ai/' target='_blank' rel='noopener noreferrer' class='text-link'>Unsloth AI</a>.",
  },

  {
    date: "Jan '26",
    text: "Developing Ink2Info, a health informatics solution designed to digitize handwritten prescriptions into structured Electronic Health Records (EHRs), bridging the critical gap between traditional paper-based clinical workflows and modern digital health infrastructure.",
  },
  {
    date: "Jan '26",
    text: "Attended <a href='https://aiims.edu/index.php/en' target='_blank' rel='noopener noreferrer' class='text-link'>AIIMS</a>-<a href='https://www.iitd.ac.in/' target='_blank' rel='noopener noreferrer' class='text-link'>IIT Delhi</a>-<a href='https://www.ucl.ac.uk/' target='_blank' rel='noopener noreferrer' class='text-link'>UCL</a> Med-Tech Summit and Hackathon 2026, collaborated with interdisciplinary teams to develop innovative healthcare solutions using AI and emerging technologies.",
  },
  {
    date: "Nov '25",
    text: " Working on CATS(Culturally Adaptive Therapeutic System), an agentic system for physiotherapists to create personalized exercise videos that align with patients' cultural backgrounds, showing exercises through culturally-appropriate demonstrations.",
  },
  {
    date: "Oct '25",
    text: "Deployed De-Tail, an experimental reasoning-transparent search assistant tool using OpenAI reasoner, featuring step-by-step thought chains and real-time web search integration with Tavily API",
  },
  {
    date: "Sept '25",
    text: "Started Data Science Internship with Prof. Aaditya Dar, economist at Amazon.",
  },
  {
    date: "Sept '25",
    text: "Building Blue, an AI-based LLVM tool that adds the right level of code obfuscation (hiding logic, encrypting sensitive code, anti-debugging) to each function, balancing security and performance.",
  },

  {
    date: "Sep '25",
    text: "Submitted poster to India HCI 2025 on co-designing WhatsApp-based government performance dashboards with public sector workers.",
  },
  {
    date: "Aug '25",
    text: " Completed research internship at Michigan State University with Prof. Prabhat Barnwal, built and deployed Sewa Assist and Peer Knowledge Exchange Platform.",
  },
  {
    date: "Jul '25",
    text: "Earned digital credential in Getting Started with Artificial Intelligence by IBM SkillsBuild, demonstrating foundational AI and Generative AI concepts.",
  },
  {
    date: "May '25",
    text: "Completed Lawgic, an AI powered legal document analyzer using fine-tuned transformer models for Indian court data, as a college minor project.",
  },
  {
    date: "Apr '25",
    text: "Completed NPTEL Human Computer Interaction course, deepening understanding of user experience design principles and user-centered methodologies.",
  },
  {
    date: "Mar '25",
    text: "Started Full Stack Developer and Research Internship at Michigan State University (with Prof. Prabhat Barnwal).",
  },
  {
    date: "Jul '24",
    text: "Completed Data Fundamentals certification by IBM SkillsBuild, gaining practical experience in data cleaning and visualization with IBM Watson Studio.",
  },
  {
    date: "May '24",
    text: "Selected for AI Summer School at IIIT Delhi, focusing on Large Language Models, multilingual systems, and hands on multimodal learning with text visual data integration.",
  },
  {
    date: "Apr '24",
    text: "Built official website for International Conference on Sustainability and Digitalization at Jamia Hamdard, gaining experience in conference tech infrastructure.",
  },
  {
    date: "Oct '23",
    text: "Built Vulture web vulnerability scanner using OWASP ZAP API, ranked top 10 among 100+ submissions at university hackathon.",
  },
  {
    date: "Jul '23",
    text: "Selected for AI Summer School at IIIT Delhi, introduced to federated learning and Coresets, later applied in optimizing data workflows for public datasets.",
  },
  {
    date: "Jan '23",
    text: "Completed Full Stack Developer Internship at FTK Center, leading development of alumni community web app with 2,000+ users and 20% page load time reduction.",
  },
  {
    date: "Dec '22",
    text: "Collaborated in Agile 4-member team at FTK Center to ship 3 major features in 6 weeks using React, Node.js, and MySQL.",
  },
];

const researchData = [
  {
    title: "Detecting Design Theater in Reasoning Models",
    authors: "Md Kaif Imteyaz",
    status: "LLM Benchmarking | Submitted to AIES 2026",
    description:
      "Developed a benchmark to measure authenticity gaps between generated reasoning traces and actual model behavior through systematic evaluation and interpretability analysis.",
      image: "public/design.png",
    alt: "Design Theater LLM benchmarking research",
  },
  {
    title: "Episode-Aware PM2.5 Forecasting Across India",
    authors: "Md Kaif Imteyaz",
    status: "Spatiotemporal Deep Learning | Ongoing Research",
    description:
      "Designed a spatiotemporal deep learning model for country-level PM2.5 forecasting over a 140×124 grid at 25 km resolution, predicting 16 future hours from a 10-hour lookback across 26 input channels with no future meteorological context.",
    image: "public/spato-temp.png",
    alt: "PM2.5 spatiotemporal forecasting heatmap across India",
  },
  {
    title: "CATS: Culturally Adaptive Therapeutic System",
    authors: "Md Kaif Imteyaz",
    status: "Agentic AI | Final Undergraduate Project",
    description:
      "Designed an agentic AI system for physiotherapists that generates personalized exercise videos aligned with patients' cultural backgrounds, while providing real-time AI posture analysis, automated exercise monitoring, and intelligent voice coaching to support rehabilitation and treatment adherence.",
    image: "public/cats-ui.png",
    alt: "CATS physiotherapy system",
    link: "https://github.com/Kaif-Imteyaz/CATS",
    linkText: "Repository",
  },
];

const projectsData = [
  {
    title: "Ink2Info: Digitizing Health Informatics",
    tech: "Intelligent Document Processing (IDP), Clinical Data Standardization, Computer Vision",
    year: "2026",
    description:
      "Developed a prescription digitization pipeline using OpenAI and Gemma 7B with a Fabric.js canvas for real-time handwriting extraction, directly modifying inference behavior of the underlying models for domain adaptation. Implemented role-based access control with HMAC-signed QR codes for secure data sharing across multiple user roles.",
    image: "public/ink2info.png",
    alt: "Ink2Info prescription digitizer",
    link: "https://github.com/Kaif-Imteyaz/Ink2Info",
    linkText: "Repository",
  },
  {
    title: "OceanDataSync",
    tech: "Automated ETL Pipelines, Geospatial Data Processing, Asynchronous Architecture",
    year: "2025",
    description:
      "Built an automated oceanographic data pipeline that synchronizes datasets from multiple authoritative sources into a unified, standardized format. Includes chunked processing, YAML-based configuration, robust retry logic, and detailed logging in CSV, JSON, and text outputs.",
    image: "public/oceandatasync.jpg",
    alt: "OceanDataSync pipeline",
    link: "https://github.com/Kaif-Imteyaz/OceanDataSync",
    linkText: "Repository",
  },
  {
    title: "De-Tail: Agentic AI Search Assistant",
    tech: "LLMs, RAG, Chain-of-Thought Reasoning, Agentic Workflows",
    year: "2025",
    description:
      "Engineered a retrieval-augmented generation pipeline that exposes its full step-by-step reasoning chain, integrating OpenAI Reasoner with Tavily API for real-time web retrieval. Designed end-to-end retrieval flow from query intake through document fetching, reranking signal generation, and response synthesis, with full transparency at each stage.",
    image: "public/detail-ui.png",
    alt: "De-Tail project",
    link: "https://github.com/Kaif-Imteyaz/De-Tail",
    linkText: "Repository",
  },
  {
    title: "Anti-Corrupt Infrastructure",
    tech: "Full-Stack System Design, GovTech Architecture, AI-Driven Auditing",
    year: "2025",
    description:
      "Developed AI-based platform to ensure transparency in infrastructure projects and prevent corruption. Automated systems for project tracking, fund allocation, and milestone verification.",
    image: "public/antiCorrupt-UI.png",
    alt: "Anti-Corrupt Infrastructure project",
    link: "https://github.com/Kaif-Imteyaz/Anti-Corrupt-Infra",
    linkText: "Repository",
  },
  {
    title: "Vulture: Vulnerability Scanner",
    tech: "Automated Security Testing (DAST), Vulnerability Scanning",
    year: "2023",
    description:
      "Built web app identifying vulnerabilities using OWASP ZAP API during 2-day hackathon. Ranked among top 10 projects among 100+ submissions.",
    image: "public/vulture.png",
    alt: "Vulture project",
    link: "https://www.youtube.com/watch?v=Vt5HbBhyJlA",
    linkText: "Demo Video",
  },
];

const heroContent = {
  name: "Md Kaif Imteyaz",
  greeting: "Hey, I'm Kaif.",
  profileImage: "public/xyz.jpg",
};

let expandedUpdates = false;
let expandedProjects = false;

// DOM Elements
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
const mobileNavDrawer = document.querySelector(".mobile-nav-drawer");
const closeBtn = document.querySelector(".close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const updatesList = document.getElementById("updatesList");
const toggleUpdatesBtn = document.getElementById("toggleUpdatesBtn");
const researchList = document.getElementById("researchList");
const projectsList = document.getElementById("projectsList");
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const footerText = document.getElementById("footerText");

document.addEventListener("contextmenu", (e) => e.preventDefault());

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

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderUpdates();
  renderResearch();
  renderProjects();
  updateFooter();
  setupScrollListener();
  setupMobileNav();
});

// Mobile Navigation
function setupMobileNav() {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNavOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", closeMobileNav);

  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) {
      closeMobileNav();
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

function closeMobileNav() {
  mobileNavOverlay.classList.remove("active");
}
// Updates Section
function renderUpdates() {
  const visibleCount = expandedUpdates ? updates.length : 5;
  const visibleUpdates = updates.slice(0, visibleCount);

  updatesList.innerHTML = visibleUpdates
    .map(
      (update) => `
      <div class="update-item">
        <span class="update-date">[${update.date}]</span>
        ${update.text}
      </div>
    `,
    )
    .join("");

  // Toggle button text based on expanded state and whether there are more items
  const hasMoreItems = updates.length > 5;
  if (!hasMoreItems) {
    toggleUpdatesBtn.style.display = "none";
  } else {
    toggleUpdatesBtn.style.display = "inline-block";
    toggleUpdatesBtn.textContent = expandedUpdates ? "See less" : "See more";
  }
}

// Add this event listener setup in your DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  renderUpdates();
  renderResearch();
  renderProjects();
  updateFooter();
  setupScrollListener();
  setupMobileNav();

  // Add the toggle button event listener here
  toggleUpdatesBtn.addEventListener("click", () => {
    expandedUpdates = !expandedUpdates;
    renderUpdates();
  });

  const u = "kaifimteyaz.k";
  const d = "gmail.com";
  const el = document.getElementById("contactEmail");
  el.href = "mailto:" + u + "@" + d;
  el.textContent = u + "@" + d;

  toggleProjectsBtn.addEventListener("click", () => {
    expandedProjects = !expandedProjects;
    renderProjects();
  });
});

// Research Section
function renderResearch() {
  researchList.innerHTML = researchData
    .map(
      (research) => `
      <div class="research-item">
        <div class="research-image">
          <img src="${research.image}" alt="${research.alt}" loading="lazy">
        </div>
        <div class="research-content">
          <h3 class="research-title">${research.title}</h3>
          <!-- <p class="research-authors">Author: ${research.authors}</p> -->
          <p class="project-meta">${research.status}</p>
          <p class="research-description">${research.description}</p>
          ${research.link ? `<a href="${research.link}" target="_blank" rel="noopener noreferrer" class="project-link">${research.linkText}</a>` : ""}
        </div>
      </div>
    `,
    )
    .join("");
}

// Projects Section
function renderProjects() {
  const visibleCount = expandedProjects ? projectsData.length : 4;
  const visibleProjects = projectsData.slice(0, visibleCount);

  projectsList.innerHTML = visibleProjects
    .map(
      (project) => `
      <div class="project-item">
        <div class="project-image">
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-meta">${project.tech} | ${project.year}</p>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">${project.linkText}</a>
          <p class="project-description">${project.description}</p>
        </div>
      </div>
    `,
    )
    .join("");

  const hasMoreItems = projectsData.length > 4;
  if (!hasMoreItems) {
    toggleProjectsBtn.style.display = "none";
  } else {
    toggleProjectsBtn.style.display = "inline-block";
    toggleProjectsBtn.textContent = expandedProjects ? "See less" : "See more";
  }
}

// Footer
function updateFooter() {
  const year = new Date().getFullYear();
  // footerText.textContent = `${year} | © ${heroContent.name}`;
  footerText.textContent = `© ${year} ${heroContent.name}`;
}

// Scroll to Top
function setupScrollListener() {
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
