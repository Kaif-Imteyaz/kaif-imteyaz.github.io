const updates = [
  {
    date: "Oct '25",
    text: "Co-authoring Detecting Design Theater in Reasoning Models with collaborators from Northeastern University, developing benchmarks to quantify authenticity gaps in AI reasoning systems.",
  },
  {
    date: "Oct '25",
    text: "Deployed De-Tail, an experimental reasoning-transparent search assistant using Deepseek reasoner, featuring step-by-step thought chains and real-time web search integration with Tavily API.",
  },
  {
    date: "Sept '25",
    text: "Started Data Science Internship at Indian School of Business (with Prof. Aaditya Dar).",
  },
  {
    date: "Sept '25",
    text: "Working on Blue, an AI driven LLVM obfuscation tool for Smart India Hackathon 2025. It uses AI to decide how much protection each function needs, balancing performance and security.",
  },
  
  {
    date: "Sep '25",
    text: "Submitted poster to India HCI 2025 on co-designing WhatsApp-based government performance dashboards using the Rose-Bud-Thorn reflection framework.",
  },
  {
    date: "Aug '25",
    text: " Completed research internship at Michigan State University with Prof. Prabhat Barnwal, built and deployed Sewa Assist and Peer Knowledge Exchange Platform for government officers in Punjab.",
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
    text: "Started Research Internship at Michigan State University (with Prof. Prabhat Barnwal), working on building tools to improve government service delivery in Punjab, India.",
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
  
]

const researchData = [
  {
    title: "Detecting Design Theater in Reasoning Models",
    authors: "Kashif Imteyaz, Daniel Lee, Md Kaif Imteyaz, Saiph Savage",
    status: "Working Paper 2025",
    description:
      "A benchmark for exposing when LLMs generate convincing rationales for unimplemented features, quantifying the authenticity gap in creative reasoning tasks.",
    image: "public/ui-bench.png",
    alt: "Detecting Design Theater research",
  },
  {
    title: "PRISM-PT: Personalizing Physical Therapy through Cultural Agentic Intelligence",
    authors: "Md Kaif Imteyaz",
    status: "Final Project 2025",
    description:
      "An agentic system for physiotherapists to create personalized exercise videos that align with patients' cultural backgrounds, showing exercises through culturally-appropriate demonstrations.",
    image: "public/prism.png",
    alt: "PRISM-PT research project",
  },
]

const projectsData = [
  {
    title: "De-Tail: Agentic AI Search Assistant",
    tech: "React, DeepSeek API, Tavily API",
    year: "2025",
    description:
      "Developed experimental chatbot revealing the reasoning process and step-by-step thought chain for transparency. Integrated DeepSeek Reasoner with Tavily API for real-time web search and retrieval-augmented generation.",
    image: "public/detail-ui.png",
    alt: "De-Tail project",
    link: "https://github.com/Kaif-Imteyaz/De-Tail",
    linkText: "Repository",
  },
  {
    title: "Anti-Corrupt Infrastructure",
    tech: "React, Node.js, OpenRouter (OpenAI)",
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
    tech: "React, Node.js, OWASP ZAP API",
    year: "2023",
    description:
      "Built web app identifying vulnerabilities using OWASP ZAP API during 2-day hackathon. Ranked among top 10 projects among 100+ submissions.",
    image: "public/vulture.png",
    alt: "Vulture project",
    link: "https://www.youtube.com/watch?v=Vt5HbBhyJlA",
    linkText: "Demo Video",
  },
]

const heroContent = {
  name: "Md Kaif Imteyaz",
  greeting: "Hey, I'm Kaif.",
  profileImage: "public/xyz.jpg",
}

let expandedUpdates = false

// DOM Elements
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileNavOverlay = document.getElementById("mobileNavOverlay")
const mobileNavDrawer = document.querySelector(".mobile-nav-drawer")
const closeBtn = document.querySelector(".close-btn")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
const scrollTopBtn = document.getElementById("scrollTopBtn")
const updatesList = document.getElementById("updatesList")
const toggleUpdatesBtn = document.getElementById("toggleUpdatesBtn")
const researchList = document.getElementById("researchList")
const projectsList = document.getElementById("projectsList")
const footerText = document.getElementById("footerText")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderUpdates()
  renderResearch()
  renderProjects()
  updateFooter()
  setupScrollListener()
  setupMobileNav()
})

// Mobile Navigation
function setupMobileNav() {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNavOverlay.classList.add("active")
  })

  closeBtn.addEventListener("click", closeMobileNav)

  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) {
      closeMobileNav()
    }
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav)
  })
}

function closeMobileNav() {
  mobileNavOverlay.classList.remove("active")
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
    `,
    )
    .join("")
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
          <a href="${project.link}" class="project-link">${project.linkText}</a>
          <p class="project-description">${project.description}</p>
        </div>
      </div>
    `,
    )
    .join("")
}

// Footer
function updateFooter() {
  const year = new Date().getFullYear()
  footerText.textContent = `${year} | ${heroContent.name}`
}

// Scroll to Top
function setupScrollListener() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible")
    } else {
      scrollTopBtn.classList.remove("visible")
    }
  })

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}
