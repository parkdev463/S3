/* Accumulateur
let nombres = [4, 7, 2, 9, 5, 8];
let sommePair = 0;
for (let i = 0; i < nombres.length; i++) {
    if(nombres[i] %2===0){
    sommePair= sommePair+nombres[i];
}
}
// console.log("Sommes des nombres Paires",sommePair);

// compteur
let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motsLongs =0;
for (let i = 0; i < mots.length; i++) {
    if(mots[i].length>5){
        motsLongs++;
    } 
}
// console.log(motsLongs);*/

let panier = [15, 42, 5, 89, 12, 50, 8];
let sommeP=0;
let sum =0
for (let i = 0; i < panier.length; i++) {
    //sommeP=sommeP+panier[i];
   if(panier[i]>=20)
    //    sum++;
    sum=sum+panier[i];

}
 //console.log(sommeP);
console.log(sum);


