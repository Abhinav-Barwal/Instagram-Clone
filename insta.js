const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelectorAll(".one");
const iconBorder2 = document.querySelector(".icon2");
const clicklike = document.querySelectorAll(".like")
const clicklike2 = document.querySelectorAll(".likeclick");
const clicklikenot = document.querySelectorAll(".likenot")
const clicklikenot2 = document.querySelectorAll(".likeclicknot");
const clicksave = document.querySelectorAll(".saves");
const clicksave2 = document.querySelectorAll(".saveclick");
const postImg = document.querySelectorAll (".post-box img");
const postVideo = document.querySelectorAll(".post-box video");
const mainHome = document.querySelectorAll(".main-home");

const notfiBar = document.querySelector(".notification-bar");
const notfiBtn = document.querySelectorAll(".two");
const iconBorder6 = document.querySelector(".icon6");

                                    // Search Bar

searchBar.style.display = "none";

searchBtn.forEach((one) => {
    one.addEventListener("click", () => {
        if(searchBar.style.display != "none") { 
        // searchBar.classList.add("backward");
            searchBar.style.display = "none";
            iconBorder2.style.border = "none";
        }
        else {
            searchBar.style.display = "block";
            searchBar.classList.add("forward");
            iconBorder2.style.border = "1px solid #fff";
            // searchBar.classList.remove("backward");
        }
    });
})

mainHome.forEach((mainHome) => {
    mainHome.addEventListener("click", () => {
        if(notfiBar.style.display != "none" || searchBar.style.display != "none") {
            notfiBar.style.display = "none";
            searchBar.style.display = "none"
            iconBorder2.style.border = "none";
            iconBorder6.style.border = "none";
        }
    });
})


                                    // Notification

notfiBar.style.display = "none";

mainHome.onclick = function () {
    console.log("button was clicked")
    if(notfiBar.style.display != "none") {
        notfiBar.style.display = "none";
        iconBorder6.style.border = "none";
    }
}

notfiBtn.forEach((two) => {
    two.addEventListener("click", () => {
        if(notfiBar.style.display != "none") {
        // searchBar.classList.add("backward");
            notfiBar.style.display = "none";
            iconBorder6.style.border = "none";
            console.log("buttonn was clicked")
        }
        
        else {
            notfiBar.style.display = "block";
            notfiBar.classList.add("forward");
            iconBorder6.style.border = "1px solid #fff";
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

                                    // Normal notfi - Likes

clicklikenot2.forEach((likeclicknot) => {
    likeclicknot.style.display = "none";
});

clicklikenot.forEach((likenot, index) => {
    likenot.addEventListener("click", () => {
        const likeclicknot = clicklikenot2[index];
        if(likeclicknot.style.display != "none") {
            likeclicknot.style.display = "none";
        }
        else {
            likeclicknot.style.display = "block";
        }
    });
});

clicklikenot2.forEach((likeclicknot) => {
    likeclicknot.addEventListener("click", () => {
        if(likeclicknot.style.display != "none") {
            likeclicknot.style.display = "none";
        }
        else {
            likeclicknot.style.display = "block";
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
