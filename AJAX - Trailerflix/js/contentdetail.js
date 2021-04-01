let HTMLTable = ""
let HTMLtrailer = ""
let informacionDeContenido = ""
$(document).ready(function() {
   if (localStorage.contenido != undefined) {
      informacionDeContenido = JSON.parse(localStorage.contenido)
      console.table(informacionDeContenido)
      HTMLTable = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                        <img src="${informacionDeContenido.poster}" width="200px">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text">TÍTULO</td>
                           <td><h5>${informacionDeContenido.titulo}</h5></td>
                           </tr>
                           <tr>
                           <td class="yellow-text">CATEGORÍA</td>
                           <td>${informacionDeContenido.categoria}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">GÉNERO</td>
                           <td>${informacionDeContenido.genero}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">RESUMEN</td>
                           <td>${informacionDeContenido.resumen}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">TEMPORADAS</td>
                           <td>${informacionDeContenido.temporadas}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">REPARTO</td>
                           <td><h6>${informacionDeContenido.reparto}</h6></td>
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