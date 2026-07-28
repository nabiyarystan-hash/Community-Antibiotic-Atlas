const select = document.getElementById("antibioticSelect");
const frame = document.getElementById("mapFrame");

function loadMap(index) {

    const antibiotic = antibiotics[index];

    frame.src = antibiotic.map;
}

antibiotics.forEach((item, index) => {

    const option = document.createElement("option");

    option.value = index;

    option.textContent = item.name;

    select.appendChild(option);

});

select.addEventListener("change", function () {

    loadMap(this.value);

});

loadMap(0);
