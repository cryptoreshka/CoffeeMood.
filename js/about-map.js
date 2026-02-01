const cafes = [
    {
        name: "Coffee Like",
        address: "Москва, ул. Тверская, 17",
        map: "https://yandex.ru/map-widget/v1/?text=Москва%20ул.%20Тверская%2017"
    },
    {
        name: "Double B Coffee",
        address: "Москва, Покровка, 25",
        map: "https://yandex.ru/map-widget/v1/?text=Москва%20Покровка%2025"
    },
    {
        name: "Surf Coffee",
        address: "Москва, Мясницкая, 13",
        map: "https://yandex.ru/map-widget/v1/?text=Москва%20Мясницкая%2013"
    },
    {
        name: "Skuratov Coffee",
        address: "Москва, Большая Никитская, 12",
        map: "https://yandex.ru/map-widget/v1/?text=Москва%20Большая%20Никитская%2012"
    }
];

const btn = document.getElementById("openMap");
const mapWrapper = document.getElementById("mapWrapper");
const mapFrame = document.getElementById("mapFrame");
const addressText = document.getElementById("address");

btn.addEventListener("click", () => {
    const cafe = cafes[Math.floor(Math.random() * cafes.length)];

    addressText.textContent = cafe.address;
    mapFrame.src = cafe.map;

    mapWrapper.classList.add("active");
});
