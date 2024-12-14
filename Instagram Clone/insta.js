const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelectorAll(".one");
const iconBorder = document.querySelector(".icon2");
// const body = document.querySelector("body");
const clicklike = document.querySelectorAll(".like")
const clicklike2 = document.querySelectorAll(".likeclick");
const clicksave = document.querySelectorAll(".saves");
const clicksave2 = document.querySelectorAll(".saveclick");
const postImg = document.querySelectorAll (".post-box img");
const postVideo = document.querySelectorAll(".post-box video");

                                    // Search Bar

searchBar.style.display = "none";

searchBtn.forEach((one) => {
    one.addEventListener("click", () => {
        if(searchBar.style.display != "none") { 
        // searchBar.classList.add("backward");
            searchBar.style.display = "none";
            iconBorder.style.border = "none";
        }
        else {
            searchBar.style.display = "block";
            searchBar.classList.add("forward");
            iconBorder.style.border = "1px solid #fff";
            // searchBar.classList.remove("backward");
        }
    });
})

                                    // Normal Likes

clicklike2.forEach((likeclick) => {
    likeclick.style.display = "none";
});

clicklike.forEach((like, index) => {
    like.addEventListener("click", () => {
        const likeclick = clicklike2[index];
        if(likeclick.style.display != "none") {
            likeclick.style.display = "none";
        }
        else {
            likeclick.style.display = "block";
        }
    });
});

clicklike2.forEach((likeclick) => {
    likeclick.addEventListener("click", () => {
        if(likeclick.style.display != "none") {
            likeclick.style.display = "none";
        }
        else {
            likeclick.style.display = "block";
        }
    });
});
                                    // DoubleClick Image Likes

postImg.forEach((postImg, index) => {
    postImg.addEventListener("dblclick", () => {
        const likeclick = clicklike2[index];
        if(likeclick.style.display != "none") {
            likeclick.style.display = "none";
        }
        else {
            likeclick.style.display = "block";
        }
    });
});

                                    // DoubleClick Video Likes

// postVideo.forEach((postVideo, index) => {
//     postVideo.addEventListener("dblclick", () => {
//         const likeclick = clicklike2[index];
//         if(likeclick.style.display != "none") {
//             likeclick.style.display = "none";
//         }
//         else {
//             likeclick.style.display = "block";
//         }
//     });
// });

                                    // Save

clicksave2.forEach((saveclick) => {
    saveclick.style.display = "none";
});

clicksave.forEach((saves, index) => {
    saves.addEventListener("click", () => {
        const saveclick = clicksave2[index];
        if(saveclick.style.display != "none") {
            saveclick.style.display = "none";
        }
        else {
            saveclick.style.display = "block";
        }
    });
});

clicksave2.forEach((saveclick) => {
    saveclick.addEventListener("click", () => {
        if(saveclick.style.display != "none") {
            saveclick.style.display = "none";
        }
        else {
            saveclick.style.display = "block";
        }
    });
});
