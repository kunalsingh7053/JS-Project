window.onload = function () {
  
  const searchbar = document.querySelector('.searchbarpng');
  const windowIcon = document.querySelector('.windowpng');
  const startmenu = document.querySelector('.startmenu');

  
  const lang = document.querySelector('.lang');
  const langmenu = document.querySelector('.langmenu');

  
  const arrow = document.querySelector('.arrow');
  const arrowmenu = document.querySelector('.arrowmenu');

  
  const video = document.querySelector('video');
  const foldermenu = document.querySelector('.foldermenu');

  
  const timeElement = document.querySelector('.time');
  const dateElement = document.querySelector('.date');

  
  const taskbar = document.querySelector('.taskbar');

  
  const wallpaper = document.querySelector('.wallpaper');
  const wallpaperdiv = document.querySelector('.wallpaperdiv');
  const desktop = document.body;

  let flag = false;

  
  function toggleStartMenu() {
    flag = !flag;
    if (flag) {
      startmenu.style.display = "block";
      startmenu.style.bottom = "52px";
      searchbar.style.backgroundColor = "#0651DE";
    } else {
      startmenu.style.bottom = "-100%";
      setTimeout(() => {
        startmenu.style.display = "none";
      }, 300);
      searchbar.style.backgroundColor = "#dacbcb";
    }
  }

  
  searchbar.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleStartMenu();
  });

  windowIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleStartMenu();
  });

  lang.addEventListener('click', function (e) {
    e.stopPropagation();
    langmenu.style.bottom = (langmenu.style.bottom === "52px") ? "-100%" : "52px";
  });

  arrow.addEventListener('click', function (e) {
    e.stopPropagation();
    arrowmenu.style.bottom = (arrowmenu.style.bottom === "52px") ? "-100%" : "52px";
  });

  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}`;
    dateElement.textContent = `${day}-${month}-${year}`;
  }

  updateClock();
  setInterval(updateClock, 50000);

  
  video.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    foldermenu.style.display = "flex";
    foldermenu.style.left = `${e.clientX}px`;
    foldermenu.style.top = `${e.clientY}px`;
  });

  
  const listwallpaper = document.querySelector('#listwallpaper');
  listwallpaper.addEventListener('click', function (e) {
    e.stopPropagation();
    wallpaper.classList.toggle("active");
  });
console.log(wallpaperdiv);

  
  console.log(document.querySelectorAll('.wallpaperimg'));
  wallpaperdiv.addEventListener('click', function (e) {
    console.log("salfjljaf");
    
    if (e.target && e.target.classList.contains('wallpaperimg')) {
      console.log("Image clicked:", e.target.src);
      const imgURL = e.target.src;
      desktop.style.backgroundImage = `url('${imgURL}')`;
      desktop.style.backgroundSize = 'cover';
      desktop.style.backgroundPosition = 'center';
          
    video.style.opacity = "0"; 

      localStorage.setItem('wallpaper', imgURL);
    }
  });

  
  document.addEventListener('click', function () {
    langmenu.style.bottom = "-100%";
    arrowmenu.style.bottom = "-100%";
    startmenu.style.bottom = "-100%";
    setTimeout(() => {
      startmenu.style.display = "none";
    }, 300);
    searchbar.style.backgroundColor = "#dacbcb";
    wallpaper.classList.remove("active");
    foldermenu.style.display = "none";
  });

let darkmode = document.querySelector('#darkmode');
darkmode.addEventListener('click',mode)
  function mode() {
  document.body.classList.toggle("dark-mode");
  taskbar.classList.toggle("dark-mode");
  foldermenu.classList.toggle("dark-mode");
  wallpaper.classList.toggle("dark-mode");

  
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

  
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    taskbar.classList.add("dark-mode");
    foldermenu.classList.add("dark-mode");
    wallpaper.classList.add("dark-mode")
  }

  
  const savedWallpaper = localStorage.getItem('wallpaper');
  if (savedWallpaper) {
    desktop.style.backgroundImage = `url('${savedWallpaper}')`;
    desktop.style.backgroundSize = 'cover';
    desktop.style.backgroundPosition = 'center';
  }
const resetBtn = document.querySelector('.resetbtn');
resetBtn.addEventListener('click', Resetwallpaper);

  function Resetwallpaper(e) {
    e.preventDefault();
    
  
  document.body.style.backgroundImage = "none";

  
  video.style.opacity = "1"

  
  localStorage.removeItem("wallpaper");
  localStorage.removeItem("videoHidden");
}
let neww = document.querySelector('#new');
let folder = document.querySelector('.folder');

neww.addEventListener('click', function (e) {
    e.preventDefault();

    
    const folderDiv1 = document.createElement('div');
    const folderDiv2 = document.createElement('div');
      
    
    const img = document.createElement('img');
    img.src = 'folder.png';
    img.alt = 'folder';

    

    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = 'New Folder';
    nameInput.className = 'rename-input';

    
    folderDiv1.appendChild(img);
    folderDiv2.appendChild(nameInput);
    folder.appendChild(folderDiv1);
    folder.appendChild(folderDiv2);

    
    nameInput.focus();
    nameInput.select();

    
    nameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            finalizeRename();
        }
    });

    nameInput.addEventListener('blur', finalizeRename);

    function finalizeRename() {
        const h4 = document.createElement('h4');
        h4.textContent = nameInput.value.trim() || 'New Folder';
        folderDiv2.replaceChild(h4, nameInput);
    }
});


};
