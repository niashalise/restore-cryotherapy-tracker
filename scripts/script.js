let hamburg = document.getElementById("hamburg");
let nav = document.getElementById("nav")

hamburg.addEventListener("onclick", () => {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})