
let fruita = 'mandarina'
switch (fruita){
 case 'pera':
  console.log('0,59€')
  break;
case 'tomaquet':
  console.log('0.70€');
  break;
case 'mandarina':
  console.log('0.60€');
  break;
 default:
  console.log('Item invàlid')
}
//0.60€







console.log ("PRACTIQUES JAVASCRIPT");

//exercisi 1 passar graus Fº a Cº
console.log("Exercisi 1")
let score = 0
let temp_f = 73;
let temp_c = (temp_f - 32) / 1.8;
console.log(temp_c);

//exercisi 2 bmi = pes entre altura elevat a dos
console.log("Exercisi 2")
let pes = 50;
let altura = 1.58
let bmi = pes / (altura ** 2)
console.log(bmi)

//exercisi 3 conversor de monedes
console.log("Exercisi 3")
console.log("Tinc 345 yuans")
console.log("TInc 3456 yens")
console.log("Tinc 4600 wons")
console.log("Quants diners tinc en €?")
let yen=345
let yuan=3456
let won=4600
let eurosyen=0.0064
let eurosyuan=0.13
let euroswon=0.00069
let conv1 = yen * eurosyen
let conv2 = yuan * eurosyuan
let conv3 = won * euroswon
let total = (yen*eurosyen) + (yuan*eurosyuan) + (won*euroswon)
console.log(conv1)
console.log(conv2)
console.log(conv3)
console.log(total)
//exercisi 4 condicionals
console.log("Exercisi 4")
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
//Exercisi 5 varialbles
console.log("Exercisi 5")
let hour= 4
if (hour <12){
  console.log("BON DIA GUAPA")
} else {
  console.log("A BONES HORES PUTA MARMOTA")
}
console.log(hour)

//PRACTICA CHAT GPT
console.log("Pràctica chat GPT 1")
let hora= new Date().getHours();
if (hora <18){
  console.log("Bona tarda bunica")
  console.log("Ves a fer-te el café")
  console.log("Relaxa't i despertat amb calma")
} else {
  console.log("VAYA avuui no hi ha siesta")
}
console.log(hora)

//Exercisi chat GTP 2
console.log("Pràctica chat GPT 2")
// Usa los métodos getFullYear, getMonth y getDate para obtener el año, el mes y el día
let hoy= new Date()
let year= hoy.getFullYear();
let month= hoy.getMonth() +1;
let day= hoy.getDate();

console.log(year)
console.log(month)
console.log(day)

//Exercisi 6 else if
console.log("Exercisi 6")
let ph= 9
if (ph ===7){
  console.log("Basic")
} else if (ph <7){
console.log("Acidic")
} else {
  console.log("neutral")
}

//Exercisi 7 Bola magica
console.log("Exercisi 6")
const pregunta= "Aprendre a programar?"
const numr= Math.floor(Math.random()*9) +1
console.log(pregunta)
let resposta= ""
if (numr==1) {
  console.log("Definitivament, si")
} else if (numr==2){
  console.log("El destí ha decidit que si")
} else if (numr==3){
  console.log("Sense cap dubte")
} else if (numr==4){
  console.log("Resposta no clara, pregunta una altre vegada")
}else if (numr==5){
  console.log("Pregunta un altre cop")
}else if (numr==6){
  console.log("Millor no t'ho responc ara mateix")
}else if (numr==7){
  console.log("Les meves fonts diuen que no")
}else if (numr==8){
  console.log("Les perspectives no son bones")
} else if (numr==9){
  console.log("Dudosament")
}
console.log(resposta)
//exercisi 8
console.log("Exercisi 8")
/*Si aqi está entre 0 y 50, imprime "Bueno".
Si aqi está entre 51 y 100, imprime "Moderado".
Si aqi está entre 101 y 150, imprime "Insalubre (Grupos sensibles)".
Si aqi está entre 151 y 200, imprime "Insalubre".
Si aqi está entre 201 y 300, imprime "Muy insalubre".
En caso contrario, imprime “Peligroso”.*/

const aqi= 100
if (aqi >= 0 && aqi <=50){
  console.log("Bueno")
} else if (aqi >= 51 && aqi <= 100){
  console.log("Moderado")
} else if (aqi >= 101 && aqi <= 150){
  console.log("Insalubre (Grupos sensibles)")
} else if (aqi >= 151 && aqi <= 200){
  console.log("Insalubre")
} else if (aqi >= 201 && aqi <= 300){
  console.log("Muy insalubre")
} else {
  console.log("Peligroso")
}
//Exercisi 9 Pedra, paper o tisores
console.log("Exercisi 9")
// 0 = pedra
// 1 = paper
// 2 = tisores
let player = 2

if (player == 0){
  console.log("Jugador ha escollit: Pedra")
} else if (player == 1){
  console.log("Jugador ha escollit: Paper")
} else if (player == 2){
  console.log("Jugador ha escollit: Tisores")
}
let comp= Math.floor(Math.random()*3)

if (comp == 0){
  console.log("Ordinador ha escollit: Pedra")
}
else if (comp == 1){
  console.log("Ordinador ha escollit: Paper")
}else if (comp == 2){
  console.log("Ordinador ha escollit: Tisores")
}

console.log (player)
console.log (comp)


//Exercisi 10
console.log("Exercisi 10")

//CODE ACADEMY
console.log('Codecademy'.toUpperCase());
console.log('   Remove the whitespaces   '.trim())
console.log(Math.random())
console.log(Math.floor(Math.random() * 50));

let kelvins = 0
let celsius = kelvins - 273
let fahrenheit = celsius * (9/5) + 32 
let newton = celsius * (33/100)
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees in Fahrenheit.`)
console.log(Math.floor(newton))


let spotlight = 'green'
let peatons = '0'
if (spotlight === 'green' && peatons === '0'){
  console.log('Go!')
} else{
  console.log('Stop!')
}



let fruita = 'mandarina'
const imprimeixFruita = () => {
let fruita= 'taronja'
}
imprimeixFruita ()
console.log(fruita) //mandarina