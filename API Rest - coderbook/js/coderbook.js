let HTMLTabla = "<h4>Resultados</h4>"
let HTMLCard = ""
let contenidoJSON = ""
let btnbuscar = document.getElementById("btnbuscar")

function cargoContenidoStreaming() {
   $.ajax({
      type: 'GET',
      crossDomain: true,
      url: 'https://randomuser.me/api/?results=25',
      dataType: 'json',
      success: function(data) {
         console.log(JSON.stringify(data))
         contenidoJSON = data.results
         for (let i in contenidoJSON) {
            HTMLTabla += `<tbody>
                           <tr class="white">
                              <td><img src="${contenidoJSON[i].picture.large}" class="circle responsive-img"></td>
                              <td>${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</td>
                              <td>${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</td>
                              <td>${contenidoJSON[i].dob.age} años</td>
                              <td class="blue-text">${contenidoJSON[i].email}</td>
                           </tr>
                        </tbody>`
            $("#tabladeresultado").html(HTMLTabla)
            $('#contenido').fadeIn("slow", function() {$('#cargando').slideUp(1000)})
         };
      },
      error: function() {
         HTMLCard = "<div class='lightgrey-text wide-80'>" +
                     "<br><br>" +
                     "<br><br>" +
                     "<h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>" +
                     "<br><br>" +
                     "<i class='medium material-icons'>sentiment_very_dissatisfied</i>" +
                     "<br><br>" +
                     "</div>"
         $("#contenido").html(HTMLCard)
         $("#cargando").hide()
         $('#contenido').slideDown("fast")
      }
   }
   )
}

btnbuscar.addEventListener("click", cargoContenidoStreaming)