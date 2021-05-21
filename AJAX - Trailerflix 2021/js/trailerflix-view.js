function buildCard(ps) {
   let HTMLCard = ""
   let SerieOpelicula = ""
       SerieOpelicula = `<p class="yellow-text">DURACIÓN: <span class="white-text">${ps.duracion}</span></p>`
       if (ps.categoria == "Serie")
           SerieOpelicula = `<p class="yellow-text">TEMPORADAS: <span class="white-text">${ps.temporadas}</span></p>`
       HTMLCard += `<div class="col s12 m6 l3">
                      <div class="card z-depth-2 max-wide">
                         <div class="card-image">
                            <img loading="lazy" src="${ps.poster}" alt="${ps.titulo}" title="${ps.titulo}" id="trailerflix-${ps.id}" width="440">
                            <a class="btn-floating halfway-fab waves-effect waves-light red darken-2"><i class="material-icons"  onclick="verDetalle(${ps.id})">search</i></a>
                         </div>
                         <div class="card-content black">
                            <p class="yellow-text ">GÉNERO: <span class="white-text">${ps.gen}</span></p>
                            ${SerieOpelicula}
                         </div>
                      </div>
                   </div>`
       return HTMLCard
}

function errorJSON() {
   let HTMLCard = ""
       console.error("Ocurrió un error... :(")
       HTMLCard = `<div class="center white-text"> 
                      <br><br> 
                      <h2>El contenido no está disponible. Intente nuevamente en unos minutos.</h2> 
                      <br><br> 
                      <i class="large material-icons">sentiment_very_dissatisfied</i> 
                      <br><br> 
                   </div>`
       return HTMLCard
}