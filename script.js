document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const leftContainer = document.querySelector(".left-container");
    const rightContainer = document.querySelector(".right-container");
    const resetBtn = document.getElementById("resetBtn");
    const message=document.getElementById("message");

    let draggedItem = null;

    // Add event listeners to each item
    items.forEach(function(item) {
        item.addEventListener("dragstart", dragStart);
        item.addEventListener("dragend", dragEnd);
    });

    // Reset button event listener
    resetBtn.addEventListener("click", function() {
        leftContainer.innerHTML = `
           <h5>Click here to drag and drop</h5>
           <div class="item" draggable="true"><i class="fas fa-heart"></i></div>
           <div class="item" draggable="true"><i class="fas fa-star"></i></div>
           <div class="item" draggable="true"><i class="fas fa-smile"></i></div>
           <div class="item" draggable="true"><i class="fas fa-check"></i></div>
        `;
        rightContainer.innerHTML = "";
        message.textContent="";
        window.location.reload();
        addDragEvents();
    });

    // Drag event handlers
    function dragStart() {
        draggedItem = this;
        setTimeout(function() {
            draggedItem.style.display = "none";
            message.textContent=""
        }, 0);
    }

    function dragEnd() {
        draggedItem.style.display = "block";
        draggedItem = null;
        message.textContent="Icon dropped Successfully!"
    }

    // Add drag and drop events to containers
    function addDragEvents() {
        leftContainer.addEventListener("dragover", dragOver);
        leftContainer.addEventListener("dragenter", dragEnter);
        leftContainer.addEventListener("dragleave", dragLeave);
        leftContainer.addEventListener("drop", dragDrop);
        rightContainer.addEventListener("dragover", dragOver);
        rightContainer.addEventListener("dragenter", dragEnter);
        rightContainer.addEventListener("dragleave", dragLeave);
        rightContainer.addEventListener("drop", dragDrop);
    }

    // Drag and drop functions
    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        rightContainer.classList.add("hovered");
    }

    function dragLeave() {
        rightContainer.classList.remove("hovered");
    }

    function dragDrop() {
        rightContainer.classList.remove("hovered");
        rightContainer.appendChild(draggedItem);
    }

    // Initialize drag events
    addDragEvents();
});
