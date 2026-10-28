// let nombres = [12, 8, 15, 4, 19];
// let recherche = 15;
// let position = -1;
// for (let i = 0; i < nombres.length; i++) {
//     if(nombres[i]===recherche){
//     position = i;
//     break;
// }
// }
// if(position!==-1){
//     console.log("Valeur trouvée à l'index :", position);
// } else {
//     console.log("Valeur introuvable.");
// }

let nombres = [12, 8, 15, 4, 19];
let max = nombres[0];
let positionMax = 0;
for (let i = 0; i < nombres.length; i++) {
    if(nombres[i] > max){
        max=nombres[i];
        positionMax = i;
    }
}
console.log(max,positionMax);