const body = document.body;
const root = document.documentElement;
const headerInner = document.querySelector(".header-inner");
const languageToggle = document.getElementById("languageToggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-link");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const serviceButtons = document.querySelectorAll(".service-chip");
const serviceBadge = document.getElementById("serviceBadge");
const serviceKicker = document.getElementById("serviceKicker");
const serviceTitle = document.getElementById("serviceTitle");
const serviceDescription = document.getElementById("serviceDescription");
const serviceList = document.getElementById("serviceList");
const metricOneLabel = document.getElementById("metricOneLabel");
const metricOneValue = document.getElementById("metricOneValue");
const metricTwoLabel = document.getElementById("metricTwoLabel");
const metricTwoValue = document.getElementById("metricTwoValue");
const metricThreeLabel = document.getElementById("metricThreeLabel");
const metricThreeValue = document.getElementById("metricThreeValue");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const visualCore = document.querySelector(".visual-core");
const coreSphere = document.querySelector(".core-sphere");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileNavQuery = window.matchMedia("(max-width: 860px)");
let navIndicator = null;
let navAnchor = null;

if (mainNav) {
  navIndicator = document.createElement("span");
  navIndicator.className = "nav-indicator";
  navIndicator.setAttribute("aria-hidden", "true");
  mainNav.prepend(navIndicator);
}

if (mainNav && headerInner) {
  navAnchor = document.createComment("main-nav-anchor");
  headerInner.insertBefore(navAnchor, mainNav);
}

const services = {
  ai: {
    badge: "AI",
    kicker: {
      ar: "AI Systems",
      en: "AI Systems",
    },
    title: {
      ar: "بنية أذكى لاتخاذ القرار",
      en: "Smarter infrastructure for faster decisions",
    },
    description: {
      ar: "نبني طبقات ذكاء اصطناعي وأتمتة تتكامل مع أعمالك لتقليل الوقت الضائع ورفع جودة القرارات اليومية.",
      en: "We build AI and automation layers that integrate with your workflows to reduce wasted time and improve daily decision quality.",
    },
    points: {
      ar: [
        "مساعدات ذكية للرد، التصنيف، والتوصيات.",
        "لوحات متابعة تربط البيانات بالرؤى التنفيذية.",
        "أتمتة للعمليات المتكررة دون تعقيد تشغيلي.",
      ],
      en: [
        "Intelligent assistants for reply flows, classification, and recommendations.",
        "Operational dashboards that connect data to execution insight.",
        "Automation for repetitive processes without operational sprawl.",
      ],
    },
    metrics: {
      one: { label: { ar: "خفض الوقت اليدوي", en: "Manual time reduced" }, value: "42%" },
      two: { label: { ar: "سرعة الاستجابة", en: "Response acceleration" }, value: "3.1x" },
      three: { label: { ar: "تكاملات ممكنة", en: "Possible integrations" }, value: "20+" },
    },
  },
  web: {
    badge: "WEB",
    kicker: {
      ar: "Product Interfaces",
      en: "Product Interfaces",
    },
    title: {
      ar: "منصات ويب سريعة بتجربة استخدام راقية",
      en: "Fast web platforms with refined user experience",
    },
    description: {
      ar: "من صفحات الهبوط إلى لوحات التحكم، نطوّر واجهات قوية بصريًا وسهلة الاستخدام على الهاتف والكمبيوتر.",
      en: "From landing pages to dashboards, we develop interfaces that feel premium while remaining highly usable on mobile and desktop.",
    },
    points: {
      ar: [
        "تصميم متجاوب بهوية بصرية مميزة.",
        "بنية مهيأة للإضافة والتوسعة لاحقًا.",
        "تحسينات أداء وتهيئة لتجربة سلسة.",
      ],
      en: [
        "Responsive design with a distinct visual identity.",
        "A frontend foundation prepared for future expansion.",
        "Performance tuning and smooth interaction details.",
      ],
    },
    metrics: {
      one: { label: { ar: "سرعة تحميل رئيسية", en: "Primary load time" }, value: "1.8s" },
      two: { label: { ar: "دعم الأجهزة", en: "Device coverage" }, value: "100%" },
      three: { label: { ar: "أنظمة تصميم", en: "Reusable design systems" }, value: "12+" },
    },
  },
  cloud: {
    badge: "CLD",
    kicker: {
      ar: "Cloud Foundations",
      en: "Cloud Foundations",
    },
    title: {
      ar: "بنية موثوقة للنمو والتوسع",
      en: "Reliable cloud architecture built for growth",
    },
    description: {
      ar: "نجهز التطبيقات والبنية الخلفية للتوسع الآمن مع مراقبة أوضح وتدفقات نشر أكثر ثباتًا.",
      en: "We prepare apps and backend foundations for secure scaling, better observability, and more stable deployment flows.",
    },
    points: {
      ar: [
        "تصميم بيئات تشغيل مرنة ومراقبة مستمرة.",
        "تحسين النشر، النسخ الاحتياطي، والتعافي.",
        "ضبط الأمان والسياسات الأساسية بوضوح.",
      ],
      en: [
        "Flexible environments with continuous monitoring.",
        "Improved deployment, backup, and recovery paths.",
        "Clear security baselines and infrastructure guardrails.",
      ],
    },
    metrics: {
      one: { label: { ar: "جاهزية التوسع", en: "Scale readiness" }, value: "15x" },
      two: { label: { ar: "وفورات تشغيل", en: "Ops savings" }, value: "28%" },
      three: { label: { ar: "توافر الخدمات", en: "Service uptime" }, value: "99.98%" },
    },
  },
  brand: {
    badge: "ID",
    kicker: {
      ar: "Visual Systems",
      en: "Visual Systems",
    },
    title: {
      ar: "هوية رقمية تليق بالشركات التقنية الحديثة",
      en: "Digital branding suited for modern technology companies",
    },
    description: {
      ar: "نطوّر لغة بصرية تعكس الثقة والتقدم، ثم نترجمها إلى واجهات وعناصر تسويقية قابلة للاستخدام الحقيقي.",
      en: "We craft a visual language that signals trust and progress, then translate it into interfaces and marketing assets that are ready for real use.",
    },
    points: {
      ar: [
        "هوية بصرية رقمية مع قواعد استخدام واضحة.",
        "مكونات واجهة متناسقة للمنتج والمحتوى.",
        "أسلوب بصري يمكن توسيعه عبر المنصات.",
      ],
      en: [
        "A digital identity with practical usage guidelines.",
        "Consistent interface components across product and content.",
        "A visual style that scales cleanly across platforms.",
      ],
    },
    metrics: {
      one: { label: { ar: "اتساق بصري", en: "Visual consistency" }, value: "94%" },
      two: { label: { ar: "أصول جاهزة", en: "Ready-to-use assets" }, value: "60+" },
      three: { label: { ar: "وضوح العلامة", en: "Brand clarity" }, value: "2.4x" },
    },
  },
};

let currentLang = "ar";
let activeService = "ai";

function setLanguage(lang) {
  currentLang = lang;
  body.dataset.lang = lang;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  languageToggle.textContent = lang === "ar" ? "EN" : "AR";
  languageToggle.setAttribute(
    "aria-label",
    lang === "ar" ? "Switch to English" : "التحويل إلى العربية",
  );
  renderService(activeService);
  if (formStatus.textContent.trim()) {
    formStatus.textContent =
      lang === "ar"
        ? "تم استلام الطلب المبدئي. سنعود إليك بخطة أولية قريبًا."
        : "Your request has been captured. We will get back to you with an initial plan shortly.";
  }
  requestAnimationFrame(updateNavIndicator);
}

function renderService(key) {
  const service = services[key];
  serviceBadge.textContent = service.badge;
  serviceKicker.textContent = service.kicker[currentLang];
  serviceTitle.textContent = service.title[currentLang];
  serviceDescription.textContent = service.description[currentLang];

  serviceList.innerHTML = "";
  service.points[currentLang].forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    serviceList.appendChild(item);
  });

  metricOneLabel.textContent = service.metrics.one.label[currentLang];
  metricOneValue.textContent = service.metrics.one.value;
  metricTwoLabel.textContent = service.metrics.two.label[currentLang];
  metricTwoValue.textContent = service.metrics.two.value;
  metricThreeLabel.textContent = service.metrics.three.label[currentLang];
  metricThreeValue.textContent = service.metrics.three.value;
}

function updateNavIndicator() {
  if (!mainNav || !navIndicator) {
    return;
  }

  const activeLink = mainNav.querySelector(".nav-link.is-active") || navLinks[0];
  if (!activeLink) {
    mainNav.classList.remove("has-indicator");
    return;
  }

  navIndicator.style.width = `${activeLink.offsetWidth}px`;
  navIndicator.style.height = `${activeLink.offsetHeight}px`;
  navIndicator.style.transform = `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`;
  mainNav.classList.add("has-indicator");
}

function syncMobileNavPlacement() {
  if (!mainNav || !navAnchor || !headerInner) {
    return;
  }

  if (mobileNavQuery.matches) {
    if (mainNav.parentElement !== document.body) {
      document.body.append(mainNav);
    }
    body.classList.add("has-mobile-nav");
  } else {
    if (mainNav.parentElement !== headerInner) {
      navAnchor.after(mainNav);
    }
    body.classList.remove("has-mobile-nav");
  }

  requestAnimationFrame(updateNavIndicator);
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((candidate) => {
      candidate.classList.toggle("is-active", candidate === link);
    });
    requestAnimationFrame(updateNavIndicator);
  });
});

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeService = button.dataset.service;
    serviceButtons.forEach((candidate) => {
      const isActive = candidate === button;
      candidate.classList.toggle("is-active", isActive);
      candidate.setAttribute("aria-pressed", String(isActive));
    });
    renderService(activeService);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    counter.textContent = `${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
      requestAnimationFrame(updateNavIndicator);
    });
  },
  { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 },
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent =
    currentLang === "ar"
      ? "تم استلام الطلب المبدئي. سنعود إليك بخطة أولية قريبًا."
      : "Your request has been captured. We will get back to you with an initial plan shortly.";
  contactForm.reset();
});

if (visualCore && coreSphere && !prefersReducedMotion.matches) {
  const resetSpherePointer = () => {
    coreSphere.style.setProperty("--pointer-x", "35%");
    coreSphere.style.setProperty("--pointer-y", "30%");
  };

  visualCore.addEventListener("pointermove", (event) => {
    const rect = visualCore.getBoundingClientRect();
    const pointerX = ((event.clientX - rect.left) / rect.width) * 100;
    const pointerY = ((event.clientY - rect.top) / rect.height) * 100;

    coreSphere.style.setProperty("--pointer-x", `${Math.max(15, Math.min(pointerX, 85)).toFixed(1)}%`);
    coreSphere.style.setProperty("--pointer-y", `${Math.max(12, Math.min(pointerY, 88)).toFixed(1)}%`);
  });

  coreSphere.addEventListener("pointerenter", () => {
    visualCore.classList.add("is-sphere-active");
  });

  coreSphere.addEventListener("pointerleave", () => {
    visualCore.classList.remove("is-sphere-active");
    resetSpherePointer();
  });

  visualCore.addEventListener("pointerleave", () => {
    visualCore.classList.remove("is-sphere-active");
    resetSpherePointer();
  });
}

window.addEventListener("resize", () => {
  syncMobileNavPlacement();
  updateNavIndicator();
});
window.addEventListener("load", () => {
  syncMobileNavPlacement();
  updateNavIndicator();
});
mobileNavQuery.addEventListener("change", syncMobileNavPlacement);

renderService(activeService);
syncMobileNavPlacement();
setLanguage(currentLang);
updateNavIndicator();
