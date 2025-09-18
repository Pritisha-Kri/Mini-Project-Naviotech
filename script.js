document.addEventListener("DOMContentLoaded", () => {
    const numberDisplay = document.getElementById("number");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    // Fetch initial value from PHP session
    fetch("counter.php?action=get")
        .then(res => res.json())
        .then(data => numberDisplay.textContent = data.value);

    incrementBtn.addEventListener("click", () => updateCounter("increment"));
    decrementBtn.addEventListener("click", () => updateCounter("decrement"));
    resetBtn.addEventListener("click", () => updateCounter("reset"));

    function updateCounter(action) {
        fetch(`counter.php?action=${action}`)
            .then(res => res.json())
            .then(data => numberDisplay.textContent = data.value);
    }
});
