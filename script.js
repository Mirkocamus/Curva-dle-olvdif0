script.js;
const days = ["Primer Día", "Segundo Día", "Tercer Día", "Cuarto Día", "Quinto Día"];
let currentDayIndex = 0;

document.getElementById("nextDayBtn").addEventListener("click", function() {
    if (currentDayIndex < days.length) {
        createDayCard(days[currentDayIndex]);
        currentDayIndex++;
    } else {
        alert("Has alcanzado el último día de la curva del olvido.");
    }
});

function createDayCard(day) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "dayCard";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = day;
    cardContainer.appendChild(cardTitle);

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Escribe el tema que deseas repasar...";
    cardContainer.appendChild(textArea);

    document.getElementById("daysContainer").appendChild(cardContainer);
}
