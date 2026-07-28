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
function createSmallTable() {

    const tableDiv = document.getElementById("smallTable");

    let html = `
    <table>
        <tr>
            <th>Region</th>
            <th>C-DID/year</th>
        </tr>
    `;

    tableData.forEach(row => {

        html += `
        <tr>
            <td>${row.Region}</td>
            <td>${row.Amoxicillin.toFixed(6)}</td>
        </tr>
        `;

    });


    html += "</table>";

    tableDiv.innerHTML = html;

}


createSmallTable();
