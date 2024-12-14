const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelectorAll(".one");
const iconBorder = document.querySelector(".icon2");

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