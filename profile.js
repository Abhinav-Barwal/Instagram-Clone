const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelectorAll(".one");
const iconBorder2 = document.querySelector(".icon2");
const tabs = document.querySelectorAll(".tab")

const notfiBar = document.querySelector(".notification-bar");
const notfiBtn = document.querySelectorAll(".two");
const mainHome = document.querySelectorAll(".main-home")
const iconBorder6 = document.querySelector(".icon6");
const clicklike = document.querySelectorAll(".like")
const clicklike2 = document.querySelectorAll(".likeclick");

                                    // Search Bar

searchBar.style.display = "none";

searchBtn.forEach((one) => {
    one.addEventListener("click", () => {
        if(searchBar.style.display != "none") {
            console.log("button was clicked")
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

                                    // POST, REELS, SAVED, TAGGED Tabs

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab =>
            tab.classList.remove('active'));
            tab.classList.add('active');
    });
});

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