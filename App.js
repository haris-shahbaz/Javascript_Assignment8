function alertFunction () {
    alert("!!!!!!");
}

function purchase () {
    alert("Thankyou for purchasing mobile");
}

function deleteLine () {
    let firstDelete = document.getElementById("delete");
    let getText = firstDelete.innerHTML;
    let deleteAll = getText.remove();
}

const counterElement = document.getElementById('counter');
        const increaseButton = document.getElementById('increaseButton');
        const decreaseButton = document.getElementById('decreaseButton');
        let counterValue = 0;
        function updateCounter() {
            counterElement.innerText = counterValue;
        }
        increaseButton.addEventListener('click', function () {
            counterValue++;
            updateCounter();
        });
        decreaseButton.addEventListener('click', function () {
            counterValue--;
            updateCounter();
        });
        updateCounter();