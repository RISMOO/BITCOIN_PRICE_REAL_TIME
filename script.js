
function recupererPrix() {
    let url = "https://blockchain.info/ticker";//on stock l'api

    //creer une requete avec ajax

    let requete = new XMLHttpRequest();//creer un objet
    requete.open('GET', url);//premier parametre GET ou POST,2eme parametre URL
    requete.responseType = "json";//nous attendons du json
    requete.send();//on envoi notre requete

    //des qu'on recoit une réponse, cette fonction est executée

    requete.onload = function () {//des que notre requete on execute la fonction

        if (requete.readyState === XMLHttpRequest.DONE) {//est ce ce que notre requete c'est bien passé ?
            if (requete.status === 200) {//la page s'est bien affiché ?
                //on stock la response
                let reponse = requete.response;
                let prixEnEuros = reponse.EUR.last;
                document.querySelector("#price_label").textContent = prixEnEuros


            }
            else {

                alert('Un probleme est intervenu, merci de revenir plus tard');
            }
        }
    }

    console.log('prix actualisé');

}
setInterval(recupererPrix, 1000)

