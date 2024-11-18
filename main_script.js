const penetrationModifier = document.querySelectorAll(".penetrationModifier");
const critDmgModifier = document.querySelectorAll(".critDmgModifier");
let penetrationDiv = document.getElementById('penetration');
let critDmgDiv = document.getElementById('critDmg');
let lightArmorSelect = document.getElementById('lightArmorSelect');

penetrationModifier.forEach(element => {
    element.addEventListener("change", updateCalculations)
});
critDmgModifier.forEach(element => {
    element.addEventListener("change", updateCalculations)
});

function updateCalculations() {
    let penetration = 0;
    penetrationModifier.forEach(element => {
        if (element.checked || element.checked == undefined) penetration += Number(element.value);
    });
    penetrationDiv.textContent = penetration;

    let critDmg = 50;
    critDmgModifier.forEach(element => {
        if (element.checked || element.checked == undefined) critDmg += Number(element.value);
    });
    critDmgDiv.textContent = critDmg + "%";
}

document.addEventListener("DOMContentLoaded", async () => {

    updateCalculations();

});