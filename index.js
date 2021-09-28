let listaParticipantes = [];
let listaPalestrantes = ["Professor Um", "Professor Dois", "Professor Tres"];
var limiteParticipantes = 3;



if (listaParticipantes.length < limiteParticipantes) {
    var readlineSync = require('readline-sync');

    var agora = new Date();
    var dataEvento = new Date(readlineSync.question('Informe a data do evento "AAAA-MM-DD"  '));


    if (dataEvento >= agora) {
        console.log("Data ok");

        while (listaParticipantes.length < limiteParticipantes) {
            var idadeParticipante = readlineSync.question('Informe a idade do participante ');

            if (idadeParticipante >= 18) {
                console.log("idade ok");
                var inputParticipante = readlineSync.question('Informe o nome do participante  ');
                listaParticipantes.push(inputParticipante);
                console.log("Lista de participantes" + " " + listaParticipantes);
                console.log("Quantidade de participantes" + " " + listaParticipantes.length);
                console.log("Lista de palestrantes" + " " + listaPalestrantes);
            }
            else {
                console.log("Menores de 18 anos nao podem ser cadastrados");
            }

        }
    }
    else {
        console.log("Data invalida");
    }

}
else {
    console.log("Limite de participantes atingido");
};

