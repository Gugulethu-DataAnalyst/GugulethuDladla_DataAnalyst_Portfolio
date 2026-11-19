document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // 2. Project Category Filter (Main Page)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          card.style.display = filter === "all" || filter === category ? "flex" : "none";
        });
      });
    });
  }

  // 3. Copy Email Button (Main Page)
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("gugulethudladla824@gmail.com").then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      });
    });
  }

  // 4. Copy Code / SQL Query Buttons (Project Pages)
  const copyCodeBtns = document.querySelectorAll(".copy-code-btn");
  copyCodeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-window").querySelector("pre");
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        setTimeout(() => {
          btn.innerText = originalText;
        }, 2000);
      });
    });
  });

  // 5. Ambient Mesh Wave Animation (Hero Canvas)
  const canvas = document.getElementById("waveCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height, phase = 0;

    function resizeCanvas() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function drawWaves() {
      ctx.clearRect(0, 0, width, height);
      const lines = 18;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const progress = i / lines;
        ctx.strokeStyle =
          i % 2 === 0
            ? `rgba(92, 225, 230, ${0.08 + progress * 0.18})`
            : `rgba(147, 51, 234, ${0.08 + progress * 0.22})`;
        ctx.lineWidth = 1.2;

        for (let x = 0; x <= width; x += 8) {
          const y =
            height * 0.52 +
            Math.sin(x * 0.012 + phase + i * 0.25) * (35 + i * 2.5) +
            Math.cos(x * 0.006 - phase * 0.7) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      phase += 0.018;
      requestAnimationFrame(drawWaves);
    }

    drawWaves();
  }
});