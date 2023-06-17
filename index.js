function initializeGrid(squares) {
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    for (let row = 0; row < squares; row++) {
        let gridRowContainer = document.createElement("div");
        gridRowContainer.classList.add("grid-row-container");
        for (let col = 0; col < squares; col++) {
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
    document.body.append(gridContainer);
};

initializeGrid(16);

function changeColor(id) {
    square = document.getElementById(id);
    square.classList.add("square-hover");
}



let gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
    let squares = prompt("Number of Squares per side: ");
    if (squares > 100) square = 100;
    removeGrid();
    initializeGrid(squares);
});

function removeGrid() {
    let gridContainer = document.getElementById("grid-container");
    console.log(gridContainer);
    gridContainer.remove();
}