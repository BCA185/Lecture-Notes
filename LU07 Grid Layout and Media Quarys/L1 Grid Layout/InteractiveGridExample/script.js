const container = document.getElementById('container');
const selectedBox = document.getElementById('selected-box');
const boxSize = document.getElementById('box-size');

function updateSelectedBoxSize() {
    const box = container.children[selectedBox.value - 1];

    if (box) {
        box.className = `box ${boxSize.value}`;
    }
}
selectedBox.addEventListener('change', () => {
    const box = container.children[selectedBox.value - 1];

    if (box) {
        boxSize.value =
            [...box.classList].find((size) => size !== 'box') || 'small';
    }
});
boxSize.addEventListener('change', updateSelectedBoxSize);

document.getElementById('add-box').addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'box small';
    box.textContent = container.children.length + 1;
    container.appendChild(box);

    const option = document.createElement('option');
    option.value = container.children.length;
    option.textContent = `Box ${container.children.length}`;
    selectedBox.appendChild(option);
});

document.getElementById('remove-box').addEventListener('click', () => {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
        selectedBox.lastElementChild.remove();
        selectedBox.value = Math.min(
            selectedBox.value,
            selectedBox.options.length,
        );
        boxSize.value = 'small';
        updateSelectedBoxSize();
    }
});

updateSelectedBoxSize();
