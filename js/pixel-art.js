var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var teclaMousePulsada = false;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById("paleta");
var grilla_pixeles = document.getElementById("grilla-pixeles");
var guardar_pixel= ["#grilla-pixeles"];//HACER UN ARRAY EN LA VARIABLE(GUARDAR EN  EL ARRAY LOS  DIV)
var borrar=document.getElementById("borrar");

  $("#borrar").click(function(){
  $("#grilla-pixeles div").animate({"background-color": "#FFFFFF"},5000);

});
  $("#guardar").click(function(){
   guardarPixelArt();
 });
 
 $("#batman").click(function(){
    cargarSuperheroe(batman);

 });

 $("#flash").click(function(){
    cargarSuperheroe(flash);

 });
 $("#wonder").click(function(){
    cargarSuperheroe(wonder);

 });
 $("#invisible").click(function(){
    cargarSuperheroe(invisible);

 });
    
    

grilla_pixeles.addEventListener('mousedown',
  (
    function(){
      teclaMousePulsada = true;

      console.log("Tecla de mouse pulsada");
    }
  )

);

grilla_pixeles.addEventListener('mouseup',
  (
    function(){

      teclaMousePulsada = false;

      console.log("Tecla soltada");
    }
  )
);

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;

    // Completar para que cambie el indicador-de-color al colorActual
    var indicadorDeColor = document.getElementById("indicador-de-color");

    indicadorDeColor.style.backgroundColor = colorActual;
  })
);


function crearPaletaDeColores(){

  for (var i=0; i < nombreColores.length; i++){

    paleta.innerHTML += "<div onclick=\"cambiarIndicadorColor('" + nombreColores[i] + "');\" class=\"color-paleta\" style=\"background-color: " + nombreColores[i] +  "\"></div>";

  }

}

function crearGrillaDePixeles(){
  
  for (var i=0; i<1750; i++){
      grilla_pixeles.innerHTML += "<div onmouseover=\"pintarPixel(this, false);\" onclick=\"pintarPixel(this, true);\">";
  }

}

function pintarPixel(pixel, forzarPintado){

  if ( teclaMousePulsada == true || forzarPintado == true ){
    var indicadorDeColor = document.getElementById("indicador-de-color");

    pixel.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }

}

function cambiarIndicadorColor(color)
{
  var indicadorDeColor = document.getElementById("indicador-de-color");


  indicadorDeColor.style.backgroundColor = color;
  

//NO COLOCAR DOCUMENT Y HACER UN FOR EACH Y  BUSCAR EN GOGLE COMO BORRAR CON ANIMATE()
}





crearPaletaDeColores();

crearGrillaDePixeles();