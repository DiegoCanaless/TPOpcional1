//Ejercicio1 Conversión de Temperaturas

console.log("Conversión de Temperaturas")
let celsius = -5

let fahrenheit = (celsius*1.8)+32

if(fahrenheit<32){
    console.log("La temperatura es baja "+fahrenheit)
} else if(fahrenheit>85){
    console.log("La tempratura es alta "+ fahrenheit)
} else{
    console.log("La temperatura es moredada "+ fahrenheit )
}


console.log("-----------------------------------------------------------------")
console.log("Calculo del IMC")
let peso=90
let altura= 1.60
let imc = peso/(Math.pow(altura, 2))

console.log("El indice de Masa Corporal de la persona es: " +imc)
if(imc<18.5){
    console.log("El peso de la persona es bajo")
} else if(imc>=18.5 && imc<=24.9){
    console.log("El peso de la persona es normal")
} else if(imc>=25 && imc<=29.9){
    console.log("La persona tiene sobrepeso")
} else if(imc>=30){
    console.log("La persona tiene obesidad")
}

console.log("-----------------------------------------------------------------")
console.log("Determinación de Números Primos")


let numero = 10
let contador = 0

for (let i = 1; i <= numero; i++) {
    
    if(numero % i === 0){
        contador++
    }
    
}

contador === 2 ? console.log("El numero es primo") : console.log("El numero no es primo")


console.log("-----------------------------------------------------------------")
console.log("Operaciones Aritméticas Básicas")

let numero1 = 2
let numero2 = 2
let numero3 = 2

let suma = numero1+numero2+numero3
let resta = numero1-numero2-numero3
let multiplicacion = numero1*numero2*numero3

console.log(" Suma: " + suma +"\n Resta: " + resta + "\n Multiplicacion: "+ multiplicacion)

if(suma>multiplicacion && suma>resta){
    console.log("El mayor de los resultados fue la suma")
} else if(multiplicacion>resta && multiplicacion>resta){
    console.log("El mayor de los resultados fue la multiplicacion")
} else{
    console.log("El mayor de los resultados fue la resta")
}

console.log("-----------------------------------------------------------------")
console.log("Calculo del descuento")

let precioProducto = 25
let descuento = 0

if(precioProducto>=100){
    descuento = 10
}else if(precioProducto>50 && precioProducto<100){
    descuento = 5
} else{
    descuento = 0
}

descuento = (descuento*precioProducto)/100
let precioFinal = precioProducto- descuento
console.log("El precio final es de: " + precioFinal)