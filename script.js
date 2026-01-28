const updates = [
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
    text: `Working on a paper on Detecting Design Theater (false reasoning) in Large Reasoning Models with collaborators from <a href="https://www.salesforceairesearch.com/" target="_blank" rel="noopener noreferrer" class="text-link">Salesforce AI Research</a> and <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer" class="text-link">Northeastern University</a>, developing benchmarks to quantify authenticity gaps in AI reasoning models.`,
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
    title: "CATS: Culturally Adaptive Therapeutic System",
    authors: "Md Kaif Imteyaz",
    status: "Final Undergraduate Project 2025",
    description:
      "An agentic system for physiotherapists to create personalized exercise videos that align with patients' cultural backgrounds, showing exercises through culturally-appropriate demonstrations.",
    image: "public/prism.png",
    alt: "CATS research project",
  },
  {
    title: "Detecting Design Theater in Reasoning Models",
    authors: "Kashif Imteyaz, Daniel Lee, Md Kaif Imteyaz, Saiph Savage",
    status: "Working Paper 2025",
    description:
      "A benchmark for exposing when LLMs generate convincing rationales for unimplemented features, quantifying the authenticity gap in creative reasoning tasks.",
    image: "public/ui-bench.png",
    alt: "Detecting Design Theater research",
  },
];

const projectsData = [
  {
    title: "Ink2Info: Digitizing Health Informatics",
    tech: "Intelligent Document Processing (IDP), Clinical Data Standardization, Computer Vision",
    year: "2026",
    description:
      "Developing a health informatics solution that digitizes handwritten prescriptions into structured Electronic Health Records (EHRs), bridging the critical gap between traditional paper-based clinical workflows and modern digital health infrastructure.",
    image: "public/ink2info.png",
    alt: "Ink2Info prescription digitizer",
    link: "https://github.com/Kaif-Imteyaz/Ink2Info",
    linkText: "Repository",
  },
  {
    title: "CATS: Culturally Adaptive Therapeutic System",
    tech: "Computer Vision (Pose Estimation), Edge AI (On-Device ML), Privacy-First Design",
    year: "2025",
    description:
      "Built a privacy-first physiotherapy platform offering real-time AI posture analysis, automated exercise monitoring, and intelligent voice coaching, with all processing done locally.",
    image: "public/cats-ui.png",
    alt: "CATS physiotherapy system",
    link: "https://github.com/Kaif-Imteyaz/CATS",
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
      "Developed experimental chatbot revealing the reasoning process and step-by-step thought chain for transparency. Integrated OpenAI Reasoner with Tavily API for real-time web search and retrieval-augmented generation.",
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
const footerText = document.getElementById("footerText");

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
    `
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
          <p class="research-status">${research.status}</p>
          <p class="research-description">${research.description}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// Projects Section
function renderProjects() {
  projectsList.innerHTML = projectsData
    .map(
      (project) => `
      <div class="project-item">
        <div class="project-image">
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-meta">${project.tech} | ${project.year}</p>
          <a href="${project.link}" target="_blank"  rel="noopener noreferrer" class="project-link">${project.linkText}</a>
          <p class="project-description">${project.description}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// Footer
function updateFooter() {
  const year = new Date().getFullYear();
  footerText.textContent = `${year} | ${heroContent.name}`;
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
