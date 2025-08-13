// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Download/Print as PDF (uses browser print to save as PDF)
document.getElementById('printBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.print();
});

// Simple dark/light toggle (persists in localStorage)
const btn = document.getElementById('themeToggle');
const applyTheme = (mode) => {
  if (mode === 'light') {
    document.documentElement.style.setProperty('--bg', '#f6f7fb');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--text', '#0b1020');
    document.documentElement.style.setProperty('--muted', '#404b67');
    document.documentElement.style.setProperty('--border', '#d9e1f0');
    document.body.style.background =
      'radial-gradient(1200px 600px at 20% -10%, rgba(34,211,238,0.10), transparent 50%), #f6f7fb';
  } else {
    // back to defaults by reloading CSS variables from :root (simplest)
    location.reload();
  }
};

btn.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') applyTheme('light');
})();
