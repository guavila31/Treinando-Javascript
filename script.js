const num1 = 10;
const num2 = 100;
const num3 = 5;
const contador = [];
const tabuada = [];
const tabuada2 = [];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function exercicio1() {
    alert(`
    ${num1} + ${num2} = ${num1 + num2});
    ${num1} - ${num2} = ${num1 - num2});
    ${num1} x ${num2} = ${num1 * num2});
    ${num1} / ${num2} = ${num1 / num2}`);
}

function exercicio2() {
    for (i = num1; i < num2; i++) {
        contador.push(i);
    }
    alert(contador);
}
function exercicio3() {
    for (let i = 0; i <= 10; i++) {
        tabuada.push(`
            ${i} x 5 = ${i * 5}`)
    }
    alert(tabuada)
}

function exercicio4() {
    var num4 = document.getElementById('inputTabuada').value;
    console.log(num4)
    for (let i = 0; i <= 10; i++) {
        tabuada2.push(`
            ${i} x ${num4} = ${i * num4}`)
    }
    alert(tabuada2)
}

function exercicio5() {
    var num5 = document.getElementById('inputTabuada2').value;
    var num6 = document.getElementById('inputTabuada3').value;

    alert(`${num5} x ${num6} = ${num5 * num6}`)
}

function exercicio6() {
    var par = [];
    array.forEach(array => {
        if ((array % 2) == 0) {
            par.push(array);
        }
    });
    alert(par);
}

function exercicio7() {
    let custoFabrica = parseFloat(document.getElementById("custo").value);
    let custofinal =
      custoFabrica +
      custoFabrica *
        parseFloat(document.getElementById("distribuidor").value / 100) +
      custoFabrica *
        parseFloat(document.getElementById("impostos").value / 100);
  
    return (document.getElementById("valor").value = custofinal);
  }
  



