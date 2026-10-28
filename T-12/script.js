// let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
// let somme =0;
// for (let i = 0; i < ventes.length; i++) {
//     somme=somme+ventes[i]; 
// }
// console.log(somme);


// let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
// let nombre = ventes.length
// console.log(nombre);


// let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
// let max=ventes[0];
// for (let i = 1; i < ventes.length; i++) {
//     if(ventes[i]>max)
//         max=ventes[i];
// }
// console.log(max);

// let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
// let min = ventes[0];
// for (let i = 1; i < ventes.length; i++) {
//     if(ventes[i]<min)
//         min= ventes[i];
    
// }
// console.log(min);

let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let nb= 0;
let somme =0;
for (let i = 1; i < ventes.length; i++) {
    if(ventes[i]>=130){
         nb=nb+1;
          // kat3ni bki l9ina ra9m kbr mn 130 li hiya nb++;
         somme=somme+ventes[i];
    }
       
    

   
    
}
console.log(nb);
console.log(somme);


