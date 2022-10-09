const button = document.querySelector(".button_main");
const image = document.querySelector(".img");
const url = "https://api.waifu.pics/sfw/cuddle";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.url;
    } catch (error) {
        console.log(error);
    }
}

button,addEventListener("click", () => {
    fetchHandler();
})