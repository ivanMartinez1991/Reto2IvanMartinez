function obtenerCliente(){
   

    $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
        type: "GET",
        datatype:"JSON",
        success:function(response) {
            console.log(response);
            printResp(response.items);
         
         }

                
   });


}

function printResp(items){
   
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+ items[i].id+"</td>";
        myTable+="<td>"+ items[i].name+"</td>";
        myTable+="<td>"+ items[i].email+"</td>";
        myTable+="<td>"+ items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarItem("+items[i].id+")'>Borrar Datos</button>";
        myTable+="</tr>";


    }
    myTable+="</table>";
    $("#datos").append(myTable);

}



function guardarCliente(){
     let misDatos={
         id:$("#id").val(),
         name:$("#name").val(),
         email:$("#email").val(),
         age:$("#age").val(),


     };
     let dataToSend=JSON.stringify(misDatos);
     $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
        type: "POST",
        data:misDatos,
        datatype:"JSON",
        success:function(response){
           $("#datos").empty();
           $("#id").val("");
           $("#name").val("");
           $("#email").val("");
           $("#age").val("");
           obtenerCliente();
           alert(" Se han GUARDADO los datos");
           

        }
         
    });
}


function actuaCliente(){
    let misDatos={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),


    };
    console.log(misDatos);
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
       url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
       type: "PUT",
       data:dataToSend,
       contentType:"application/JSON",
       datatype:"JSON",
       success:function(response){
          $("#datos").empty();
          $("#id").val("");
          $("#name").val("");
          $("#email").val("");
          $("#age").val("");
          obtenerCliente();
          alert(" Se han ACTUALIZADO los datos");
          
        }

        
   });
}


function borrarItem(idElement){
   let misDatos={
       id:idElement
   };
   let dataToSend=JSON.stringify(misDatos);
   $.ajax({
    url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
    type: "DELETE",
    data:dataToSend,
    contentType:"application/JSON",
    datatype:"JSON",
    success:function(response){
       $("#datos").empty();
       obtenerCliente();
       alert(" Se han ELIMINADO los datos")
      }
  });

}


//PARTYROOM





function obtenerSala(){
   

    $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/partyroom/partyroom", 
        type: "GET",
        datatype:"JSON",
        success:function(respuesta) {
            console.log(respuesta);
            printRespSala(respuesta.items);
         
         }

                
   });


}

function printRespSala(items){
   
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+ items[i].id+"</td>";
        myTable+="<td>"+ items[i].owner+"</td>";
        myTable+="<td>"+ items[i].capacity+"</td>";
        myTable+="<td>"+ items[i].category_id+"</td>";
        myTable+="<td>"+ items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarItemSala("+items[i].id+")'>Borrar Datos</button>";
        myTable+="</tr>";


    }
    myTable+="</table>";
    $("#salon").append(myTable);

}



function guardarSala(){
     let miSala={
         id:$("#idsala").val(),
         owner:$("#owner").val(),
         capacity:$("#capacity").val(),
         category_id:$("#category_id").val(),
         name:$("#namesala").val(),


     };
     let dataToSend=JSON.stringify(miSala);
     $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/partyroom/partyroom", 
        type: "POST",
        data:miSala,
        datatype:"JSON",
        success:function(respuesta){
           $("#salon").empty();
           $("#id").val("");
           $("#owner").val("");
           $("#capacity").val("");
           $("#category_id").val("");
           $("#name").val("");
           obtenerSala();
           alert(" Se han GUARDADO los datos");
           

        }
         
    });
}


function actualizaSala(){
    let miSala={
         id:$("#idsala").val(),
         owner:$("#owner").val(),
         capacity:$("#capacity").val(),
         category_id:$("#category_id").val(),
         name:$("#namesala").val(),


    };
    console.log(miSala);
    let dataToSend=JSON.stringify(miSala);
    $.ajax({
       url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/partyroom/partyroom", 
       type: "PUT",
       data:dataToSend,
       contentType:"application/JSON",
       datatype:"JSON",
       success:function(respuesta){
        $("#salon").empty();
        $("#id").val("");
        $("#owner").val("");
        $("#capacity").val("");
        $("#category_id").val("");
        $("#name").val("");
        obtenerSala();
        alert(" Se han ACTUALIZADO los datos");
          
        }

        
   });
}


function borrarItemSala(idElement){
   let miSala={
       id:idElement
   };
   let dataToSend=JSON.stringify(miSala);
   $.ajax({
    url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/partyroom/partyroom", 
    type: "DELETE",
    data:dataToSend,
    contentType:"application/JSON",
    datatype:"JSON",
    success:function(respuesta){
       $("#salon").empty();
       obtenerSala();
       alert(" Se han ELIMINADO los datos")
      }
  });

}

// MENSAJE


function obtenerMensaje(){
   

    $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", 
        type: "GET",
        datatype:"JSON",
        success:function(respuesta) {
            console.log(respuesta);
            printMensaje(respuesta.items);
         
         }

                
   });


}

function printMensaje(items){
   
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+ items[i].id+"</td>";
        myTable+="<td>"+ items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar Datos</button>";
        myTable+="</tr>";


    }
    myTable+="</table>";
    $("#mensajes").append(myTable);

}



function guardarMensaje(){
     let miMessage={
         id:$("#idMensaje").val(),
         messagetext:$("#messagetext").val(),
         


     };
     let dataToSend=JSON.stringify(miMessage);
     $.ajax({
        url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", 
        type: "POST",
        data:miMessage,
        datatype:"JSON",
        success:function(respuesta){
           $("#mensajes").empty();
           $("#id").val("");
           $("#messagetext").val("");
           obtenerMensaje();
           alert(" Se han GUARDADO los datos");
           

        }
         
    });
}


function actuaMensaje(){
    let miMessage={
         id:$("#idMensaje").val(),
         messagetext:$("#messagetext").val(),
       


    };
    console.log(miMessage);
    let dataToSend=JSON.stringify(miMessage);
    $.ajax({
       url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", 
       type: "PUT",
       data:dataToSend,
       contentType:"application/JSON",
       datatype:"JSON",
       success:function(respuesta){
        $("#mensajes").empty();
        $("#id").val("");
        $("#messagetext").val("");
     
        obtenerMensaje();
        alert(" Se han ACTUALIZADO los datos");
          
        }

        
   });
}


function borrarMensaje(idElement){
   let miMessage={
       id:idElement
   };
   let dataToSend=JSON.stringify(miMessage);
   $.ajax({
    url:"https://gd8163ff724b84e-db202110041900.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", 
    type: "DELETE",
    data:dataToSend,
    contentType:"application/JSON",
    datatype:"JSON",
    success:function(respuesta){
       $("#mensajes").empty();
       obtenerMensaje();
       alert(" Se han ELIMINADO los datos")
      }
  });
1
}
