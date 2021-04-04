$(document).ready(()=> {
    $("#titulo").show("slow", ()=> {
        $.getJSON("js/coderflix.json", function(response, status) {
            if (status === "success") {
                let contenido = response
                    for (const film of contenido) {
                        $("#contenido").append(cargoCard(film))
                    }
            } else {
                $("#contenido").html(contenidoError)
            }
            $("#contenido").fadeIn("slow")
        })
    })
})

const contenidoError = `<div class="center red-text">
                            <i class="large material-icons">movie</i>
                            <h4 >No se pudo recuperar el contenido</h4>
                            <h5>Intente nuevamente en unos segundos...</h5>
                            <i class="large material-icons">sentiment_very_dissatisfied</i>
                        </div>`

const cargoCard = (film) => {
    if (film != undefined) {
        let movieOrSerie = `<p class="yellow-text">TEMPORADAS: <span class="white-text">${film.temporadas}</span></p>`
            if (film.temporadas == "N/A")
                movieOrSerie = `<p class="yellow-text">DURACIÓN: <span class="white-text">${film.temporadas}</span></p>`
            let card = `<div class="col s12 m6 l3">
                            <div class="card">
                                <div class="card-image">
                                <img src="${film.poster}">
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">search</i></a>
                                </div>
                                <div class="card-content black">
                                <p class="yellow-text">${film.genero}</p>
                                ${movieOrSerie}
                                </div>
                            </div>
                        </div>`
                return card
    }
}