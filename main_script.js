const penetrationModifier = document.querySelectorAll(".penetrationModifier");
const critDmgModifier = document.querySelectorAll(".critDmgModifier");
let penetrationDiv = document.getElementById('penetration');
let critDmgDiv = document.getElementById('critDmg');
let lightArmorSelect = document.getElementById('lightArmorSelect');




const updateCalculations = () => {
    let penetration = 0;
    penetrationModifier.forEach(element => {
        if (element.checked || element.checked == undefined) penetration += Number(element.value);
    });
    penetrationDiv.textContent = penetration.toLocaleString();

    let critDmg = 50;
    critDmgModifier.forEach(element => {
        if (element.checked || element.checked == undefined) critDmg += Number(element.value);
    });
    critDmgDiv.textContent = critDmg + "%";
}

penetrationModifier.forEach(element => {
    element.addEventListener("change", updateCalculations)
});
critDmgModifier.forEach(element => {
    element.addEventListener("change", updateCalculations)
});

document.addEventListener("DOMContentLoaded", async () => {

    updateCalculations();

    if (window.location.hostname == "127.0.0.1") {
        console.log("local access");
        fetch("https://api.counterapi.dev/v1/esocalculator/visits" + getDay())
            .then(res => res.json())
            .then(visits => {
                console.log("Total visits today: " + visits.count);
            })
    } else {
        fetch("https://api.counterapi.dev/v1/esocalculator/visits" + getDay() + "/up")
            .then(res => res.json())
            .then(visits => {
                console.log("Total visits today: " + visits.count);
                console.log(window.location)
            })
    }

});

const getDay = () => {
    const currentDay = Math.floor((Date.now() / 1000) / 86400);
    return currentDay;
};