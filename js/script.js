let happiness = 0;
let energy = 0;

let pet_name = prompt("Congratulations on adopting a goblin! First thing's first: what will you name them?");


for (let i=1; i<=6; i++) {
    let userchoice = prompt("Will you feed, pet, or walk " + pet_name + "?");
    if (userchoice.toLowerCase() === "feed") {
        energy = (energy += 2);
    } else if (userchoice.toLowerCase() === "pet") {
        happiness = (happiness += 1);
    }  else if (userchoice.toLowerCase() === "walk") {
        if (energy >= 1) {
            happiness = (happiness += 2);
            energy = (energy -= 1)
        } else {
            alert (pet_name + " doesn't have enough energy to walk right now!")
        }
    }  else {
        alert (pet_name + " doesn't know what to do! Try again!")
    }
}

console.log(pet_name + " has " + happiness + " happiness and " + energy + " energy.");