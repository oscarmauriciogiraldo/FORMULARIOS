//chosen institución
$('.chosenAlcaldia, .chosenColonia').chosen({no_results_text: "No hay resultados...",allow_single_deselect: true});
$(".chosenAlcaldia").chosen().on("change", function(event) { 
                    document.getElementById('colonia').value = "" ;
                    $(".chosenColonia").trigger('chosen:updated');                                                                                                       
                    });
$(".chosenColonia").chosen().on("chosen:showing_dropdown", function(event) {  
                    $(".chosenColonia").trigger('chosen:updated');                                                                           
                    });