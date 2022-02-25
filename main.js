const innerContainer = document.querySelector(".inner-container");

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    document.addEventListener("click", e => {
        if (e.target.id === "container")
            nameContainer.classList.remove("hover");
    })
    
    innerContainer.addEventListener("click", () => {
        nameContainer.classList.add("hover");
        console.log("dwqwd");
    });
}