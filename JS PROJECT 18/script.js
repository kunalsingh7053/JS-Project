let result = document.querySelector(".result");
let btn = document.querySelector("#gen");
let down = document.querySelector("#down");
let img = document.createElement("img");
img.className = "qrcode"; 
let url = document.querySelector("#input");
let size = document.querySelector("#size");

btn.addEventListener('click', function() {
    console.log(size.value);
    console.log(url.value);

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${url.value}`;
    result.appendChild(img);
});

down.addEventListener('click', function() {
    if (img.src) {
        let a = document.createElement('a');
        a.href = img.src;
        a.download = 'qrcode.png'; // You can change the filename here
        a.click();
    } else {
        alert("Please generate a QR code first.");
    }
});
