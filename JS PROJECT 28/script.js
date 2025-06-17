const btn = document.querySelector("#checkbox");

// 1️⃣ When the page loads, check if dark mode was previously selected
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");  // Apply dark mode if saved
    btn.checked = true;  // Set the toggle switch to "on"
      
}
// 2️⃣ Listen for toggle changes

btn.addEventListener('change',function(){
    if(btn.checked)
    {    
        document.body.classList.add("darkmode");
        localStorage.setItem("theme", "dark"); // save preference
    }
    else{
        document.body.classList.remove("darkmode");
     localStorage.setItem("theme", "light"); // save preference

    }
})