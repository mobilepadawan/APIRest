debugger
function recuperoContenidoStreaming() {
   $("#contenido").html("")
   $.ajax({
      url: URL_CONTENIDO,
      dataType: "json",
      success: function(data) {
         contenidoJSON = data
         muestroGeneros()
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

setTimeout(() => {
   recuperoContenidoStreaming()
   $('#contenido').fadeIn("slow", ()=> $('#visualizacion').fadeIn(1000, ()=> $('#cargando').fadeOut(200)))}, 1000)

function verDetalle(i) {
   if (contenidoJSON.length == 0)
      contenidoJSON = JSON.parse(localStorage.contenidoJSON)
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != undefined) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
      } else { //No se encontró el elemento: ${i}
         M.toast({html: "Contenido temporalmente no disponible.", classes: "red darken-3 white-text"})
      }
}

function buscarToggle() {
   $("#txtBuscar").val("")
   $("#divBuscar").slideToggle()
   $("#txtBuscar").focus()
}

$("#txtBuscar").on("keypress", function(e) {
   if (e.keyCode === 13)
      buscarContenido($("#txtBuscar").val())
})

function tituloCateroria(g) {
   return `<div class="col s12 m12 l12">
               <div class="center" width="100%">
                   <h2 class="white-text vertical-spaces">${g}</h2>
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

function agrupoPorGenero(GEN, data) {   
   $("#contenido").html("")
   for (const g of GEN) {
         const res = data.filter(r => r.gen.includes(g))
               $("#contenido").append(tituloCateroria(g))
               for (const r of res)
                  $("#contenido").append(buildCard(r))
         }
}

function muestroTodo(c) {
   armoVistaFull(c)
}

function recuperoContenido() {
      recargoContenido()
}

function recargoContenido() {
   recuperoContenidoStreaming()
}

function muestroGeneros() {
      agrupoPorGenero(GEN, contenidoJSON)
}

$("#btnTodos").click(()=> {
   recuperoContenido()
   muestroTodo(contenidoJSON)
})

$("#btnCategorias").click(()=> muestroGeneros())

$("#btnRecargar").click(()=> {
   recargoContenido()
   location.reload()
})