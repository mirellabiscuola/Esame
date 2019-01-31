txtUtente = "";

function scrivi() {
    // acquisisco nome e cognome
    let txtNome = document.getElementById("in_nome").value;

    txtUtente = txtNome + " ";

    // se i dati sono stati inseriti  do benvenuto ed abilito div esame
    if (txtUtente > " ") {
        document.getElementById("sp_msg").innerHTML = " " + txtUtente;

    };
    
    ris = " Oggi è il " + Date() + "<br>" +
            " Ciao Luca guerrini,buona giornata " + " da " + txtNome;

    document.getElementById("sp_msg").innerHTML = ris;

    return ris;
}
function sposta() {
    //acqusisco nome 1,nome  2,e nome 3
    let Nome1 = document.getElementById("in_nome1").value;
    let Nome2 = document.getElementById("in_nome2").value;
    let Nome3 = document.getElementById("in_nome3").value;

    document.getElementById("in_nome1").value = Nome3;
    document.getElementById("in_nome2").value = Nome1;
    document.getElementById("in_nome3").value = Nome1;
    
 }   
 //creo gli array
     var ar_articoli = [];
     var ar_costo = [];
     
    function Aggiungi_Art() {
// carico array
    ar_articoli.push(document.getElementById("in_articolo").value);
    ar_costo.push(document.getElementById("in_costo").value);
    document.getElementById("ris_Totale").innerHTML = "Totale: " +ris_Totale();}

    // funzione che stampa il totale 
    function ris_Totale() {
        let tot=0;
    for (i = 0; i < ar_articoli.length; i++) {
        

        tot += +ar_costo[i] * 1;
    }


    return tot;
}

     
