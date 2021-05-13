let contenidoJSON = []
const gen = ["Acción", "Aventura", "Ciencia Ficción", "Comedia", "Drama", "Familia", "Fantasía", "Hechos verídicos", "Suspenso", "Terror", ]

function cargoContenidoStreaming() {
   $("#contenido").html("")
   $.ajax({
      url: "js/trailerflix.json",
      dataType: "json",
      success: function(data) {
         guardoEnLS(data)
      },
      error: function() {
         $("#contenido").html(errorJSON())
      } 
   })
}

function armoVistaFull(c) {
   $("#contenido").html("")
   for (const elemento of c)
      $("#contenido").append(buildCard(elemento))
}

function guardoEnLS(c) {
   localStorage.contenidoJSON = JSON.stringify(c)
}

function buildCard(ps) {
   let HTMLCard = ""
   let SerieOpelicula = ""
       SerieOpelicula = `<p class="yellow-text">DURACIÓN: <span class="white-text">${ps.duracion}</span></p>`
       if (ps.categoria == "Serie")
           SerieOpelicula = `<p class="yellow-text">TEMPORADAS: <span class="white-text">${ps.temporadas}</span></p>`
       HTMLCard += `<div class="col s12 m6 l3">
                      <div class="card z-depth-2 max-wide">
                         <div class="card-image">
                            <img src="${ps.poster}" alt="${ps.titulo}" title="${ps.titulo}" id="trailerflix-"${ps.id} max-width="100px">
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"  onclick="verDetalle(${ps.id})">search</i></a>
                         </div>
                         <div class="card-content black">
                            <p class="yellow-text">GÉNERO: <span class="white-text">${ps.gen}</span></p>
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
                      <h4>El contenido no está disponible. Intente nuevamente en unos minutos.</h4> 
                      <br><br> 
                      <i class="large material-icons">sentiment_very_dissatisfied</i> 
                      <br><br> 
                   </div>`
       return HTMLCard
}

setTimeout(() => {
   muestroGeneros()
   $('#contenido').fadeIn("fast", function() {
      $('#visualizacion').fadeIn(200, $('#cargando').fadeOut(200))
   })
}, 1000)

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

function tituloCateroria(g) {
   return `<div class="col s12 m12 l12">
               <div class="center" width="100%">
                   <h3 class="white-text vertical-spaces">${g}</h3>
               </div>
           </div>`
}

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

function agrupoPorGenero(gen, data) {   
   $("#contenido").html("")
   for (const g of gen) {
         const res = data.filter(r => r.gen.includes(g))
               $("#contenido").append(tituloCateroria(g))
               for (const r of res)
                  $("#contenido").append(buildCard(r))
         }
}

function muestroTodo(c) {
   armoVistaFull(c)
}

async function recuperoContenido() {
   contenidoJSON = JSON.parse(localStorage.contenidoJSON)
}

function recargoContenido() {
   cargoContenidoStreaming()
}

function muestroGeneros() {
   if (localStorage.contenidoJSON == undefined || localStorage.contenidoJSON == "") {
      cargoContenidoStreaming()
   }
   recuperoContenido()
   agrupoPorGenero(gen, contenidoJSON)
}

$("#btnTodos").click(()=> {
   recuperoContenido()
   muestroTodo(contenidoJSON)
})

$("#btnCategorias").click(()=> {
   muestroGeneros()
})

$("#btnRecargar").click(()=> {
   recargoContenido()
   location.reload()
})