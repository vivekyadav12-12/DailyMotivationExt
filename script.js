const getMotivation = async () => {
    try{
        const res = await fetch("https://type.fit/api/quotes");

        const data = await res.json();
        const motivation = document.querySelector("#motivation");
        motivation.innerHTML = data.value;
    } catch (error) {}
};


window.addEventListener("load",() => {
    getMotivation();
});