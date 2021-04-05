let HTMLTable = ""
let HTMLtrailer = ""

$(()=> {
   $.getJSON("js/coderflix.json", function(response, status) {
      if (status === "success") {
         let contenido = response.find(c => c.id == localStorage.movie)
         let movieOrSeries = `<td class="yellow-text">TEMPORADAS</td><td>${contenido.temporadas}</td>`
            if (contenido.temporadas == "N/A") {
               movieOrSeries = `<td class="yellow-text">DURACIÓN</td><td>${contenido.temporadas}</td>`
            }
            HTMLTable = `<div class="row center">
                           <div class="col s12 m5 l4 center-align">
                              <img src="${contenido.poster}" width="200px">
                           </div>
                           <div class="col s12 m7 l8">
                           <table>
                              <tbody class="white-text">
                                 <tr>
                                 <td class="yellow-text">TÍTULO</td>
                                 <td><h5>${contenido.titulo}</h5></td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">CATEGORÍA</td>
                                 <td>${contenido.categoria}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">GÉNERO</td>
                                 <td>${contenido.genero}</td>
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">RESUMEN</td>
                                 <td>${contenido.resumen}</td>
                                 </tr>
                                 <tr>
                                 ${movieOrSeries}
                                 </tr>
                                 <tr>
                                 <td class="yellow-text">REPARTO</td>
                                 <td><h6>${contenido.reparto}</h6></td>
                                 </tr>
                              </tbody>
                           </table>
                           </div>
                           </div>`
                           $("#contenido").html(HTMLTable)
                           if (contenido.trailer != undefined) {
                                 HTMLtrailer = `<div class="video-container">
                                    <iframe width="560" height="315" src="${contenido.trailer}" frameborder="0" encrypted-media; allowfullscreen></iframe>
                                 </div>`
                                 $("#trailer").html(HTMLtrailer)
                           }
      }
   })
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