/* =========================================================
   CONFIGURACIÓN DEL LOCAL
   Este es el ÚNICO archivo que hay que cambiar para un
   restaurante nuevo. Cambiá solo lo que está entre comillas
   o los números. No borres comas ni llaves.
   ========================================================= */
window.CONFIG = {
  // --- Datos del local ---
  nombre: "Bar Demo",
  bajada: "Tragos, picadas y buena música en el centro.",
  logo: "", // ruta a la imagen, ej: "img/logo.png". Vacío = muestra el nombre en texto.

  direccion: "Av. Siempre Viva 123, Córdoba",
  linkMapa: "https://maps.google.com/?q=Av.+Siempre+Viva+123,+Córdoba",
  horarioTexto: [
    "Martes a jueves: 19 a 00 h",
    "Viernes y sábado: 19 a 02 h",
    "Domingo: 19 a 00 h",
    "Lunes: cerrado"
  ],

  // --- Contacto ---
  // WhatsApp del dueño: solo números, con código de país y sin el 15.
  // Ej. Córdoba: 549 + 351 + número  ->  "5493511234567"
  whatsapp: "5493510000000",
  mensajeWhatsapp: "Hola Bar Demo, quería hacer una consulta:",
  instagram: "", // ej: "https://instagram.com/bardemo" (vacío = no se muestra)

  // --- Reseñas de Google ---
  // Link "pedir reseñas" de la ficha de Google Business Profile.
  linkResenaGoogle: "https://search.google.com/local/writereview?placeid=COMPLETAR",

  // --- Reservas ---
  reservas: {
    horaDesde: "19:00",
    horaHasta: "23:30",       // último turno que se puede elegir
    intervaloMinutos: 30,
    diasCerrado: [1],          // 0=domingo, 1=lunes, ... 6=sábado
    maxPersonas: 20,
    diasAnticipacionMax: 60
  },

  // --- Tarjeta de visitas ---
  visitasParaBeneficio: 5,     // tiene que coincidir con UMBRAL_VISITAS del Apps Script
  textoBeneficio: "un trago de la casa gratis",

  // --- Colores ---
  colores: {
    primario: "#2f3e46",       // botones y títulos
    acento: "#c9a227",         // detalles
    fondo: "#f6f5f2",
    tarjeta: "#ffffff",
    texto: "#1f2421"
  },

  // --- Conexión con la planilla (Apps Script) ---
  // Pegá acá la URL que termina en /exec. Vacío = modo demo (carta de ejemplo, sin guardar datos).
  urlAppsScript: ""
};
