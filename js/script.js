document.addEventListener("DOMContentLoaded", function () {
  const laptop = document.querySelector(".laptop");
  const lid = laptop.querySelector(".lid");
  const screen = laptop.querySelector(".screen");
  const base = laptop.querySelector(".base");
  const laptopContainer = document.querySelector(".laptop-container");

  alert(
    "Double-click your laptop!\nYou can also close your laptop by double-clicking it!\nThis site is built based on 2560x1440, and works best."
  );

  alert(
    "If text input doesn't work, touch the size of the window. You can also open the developer console by pressing F12.\nI don't know why, but this is what happens when I put it on the server."
  );
  function handlerLaptopOpen() {
    if (lid.style.transform === "rotateX(0deg)") {
      laptopContainer.classList.add("laptop-container");
      laptop.classList.add("laptop");
      document.body.style.display = "flex";
      screen.classList.remove("fullscreen");
      base.classList.remove("hidden");

      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "center";

      setTimeout(() => {
        lid.style.transform = "rotateX(-120deg)";
      }, 50);
    } else {
      lid.style.transform = "rotateX(0deg)";

      setTimeout(() => {
        base.classList.add("hidden");
        screen.classList.add("fullscreen");

        laptopContainer.classList.remove("laptop-container");
        laptop.classList.remove("laptop");
        document.body.style.display = "block";
      }, 1000);
    }
  }
  function addDesktopIcons() {
    const iconContainer = document.createElement("div");
    iconContainer.className = "desktop-icons";

    const icons = [
      { name: "My PC", icon: "🖥️" },
      { name: "Recycle Bin", icon: "🗑️" },
      { name: "Settings", icon: "⚙️" },
    ];

    icons.forEach((item) => {
      const icon = document.createElement("div");
      icon.className = "desktop-icon";
      icon.innerHTML = `
      <div class="icon">${item.icon}</div>
      <div class="icon-name">${item.name}</div>
    `;
      iconContainer.appendChild(icon);
    });

    screen.appendChild(iconContainer);
  }

  addDesktopIcons();
  laptop.addEventListener("dblclick", handlerLaptopOpen);
});
