
let shipName = prompt("Qual o nome da nave?");

let shipVelocity = 0;

let chosenOption // armazena a opção que o usuario escolherá

// function de opções do menu
// exibe o menu e armazenaa escolha do usuario em uma variavel
// verifica se a opção que o usuario escolheu é valida
function showMenu() {
    // laço verifica se a option é diferente de 1. 2. 3 ou 4
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
            "1- Acelera a nave em 5Km/s\n" +
            "2- Desacelera a nave em 5km/s\n" +
            "3- Imprimir dados de bordo\n" +
            "4- Sair do Programa");
    }
    return option;
}

// função para acelera a nave em 5km/s
function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}

// função para desacelera a nave em 5km/s
function speedDown(velocity) {
    let newVelocity = velocity - 5;
    if(newVelocity < 0) {
        newVelocity = 0;
    }
    return newVelocity;
}

// função para imprimir os dados de borda da espaço nave
function printSpaceShipBoardData(name, velocity) {
    alert("Espaço Nave: " + name + "\nVelocidade: " + velocity + "Km/s")
}


do {
    chosenOption = showMenu();
    switch(chosenOption) {
        case "1":
            shipVelocity = speedUp(shipVelocity);
            break;

        case "2":
            shipVelocity = speedDown(shipVelocity);
            break;

        case "3":
            printSpaceShipBoardData(shipName, shipVelocity);
            break;

        default:
            alert("O programa de bordo está sendo encerrado");
    }
} while (chosenOption != "4")// esse laço é executado enquanto a opção for diferente de 4, quando o usuario escolhe essa opção o programa devera ser encerrado 