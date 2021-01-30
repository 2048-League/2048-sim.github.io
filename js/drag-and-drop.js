const dragStart = event => {
    event.currentTarget.classList.add('dragging');
};

const dragEnd = event => {
    event.currentTarget.classList.remove('dragging');
};

Array.from(document.querySelectorAll('.tile')).forEach(tile => {
    tile.addEventListener('dragstart', dragStart);
    tile.addEventListener('dragend', dragEnd);
});