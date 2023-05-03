function soma(a,b){
    console.log("A soma dos números é: ",a+b)
}

function subtrair(a,b){
    console.log("A subtração dos números é: ", a-b)
}

function dividir(a,b){
    console.log("O número ", a, " divido por ",b," é igual à: ", a/b)
}

function multiplicar(a,b){
    console.log(2 , " x " , b, " = ", a * b)
}

function verPar(a){
    if(a % 2 === 0){
        console.log("O número é par")
    }else{
        console.log("O número é impar")
    }
}

soma(1,5)
subtrair(6,4)
dividir(10,2)
multiplicar(5,8)
verPar(5)
verPar(7)
verPar(6)
