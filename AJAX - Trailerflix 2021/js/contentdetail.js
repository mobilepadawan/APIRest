let HTMLTable = ""
let HTMLtrailer = ""
let informacionDeContenido = ""

$(document).ready(function() {
   if (localStorage.contenido != undefined) {
      informacionDeContenido = JSON.parse(localStorage.contenido)
      let SerieOpelicula = ""
      SerieOpelicula = `<td class="yellow-text left">DURACIÓN</td><td>${informacionDeContenido.duracion}</td>`
      if (informacionDeContenido.categoria == "Serie")
         SerieOpelicula = `<td class="yellow-text left">TEMPORADAS</td><td>${informacionDeContenido.temporadas}</td>`
     HTMLTable = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                        <img src="${informacionDeContenido.poster}" width="90%">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text left">TÍTULO</td>
                           <td><strong>${informacionDeContenido.titulo}</strong></td>
                           </tr>
                           <tr>
                           <td class="yellow-text left">CATEGORÍA</td>
                           <td>${informacionDeContenido.categoria}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text left">GÉNERO</td>
                           <td>${informacionDeContenido.genero}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text left">RESUMEN</td>
                           <td>${informacionDeContenido.resumen}</td>
                           </tr>
                           <tr>
                           ${SerieOpelicula}
                           </tr>
                           <tr>
                           <td class="yellow-text left">REPARTO</td>
                           <td>${informacionDeContenido.reparto}</td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                     </div>`
      if (informacionDeContenido.trailer > "")
         HTMLtrailer = `<div class="video-container">
                           <iframe width="560" height="315" src="${informacionDeContenido.trailer}" frameborder="0" encrypted-media; allowfullscreen></iframe>
                        </div>`
         $("#trailer").html(HTMLtrailer)
   }
   $('#contenido').html(HTMLTable)
})

$(window).ready(function() {
   $('h1').fadeIn(800, function() {
      $('h4').fadeIn(500)
      $('#contenido').slideDown("slow", function() {
         $('#trailer').fadeIn()
      })
   })

   $("#retornar").click(function() {
      location.target = "_self"
      location.href = "index.html"
   })
})