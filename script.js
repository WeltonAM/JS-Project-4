var num = document.getElementById('fnum');
var lista = document.getElementById('flista');
var res = document.getElementById('res');
var valores = [];

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click', adicionar);
function adicionar(){

    if(isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já adicionado na lista.')
    }
    num.value = '';
    num.focus();
}


var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', finalizar);
function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior)
            maior = valores[pos];
            if (valores[pos] < menor)
            menor = valores[pos];
        }
        media = soma / tot;
        
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`;
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}. </p>`;
        res.innerHTML += `<p>A média dos valores digitados é: ${media}. </p>`;
    }
}