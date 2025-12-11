const container = document.querySelector(".bg-balls");
for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "ball";

    const size = Math.random() * 80 + 80;
    b.style.width = size + "px";
    b.style.height = size + "px";

    b.style.left = Math.random() * 100 + "vw";
    b.style.top = Math.random() * 100 + "vh";

    b.style.animationDuration = Math.random() * 8 + 10 + "s";
    b.style.opacity = (Math.random() * 0.3 + 0.2);

    container.appendChild(b);
}