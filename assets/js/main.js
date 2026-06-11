// Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Copy button demo
  document.querySelector('.copy-btn')?.addEventListener('click', function() {
    this.textContent = 'COPIED!';
    this.style.color = 'var(--green)';
    this.style.borderColor = 'var(--green)';
    setTimeout(() => {
      this.textContent = 'COPY';
      this.style.color = '';
      this.style.borderColor = '';
    }, 1500);
  });

  // Typewriter for password display
  const passwords = ['R!8kL#4zW@7mP', 'A#7Lm@9QxP2k', 'T#7Lp2@Qm9Kz', 'GhostHunter#77', 'Jimmy@2026!Zx'];
  let pwIdx = 0;
  const pwDisplay = document.querySelector('.password-display span');

  function typePassword(pw) {
    let i = 0;
    pwDisplay.textContent = '';
    const interval = setInterval(() => {
      pwDisplay.textContent += pw[i];
      i++;
      if (i >= pw.length) clearInterval(interval);
    }, 60);
  }

  setInterval(() => {
    pwIdx = (pwIdx + 1) % passwords.length;
    typePassword(passwords[pwIdx]);
  }, 3000);
