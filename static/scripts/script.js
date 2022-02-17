const gCanvas = document.querySelector('#c');
const gCtx = gCanvas.getContext('2d');
gCtx.fillStyle = "#FFFFFF";
gCtx.fillRect(0, 0, 32, 32);

function onMouseDown(e) {
    e.preventDefault();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(e) {
    e.preventDefault();
    gCtx.fillStyle = "#000000";
    gCtx.fillRect(e.offsetX, e.offsetY, 2, 2);
}

function onMouseUp(e) {
    e.preventDefault();
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);

}

function onSave() {
    gCanvas.toBlob((blob) => {
        const timestamp = Date.now().toString();
        const a = document.createElement('a');
        document.body.append(a);
        a.download = `digit-${timestamp}.png`;
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    });
}


gCanvas.addEventListener('mousedown', onMouseDown);
document.querySelector('#save').addEventListener('click', onSave);