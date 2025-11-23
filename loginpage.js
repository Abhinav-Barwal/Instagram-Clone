const usrname = document.getElementById("detail")
const pass = document.getElementById("password")
const loginbtn = document.querySelector(".login")

loginbtn.addEventListener("click", (event) => {
    console.log("button was clicked")
    event.preventDefault();
    const usrnameValue = usrname.value;
    const passValue = pass.value;

    if (usrnameValue === "" || passValue === "") {
        return;
    }

    if ((usrnameValue === "8894853644" || usrnameValue === "abhibarwal7321@gmail.com" || usrnameValue === "barwal_sahbb") && passValue === "Abhinav") {
        window.location.assign("index.html")
    }
    else {
        alert("Sorry, your password was incorrect. Please double-check your password.");
    }

});