// oneko.js: https://github.com/adryd325/oneko.js (full-screen + click-to-wake)

(function oneko() {
  const STORAGE_KEY = "nekoCatEnabled";
  const isMobile = () => window.innerWidth < 768;

  function isEnabled() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === "true";
    return false;
  }

  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  const spriteSets = {
    idle:        [[-3, -3]],
    alert:       [[-7, -3]],
    scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
    scratchWallN:[[ 0,  0], [ 0, -1]],
    scratchWallS:[[-7, -1], [-6, -2]],
    scratchWallE:[[-2, -2], [-2, -3]],
    scratchWallW:[[-4,  0], [-4, -1]],
    tired:       [[-3, -2]],
    sleeping:    [[-2,  0], [-2, -1]],
    N:  [[-1, -2], [-1, -3]],
    NE: [[ 0, -2], [ 0, -3]],
    E:  [[-3,  0], [-3, -1]],
    SE: [[-5, -1], [-5, -2]],
    S:  [[-6, -3], [-7, -2]],
    SW: [[-5, -3], [-6, -1]],
    W:  [[-4, -2], [-4, -3]],
    NW: [[-1,  0], [-1, -1]],
  };

  const nekoSpeed = 10;
  const IDLE_THRESHOLD = 50; // 50 × 100ms = 5s

  let nekoEl = null;
  let bubbleEl = null;
  let bubbleTimer = null;
  let animFrameId = null;
  let lastFrameTimestamp;

  let nekoPosX = 0, nekoPosY = 0;
  let mousePosX = 0, mousePosY = 0;
  let idleTime = 0;
  let isAwake = false;
  let frameCount = 0;
  let idleAnimation = "sleeping";
  let idleAnimationFrame = 8;
  let alertCountdown = 0;
  let mouseMoveListener = null;

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function frame() {
    frameCount += 1;
    if (isAwake) idleTime += 1;

    if (!isAwake || idleTime >= IDLE_THRESHOLD) {
      // Fall asleep in place
      if (idleAnimation !== "sleeping") {
        idleAnimation = "sleeping";
        idleAnimationFrame = 0;
        isAwake = false;
        nekoEl.style.cursor = "pointer";
      }
      setSprite(idleAnimationFrame < 8 ? "tired" : "sleeping", Math.floor(idleAnimationFrame / 4));
      idleAnimationFrame += 1;
      return;
    }

    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 16) {
      if (alertCountdown > 0) {
        setSprite("alert", 0);
        alertCountdown -= 1;
      } else {
        setSprite("idle", 0);
      }
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (alertCountdown > 0) {
      setSprite("alert", 0);
      alertCountdown -= 1;
      return;
    }

    let direction = "";
    direction += diffY / distance > 0.5  ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5  ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;
    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth  - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top  = `${nekoPosY - 16}px`;
  }

  function onAnimationFrame(timestamp) {
    if (!nekoEl || !nekoEl.isConnected) return;
    if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    animFrameId = window.requestAnimationFrame(onAnimationFrame);
  }

  function showBubble() {
    if (!bubbleEl || !nekoEl) return;
    const rect = nekoEl.getBoundingClientRect();
    bubbleEl.style.left = `${rect.left + rect.width / 2}px`;
    bubbleEl.style.top  = `${rect.top - 36}px`;
    bubbleEl.style.transform = "translateX(-50%) translateY(4px)";
    // force reflow then show
    bubbleEl.classList.remove("visible");
    void bubbleEl.offsetWidth;
    bubbleEl.style.transform = "translateX(-50%) translateY(4px)";
    bubbleEl.classList.add("visible");
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubbleEl && bubbleEl.classList.remove("visible"), 2000);
  }

  function wakeUp() {
    showBubble();
    isAwake = true;
    idleTime = 0;
    idleAnimation = null;
    idleAnimationFrame = 0;
    alertCountdown = 5;
    nekoEl.style.cursor = "default";
  }

  function startNeko() {
    if (isReducedMotion) return;

    let nekoFile = "./oneko.gif";
    const curScript = document.currentScript;
    if (curScript && curScript.dataset.cat) nekoFile = curScript.dataset.cat;

    // Start left of the logo in the navbar
    const logo = document.querySelector(".logo");
    const header = document.querySelector(".header") || document.querySelector("header");
    if (logo && header) {
      const lr = logo.getBoundingClientRect();
      const hr = header.getBoundingClientRect();
      nekoPosX = lr.left - 20;
      nekoPosY = hr.top + hr.height / 2;
    } else {
      nekoPosX = 32;
      nekoPosY = 32;
    }
    mousePosX = nekoPosX;
    mousePosY = nekoPosY;
    idleTime = 0;
    isAwake = false;
    frameCount = 0;
    idleAnimation = "sleeping";
    idleAnimationFrame = 8;
    alertCountdown = 0;
    lastFrameTimestamp = undefined;

    nekoEl = document.createElement("div");
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.cssText = `
      width:32px;height:32px;position:fixed;
      image-rendering:pixelated;z-index:2147483647;
      left:${nekoPosX - 16}px;top:${nekoPosY - 16}px;
      background-image:url(${nekoFile});cursor:pointer;
    `;
    const s = spriteSets.sleeping[0];
    nekoEl.style.backgroundPosition = `${s[0] * 32}px ${s[1] * 32}px`;

    document.body.appendChild(nekoEl);

    bubbleEl = document.createElement("div");
    bubbleEl.id = "kiyo-bubble";
    bubbleEl.textContent = "Hi! I am Kiyo";
    document.body.appendChild(bubbleEl);

    nekoEl.addEventListener("click", wakeUp);

    mouseMoveListener = (e) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
      if (isAwake) idleTime = 0;
    };
    document.addEventListener("mousemove", mouseMoveListener);

    animFrameId = window.requestAnimationFrame(onAnimationFrame);
  }

  function stopNeko() {
    if (animFrameId) { window.cancelAnimationFrame(animFrameId); animFrameId = null; }
    if (nekoEl) { nekoEl.remove(); nekoEl = null; }
    if (bubbleEl) { bubbleEl.remove(); bubbleEl = null; }
    if (bubbleTimer) { clearTimeout(bubbleTimer); bubbleTimer = null; }
    if (mouseMoveListener) { document.removeEventListener("mousemove", mouseMoveListener); mouseMoveListener = null; }
  }

  function updateToggleBtn(enabled) {
    const btn = document.getElementById("nekoToggleBtn");
    if (btn) btn.classList.toggle("neko-active", enabled);
  }

  function setup() {
    const btn = document.getElementById("nekoToggleBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = !isEnabled();
        localStorage.setItem(STORAGE_KEY, String(next));
        updateToggleBtn(next);
        if (next) startNeko(); else stopNeko();
      });
    }
    const enabled = isEnabled();
    updateToggleBtn(enabled);
    if (enabled) startNeko();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
