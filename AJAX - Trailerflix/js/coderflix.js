let HTMLCard = ""
let SerieOpelicula = ""
let contenidoJSON = []

function cargoContenidoStreaming() {
   $.ajax({
      url: "js/api.json",
      dataType: "json",
      success: function(contenidoJSON) {
         localStorage.contenidoJSON = JSON.stringify(contenidoJSON)
         $.each(contenidoJSON, function(i) {
            if(contenidoJSON[i].categoria == "Serie") {
               SerieOpelicula = `<p class="yellow-text">TEMPORADAS: <span class="white-text">${contenidoJSON[i].temporadas}</span></p>`
            } else {
               SerieOpelicula = `<p class="yellow-text">DURACIÓN: <span class="white-text">${contenidoJSON[i].duracion}</span></p>`
            }
            HTMLCard += `<div class="col s12 m6 l3">
                           <div class="card z-depth-2">
                           <div class="card-image">
                              <img src="${contenidoJSON[i].poster}" alt="${contenidoJSON[i].titulo}" id="trailerflix-"${contenidoJSON[i].id} max-width="100px">
                              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" onclick="verDetalle(${contenidoJSON[i].id})">search</i></a>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">GÉNERO: <span class="white-text">${contenidoJSON[i].genero}</span></p>
                              ${SerieOpelicula}
                           </div>
                           </div>
                        </div>`
         })
         $("#contenido").html(HTMLCard)
      },
      error: function() {
         console.error("Ocurrió un error... :(")
         HTMLCard = `<div class="center white-text"> 
                        <br><br> 
                        <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                        <br><br> 
                        <i class="large material-icons">sentiment_very_dissatisfied</i> 
                        <br><br> 
                     </div>`
         $("#contenido").html(HTMLCard)
      } 
   })
}

setTimeout(() => {
   cargoContenidoStreaming()
   $('#contenido').fadeIn("fast", function() {
      $('#cargando').fadeOut(200)
   })
}, 2000)

function verDetalle(i) {
   if (contenidoJSON.length == 0)
      contenidoJSON = JSON.parse(localStorage.contenidoJSON)
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != undefined) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error("No se encontró el elemento: " + i)
         M.toast({html: "Contenido temporalmente no disponible.", classes: "red darken-3 white-text"})
      }
}