function popupOpen(popupId, assetPath) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
    popup.innerHTML = `
        <div class="button-reveal-total">
            <div class="image">
                <img src="${assetPath}">
            </div>
            <div class="hide-results">
                <button onclick="popupClose('${popupId}')">Hide Results</button>
            </div>
        </div>
    `;
}

function popupClose(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

document.getElementById("buttonA").addEventListener("click", function() {
    popupOpen('popup-container1', `assests/css-letter-a.png`);
});

document.getElementById("buttonB").addEventListener("click", function() {
    popupOpen('popup-container2', `assests/css-letter-b.png`);
});

document.getElementById("buttonC").addEventListener("click", function() {
    popupOpen('popup-container3', `assests/css-letter-c.png`);
});
