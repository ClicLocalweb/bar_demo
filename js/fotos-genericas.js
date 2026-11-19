/* Fotos genéricas para la carta (fotos libres de Unsplash, uso gratuito).
   Se usan SOLO cuando el plato no tiene foto propia en la carpeta de Drive del local.
   Busca palabras en el nombre del plato; si no encuentra, en la categoría; si no, usa la foto por defecto.
   No hace falta tocar este archivo para un local nuevo. */
(function () {
  function u(id) { return "https://images.unsplash.com/" + id + "?w=600&h=450&fit=crop&auto=format&q=70"; }

  var FOTOS = {
    picada:     u("photo-1640323391688-26f3cf082e30"),
    papas:      u("photo-1639744210631-209fce3e256c"),
    rabas:      u("photo-1550942356-fcfc6eba2acb"),
    empanadas:  u("photo-1548228586-171fb0887ac0"),
    hamburguesa:u("photo-1466814314367-45323ac74e2b"),
    sandwich:   u("photo-1710532774170-9844f837ae54"),
    pizza:      u("photo-1590534247854-e97d5e3feef6"),
    ensalada:   u("photo-1522251253478-4cae03d93949"),
    gin:        u("photo-1573624658129-3f7856192f19"),
    aperol:     u("photo-1578467759626-f94129ea94a4"),
    mojito:     u("photo-1609345265499-2133bbeb6ce5"),
    cerveza:    u("photo-1529590049196-4e44469d94c7"),
    gaseosa:    u("photo-1574706226623-e5cc0da928c6"),
    flan:       u("photo-1544052387-2f094663cd94"),
    // Por categoría
    trago:      u("photo-1554226871-08ad81e212eb"),
    postre:     u("photo-1511911063855-2bf39afa5b2e"),
    entrada:    u("photo-1744848279514-b6cbcf03b5f5"),
    plato:      u("photo-1650435489945-96b2b19b943b")
  };

  // Palabras que se buscan en el nombre del plato (en este orden)
  var POR_NOMBRE = [
    [["picada", "tabla", "fiambre"], "picada"],
    [["rabas", "calamar"], "rabas"],
    [["empanada"], "empanadas"],
    [["hamburguesa", "burger"], "hamburguesa"],
    [["lomo", "lomito", "sandwich", "sanguche", "milanesa", "mila"], "sandwich"],
    [["pizza", "fugazza", "muzza"], "pizza"],
    [["ensalada", "cesar", "verde"], "ensalada"],
    [["papas", "fritas"], "papas"],
    [["fernet", "cuba", "coca", "gaseosa", "cola", "sprite", "agua", "jugo", "limonada"], "gaseosa"],
    [["gin", "tonic"], "gin"],
    [["aperol", "spritz", "campari", "negroni"], "aperol"],
    [["mojito", "caipi", "daiquiri"], "mojito"],
    [["cerveza", "pinta", "birra", "ipa", "chopp", "porron"], "cerveza"],
    [["flan", "budin", "panqueque"], "flan"]
  ];

  // Palabras que se buscan en la categoría
  var POR_CATEGORIA = [
    [["trago", "coctel", "cocktail", "aperitivo", "vino"], "trago"],
    [["bebida", "sin alcohol"], "gaseosa"],
    [["cerveza"], "cerveza"],
    [["postre", "dulce", "cafe"], "postre"],
    [["picar", "entrada", "tapeo", "compartir"], "entrada"],
    [["pizza"], "pizza"],
    [["ensalada"], "ensalada"],
    [["sandwich", "lomo", "hamburguesa"], "sandwich"]
  ];

  function normal(t) {
    return " " + String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ").trim() + " ";
  }

  function buscar(lista, texto) {
    var t = normal(texto);
    for (var i = 0; i < lista.length; i++) {
      for (var j = 0; j < lista[i][0].length; j++) {
        if (t.indexOf(" " + lista[i][0][j]) !== -1) return FOTOS[lista[i][1]];
      }
    }
    return "";
  }

  // Foto genérica para un plato. config.js puede forzar una foto por categoría (fotosPorCategoria).
  window.fotoGenerica = function (nombre, categoria) {
    var propias = (window.CONFIG && CONFIG.fotosPorCategoria) || {};
    return buscar(POR_NOMBRE, nombre) || propias[categoria] || buscar(POR_CATEGORIA, categoria) || FOTOS.plato;
  };
  window.FOTO_POR_DEFECTO = FOTOS.plato;
})();
