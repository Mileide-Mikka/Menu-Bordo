//função que desacelera a nave
function speedDown(velocity, printer){
    let slowDown = 20; // taxa de desaceleração pré estipulada

    while(velocity > 0){// enquanto a velocidade for maior que 0, o laço de repetição imprimira em tela a velocidade da nave
        printer(velocity); // printa a velocidade

        velocity -= slowDown;// velocidade sera subitraida a cada interação - em 20km/s
    }

    alert("Nave parada!! \nComportas da nave liberadas para serem abertas.");
}

let shipVelocity = 150; // velocidade pré estipulada

slowDown(shipVelocity, function(velocity) {
    console.log("Velocidade atua: " + velocity);
});