let gridContainer = document.querySelector(".grid-container");

(function initializeGrid() {
    for (let row = 0; row < 16; row++) {
        let gridRowContainer = document.createElement("div")
        for (let col = 0; col < 16; col++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", `${row}-${col}`);
            square.addEventListener("mouseover", () => {
                changeColor(`${row}-${col}`);
            });
            gridRowContainer.append(square);
        }
        gridContainer.appendChild(gridRowContainer);
    }
})();

function changeColor(id) {
    square = document.getElementById(id);
    square.classList.add("square-hover");
}