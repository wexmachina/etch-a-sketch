document.addEventListener("DOMContentLoaded", function () {
    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })

    function getSize() {
        let input = prompt("Select a Size");
        let message = document.querySelector("#message");
        if (input == "") {
            message.innerHTML = "Please Provide a Number";
        } else if (input < 1 || input > 100) {
            message.innerHTML = "Please Provide a Number Between 1 and 100";
        } else {
            message.innerHTML = "Time to Play!"
            return input;
        }
    }

    function createBoard(size) {
        let board = document.querySelector(".board");
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let numSquares = size * size;

        for (i = 0; i < numSquares; i++) {
            let square = document.createElement("square");
            square.addEventListener("mouseover", colorSquare);
            board.insertAdjacentElement("beforeend", square);

            function colorSquare() {
                square.style.backgroundColor = "black";
                let btn_black = document.querySelector(".black");
                let btn_random = document.querySelector(".random");
                
                btn_black.addEventListener("click", function() {
                    return square.style.backgroundColor = "black";
                })
                
                btn_random.addEventListener("click", function() {
                    return square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                })
        }
        }
    }
})