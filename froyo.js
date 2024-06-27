const enterFlavors = prompt ("Please enter a list of comma-separated froyo flavors:");

if (!enterFlavors) {
    console.log ("You need to enter a froyo flavor that you want");
} else {
    const flavors = enterFlavors.split (",");
}

// const flavorList = [vanilla, vanilla, vanilla, strawberry, coffee, coffee];
// console.log (flavorList);
//     for (let i = 0; i < flavors.length; i++) {
//     console.log(flavors[i]);
//   }