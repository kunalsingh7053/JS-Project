

 var arr = [
        {dp: "https://www.bollywoodhungama.com/wp-content/uploads/2022/08/34-Years-of-Salman-Khan-34-Records-set-by-Bhaijaan-that-makes-him-the-biggest-Sultan-at-the-India-box-office-6.jpg", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3t5IqpAck_gM0LvCTgmMnCTyStanAR1gthQ&s"},
        {dp: "https://sm.mashable.com/t/mashable_me/photo/default/shah-rukh-khan-mannat_qwwu.1248.jpg", story: "https://www.masala.com/cloud/2024/10/30/Shah-Rukh-Khan-birthday.png"},
        {dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqftOFhmbKU4wPBR0fFz4TQ7xv2tNMuSmAQ&s", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDGCno30_R8NC5OQgk4tvlBRUkzQxpbS-Og&s"},
        {dp: "https://variety.com/wp-content/uploads/2013/09/sushant-singh-rajput-in-shuddh-desi-romance-movie-3.jpg", story: "https://www.jagranimages.com/images/newimg/14062023/14_06_2023-sushant_singh_rajput_3rd_death_anniversary__23440994.webp"},
        {dp: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/02/kunal-khemu-in-golmaal-again-official-trailer-2017-1549446644.jpg", story: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/146398-dvezkmxvfr-1598060796.jpeg"}
    ];

    var stor = document.querySelector('#storiyan');
    var clutter = "";

    arr.forEach(function (e, idx) {
        clutter += `<div class="story">
            <img id="${idx}" src="${e.dp}" alt="">
        </div>`;
    });

    stor.innerHTML = clutter;

    stor.addEventListener("click", function (dets) {
        if (dets.target.tagName === "IMG") {
            const idx = dets.target.id;
            var fullScreen = document.querySelector("#full-screen");
            fullScreen.style.backgroundImage = `url(${arr[idx].story})`;
            fullScreen.style.display = "block";
        }
        setTimeout(function(){
            fullScreen.style.display = "none";

        },3000)
        
    });
    

   
