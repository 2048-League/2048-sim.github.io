const dragStart = event => {
    event.currentTarget.classList.add('dragging');
};

const dragEnd = event => {
    event.currentTarget.classList.remove('dragging');
};

const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
};

Array.from(document.querySelectorAll('.tile')).forEach(tile => {
    tile.addEventListener('dragstart', dragStart);
    tile.addEventListener('dragend', dragEnd);
});

const dragEnter = event => {
    event.currentTarget.classList.add('drop');
};

const dragLeave = event => {
    event.currentTarget.classList.remove('drop');
};

Array.from(document.querySelectorAll('.tile.grid-cell')).forEach(tile.grid-cell => {
    tile.grid-cell.addEventListener('dragenter', dragEnter);
    tile.grid-cell.addEventListener('dragleave', dragLeave);
});

const drop = event => {
    Array.from(document.querySelectorAll('.tile.grid-cell'))
         .forEach(tile.grid-cell => tile.grid-cell.classList.remove('drop'));

    document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();

    event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
};

const allowDrop = event => {
    event.preventDefault();
};