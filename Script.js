let protein = Number(localStorage.getItem("protein")) || 0;
let fiber = Number(localStorage.getItem("fiber")) || 0;
let plants = JSON.parse(localStorage.getItem("plants")) || [];

function updateScreen() {
    document.getElementById("proteinValue").textContent = protein + " / 90 g";
    document.getElementById("proteinBar").value = protein;

    document.getElementById("fiberValue").textContent = fiber + " / 30 g";
    document.getElementById("fiberBar").value = fiber;

    document.getElementById("plantCount").textContent =
        plants.length + " / 30 plante";

    const list = document.getElementById("plantList");
    list.innerHTML = "";

    plants.forEach(function(plant) {
        const li = document.createElement("li");
        li.textContent = "🌿 " + plant;
        list.appendChild(li);
    });

    localStorage.setItem("protein", protein);
    localStorage.setItem("fiber", fiber);
    localStorage.setItem("plants", JSON.stringify(plants));
}

function addProtein() {
    const value = Number(document.getElementById("proteinInput").value);

    if (value > 0) {
        protein += value;
        document.getElementById("proteinInput").value = "";
        updateScreen();
    }
}

function addFiber() {
    const value = Number(document.getElementById("fiberInput").value);

    if (value > 0) {
        fiber += value;
        document.getElementById("fiberInput").value = "";
        updateScreen();
    }
}

function addPlant() {
    const input = document.getElementById("plantInput");
    const plant = input.value.trim().toLowerCase();

    if (plant !== "" && !plants.includes(plant)) {
        plants.push(plant);
        input.value = "";
        updateScreen();
    }
}

updateScreen();
