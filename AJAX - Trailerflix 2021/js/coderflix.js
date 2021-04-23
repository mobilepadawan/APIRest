let contenidoJSON = []

function cargoContenidoStreaming() {
   $.ajax({
      url: "js/api.json",
      dataType: "json",
      success: function(contenidoJSON) {
         localStorage.contenidoJSON = JSON.stringify(contenidoJSON)
         $.each(contenidoJSON, function(i) {
            $("#contenido").append(buildCard(contenidoJSON[i]))
         })
      },
      error: function() {
         $("#contenido").html(errorJSON())
      } 
   })
}

function buildCard(ps) {
   let HTMLCard = ""
   let SerieOpelicula = ""
       SerieOpelicula = `<p class="yellow-text">DURACIÓN: <span class="white-text">${ps.duracion}</span></p>`
       if (ps.categoria == "Serie")
           SerieOpelicula = `<p class="yellow-text">TEMPORADAS: <span class="white-text">${ps.temporadas}</span></p>`
       HTMLCard += `<div class="col s12 m6 l3">
                      <div class="card z-depth-2">
                         <div class="card-image">
                            <img src="${ps.poster}" alt="${ps.titulo}" id="trailerflix-"${ps.id} max-width="100px">
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"  onclick="verDetalle(${ps.id})">search</i></a>
                         </div>
                         <div class="card-content black">
                            <p class="yellow-text">GÉNERO: <span class="white-text">${ps.genero}</span></p>
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
                      <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                      <br><br> 
                      <i class="large material-icons">sentiment_very_dissatisfied</i> 
                      <br><br> 
                   </div>`
       return HTMLCard
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

function buscarToggle() {
   $("#txtBuscar").val("")
   $("#divBuscar").slideToggle()
   $("#txtBuscar").focus()
}

$("#txtBuscar").on("keypress", function(e) {
   if (e.keyCode === 13) {
      buscarContenido($("#txtBuscar").val())
   }
})

function buscarContenido(param) {
   if (localStorage.contenidoJSON != undefined) {
      contenidoJSON = JSON.parse(localStorage.contenidoJSON)
      const resultado = contenidoJSON.filter(c => c.busqueda.includes(param))
            if (resultado.length == 0) {
               M.toast({html: "<p>No se encontró contenido asociado :(</p>", classes: "red darken3 white-text"})
            } else {
               $('#contenido').html("")
               leyendaResultados = `<p class="red-text darken3">Se encontraron ${resultado.length} coincidencias.</p>`
               $('#contenido').append(leyendaResultados)
               for (const ps of resultado)
                  $('#contenido').append(buildCard(ps))
               buscarToggle()
            }
   } else {
      console.error("Intente de nuevo más tarde, o habilite el caché local.")
   }
}