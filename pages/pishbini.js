(function () {
  const container = document.querySelector('.bg-balls');
  if (!container) return;

  const COUNT = 30; // تعداد نقاط — زیاد ولی خیلی کوچک، اذیت نمی‌کنه

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('span');
    el.className = 'ball';

    // اندازه خیلی کوچک
    const size = rand(20, 20) + 'px';

    // رنگ‌های سفید تا طوسی
    const grey = Math.floor(rand(180, 255));
    const color = `rgba(${grey}, ${grey}, ${grey}, 0.9)`;

    el.style.setProperty('--size', size);
    el.style.setProperty('--color', color);
    el.style.left = rand(0, 100) + '%';
    el.style.top = rand(0, 100) + '%';
    el.style.setProperty('--duration', rand(8, 20) + 's');
    el.style.setProperty('--delay', rand(-10, 0) + 's');

    container.appendChild(el);
  }
})();
