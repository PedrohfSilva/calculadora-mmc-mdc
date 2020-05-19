var preenchido;

function valores(numero, posicao) {
    if(document.getElementById(numero).value==""){
        return 1;
    }
    else if(parseInt(document.getElementById(numero).value)==0) {
        document.getElementById(numero).value = "";
        return 1;
    }
    else if(parseInt(document.getElementById(numero).value) > 999999) {
        document.getElementById(numero).value = "";
        erroEntrada.innerHTML = "Digite números inteiros menores que 1.000.000";
        return 1;
    }
    else{
        document.getElementById(numero).value = parseInt(Math.abs(document.getElementById(numero).value));
        preenchido[posicao] = true;
        return document.getElementById(numero).value;
    }
}

function primo(numero) {
    var i=2;
    do {
        if(numero % i==0) {
            return false;
        }
        i++;
    } while(i<=numero/2);
    return true;
}

function mmc_mdc() {
    erroEntrada.innerHTML = "";
    erroSaida.innerHTML = "";

    preenchido = [false, false, false, false];
    var number1 = valores("num1", 0);
    var number2 = valores("num2", 1);
    var number3 = valores("num3", 2);
    var number4 = valores("num4", 3);

    if(preenchido[0]==false && preenchido[1]==false && preenchido[2]==false && preenchido[3]==false) {
        resultado1.innerHTML = "";
        resultado2.innerHTML = "";
    }
    else {
        var MMC = 1;
        var MDC = 1;
        var i = 2;
    
        while(number1!=1 || number2!=1 || number3!=1 || number4!=1) {
            if(number1 % i == 0 || number2 % i == 0 || number3 % i == 0 || number4 % i == 0) {
                MMC *= i;
                if((preenchido[0]==false || number1%i==0) && (preenchido[1]==false || number2%i==0) && (preenchido[2]==false || number3%i==0) && (preenchido[3]==false || number4%i==0)) {
                    MDC *= i;
                }
                if(number1 % i == 0) {
                    number1 /= i;
                }
                if(number2 % i == 0) {
                    number2 /= i;
                }
                if(number3 % i == 0) {
                    number3 /= i;
                }
                if(number4 % i == 0) {
                    number4 /= i;
                }
            }
            else {
                do {
                    i++;
                } while(!primo(i));
            }
            if(MMC>999999999999999) {
                resultado1.innerHTML = "";
                resultado2.innerHTML = "";
                erroSaida.innerHTML = "Erro! Resultado muito grande";
                return null;
            }
        }    
        resultado1.innerHTML = MMC;
        resultado2.innerHTML = MDC;
    }  
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    erroEntrada.innerHTML = "";
    erroSaida.innerHTML = "";
}

console.log("Created by: Pedro Silva - 2ºTI");