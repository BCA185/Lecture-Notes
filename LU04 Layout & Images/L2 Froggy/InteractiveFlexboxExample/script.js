const container = document.getElementById('container');

function updateContainerStyle() {
    container.style.flexDirection =
        document.getElementById('flex-direction').value;
    container.style.justifyContent =
        document.getElementById('justify-content').value;
    container.style.alignItems = document.getElementById('align-items').value;
    container.style.flexWrap = document.getElementById('flex-wrap').value;
}

document
    .getElementById('flex-direction')
    .addEventListener('change', updateContainerStyle);
document
    .getElementById('justify-content')
    .addEventListener('change', updateContainerStyle);
document
    .getElementById('align-items')
    .addEventListener('change', updateContainerStyle);
document
    .getElementById('flex-wrap')
    .addEventListener('change', updateContainerStyle);

document.getElementById('add-box').addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = container.children.length + 1;
    container.appendChild(box);
});

document.getElementById('remove-box').addEventListener('click', () => {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});
