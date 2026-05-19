// =============================================================
// CHAT MOTIVACIONAL BÍBLICO — Lógica principal v3
// =============================================================

// -------------------------------------------------------
// 1. BASE DE DATOS DE EMOCIONES
//    Cada emoción tiene:
//    - palabrasClave : palabras que la detectan en el texto
//    - foto          : URL de imagen inspiradora de Unsplash (gratuita)
//    - afirmacion    : frase positiva fija (NO aleatoria)
//    - versiculos    : array de versículos (se elige uno al azar)
//    - mensaje       : texto espiritual corto de cierre
// -------------------------------------------------------
const emociones = {

  tristeza: {
    palabrasClave: [
      "triste", "tristeza", "llorar", "lloro", "llorando", "llanto",
      "solo", "soledad", "vacío", "vacía", "perdido", "perdida",
      "deprimido", "deprimida", "melancolía", "melancólico",
      "pena", "dolor", "sufrimiento", "sufriendo", "herido", "herida",
      "abandonado", "abandonada", "roto", "rota", "sin esperanza",
      "desolado", "desolada", "oscuridad"
    ],
    foto: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Hoy reconozco lo que siento, y en esa honestidad encuentro valentía. Elijo caminar con esperanza y confiar en que esta tristeza no tendrá la última palabra en mi historia.",
    versiculos: [
      { texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.", ref: "— Salmos 34:18" },
      { texto: "Él sana a los quebrantados de corazón, y venda sus heridas.", ref: "— Salmos 147:3" },
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", ref: "— Mateo 11:28" },
      { texto: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.", ref: "— 1 Pedro 5:7" }
    ],
    mensaje: "Dios ve cada lágrima tuya. No estás solo/a — Él está más cerca de lo que imaginas."
  },

  ansiedad: {
    palabrasClave: [
      "ansioso", "ansiosa", "ansiedad", "estresado", "estresada",
      "estrés", "estres", "preocupado", "preocupada", "preocupación",
      "nervioso", "nerviosa", "nervios", "agobiado", "agobiada",
      "abrumado", "abrumada", "angustia", "angustiado", "angustiada",
      "tensión", "tension", "inquieto", "inquieta", "intranquilo",
      "intranquila", "futuro", "incertidumbre", "no sé qué hacer"
    ],
    foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Aunque mi mente quiere controlarlo todo, hoy decido soltar lo que no está en mis manos. Confío en que hay una fuerza mayor que guía mis pasos y cuida cada detalle de mi vida.",
    versiculos: [
      { texto: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios guardará vuestros corazones.", ref: "— Filipenses 4:6-7" },
      { texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.", ref: "— Juan 14:1" },
      { texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.", ref: "— Proverbios 3:5" },
      { texto: "Jehová es mi pastor; nada me faltará.", ref: "— Salmos 23:1" }
    ],
    mensaje: "Respira. Dios conoce cada detalle de tu situación y tiene el control. Puedes confiarle tu futuro."
  },

  miedo: {
    palabrasClave: [
      "miedo", "temor", "asustado", "asustada", "aterrorizado",
      "aterrorizada", "pánico", "panico", "terror", "aterrado",
      "aterrada", "inseguro", "insegura", "vulnerable", "amenazado",
      "amenazada", "peligro", "no me atrevo", "me da miedo",
      "temo", "espanto", "espantado"
    ],
    foto: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Aunque hoy siento miedo, decido recordar que no estoy solo/a. Llevo dentro una fortaleza más grande de lo que creo, y Dios camina delante de mí abriendo el camino.",
    versiculos: [
      { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", ref: "— Isaías 41:10" },
      { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me he de atemorizar?", ref: "— Salmos 27:1" },
      { texto: "No os he dado espíritu de cobardía, sino de poder, de amor y de dominio propio.", ref: "— 2 Timoteo 1:7" }
    ],
    mensaje: "El miedo es real, pero Dios es más grande. Él camina contigo y te da valentía para seguir adelante."
  },

  desmotivacion: {
    palabrasClave: [
      "desmotivado", "desmotivada", "cansado", "cansada",
      "sin ganas", "sin fuerzas", "rendirse", "rendido", "rendida",
      "fracasado", "fracasada", "fracaso", "inútil", "imposible",
      "no puedo", "derrota", "derrotado", "derrotada", "agotado",
      "agotada", "sin energía", "sin energia", "no sirvo",
      "no vale la pena", "para qué", "para que", "me rindo"
    ],
    foto: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Hoy puede ser un día difícil, pero no es el final de mi historia. Me levanto un paso a la vez, sabiendo que mis fuerzas se renuevan y que lo mejor de mi vida aún está por venir.",
    versiculos: [
      { texto: "Todo lo puedo en Cristo que me fortalece.", ref: "— Filipenses 4:13" },
      { texto: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán y no se cansarán; caminarán y no se fatigarán.", ref: "— Isaías 40:31" },
      { texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", ref: "— Gálatas 6:9" },
      { texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.", ref: "— Jeremías 29:11" }
    ],
    mensaje: "Tus fuerzas pueden acabarse, pero las fuerzas de Dios son infinitas. Él puede renovarte desde adentro."
  },

  agradecimiento: {
    palabrasClave: [
      "agradecido", "agradecida", "gracias", "bendecido", "bendecida",
      "bendición", "bendicion", "afortunado", "afortunada",
      "gratitud", "dichoso", "dichosa", "feliz de tener",
      "qué bueno", "que bueno", "doy gracias", "gracias a dios",
      "dios es bueno", "privilegiado", "privilegiada"
    ],
    foto: "https://images.unsplash.com/photo-1490750967868-88df5691cc88?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Mi corazón agradecido es una puerta abierta a más bendiciones. Hoy elijo ver todo lo bueno que me rodea y multiplicarlo con mi actitud y mis palabras.",
    versiculos: [
      { texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", ref: "— 1 Tesalonicenses 5:18" },
      { texto: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.", ref: "— Salmos 136:1" },
      { texto: "Engrandezcan al Señor conmigo, y exaltemos su nombre a una.", ref: "— Salmos 34:3" }
    ],
    mensaje: "El corazón agradecido es un corazón abierto a más bendiciones. Dios escucha tu gratitud con amor."
  },

  alegria: {
    palabrasClave: [
      "feliz", "alegre", "contento", "contenta", "emocionado",
      "emocionada", "gozo", "gozoso", "gozosa", "celebrar",
      "celebración", "celebracion", "genial", "excelente",
      "maravilloso", "maravillosa", "increíble", "increible",
      "emocionante", "satisfecho", "satisfecha", "pleno", "plena",
      "radiante", "lleno de alegría"
    ],
    foto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Esta alegría que siento es un regalo y quiero cuidarla. La abrazo, la disfruto plenamente y la comparto, porque la luz que hay en mí puede iluminar a quienes me rodean.",
    versiculos: [
      { texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", ref: "— Salmos 118:24" },
      { texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!", ref: "— Filipenses 4:4" },
      { texto: "El corazón alegre constituye buen remedio.", ref: "— Proverbios 17:22" }
    ],
    mensaje: "Dios te recuerda que la alegría que viene de Él fortalece tu alma y te llena de esperanza."
  },

  // Fallback: cuando no se detecta ninguna emoción clara
  general: {
    palabrasClave: [],
    foto: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=700&q=80",
    afirmacion: "Hoy, sin importar lo que esté pasando, elijo recordar que soy valioso/a y amado/a. Cada nuevo día trae consigo posibilidades que aún no puedo ver, pero que están llegando.",
    versiculos: [
      { texto: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti.", ref: "— Números 6:24-25" },
      { texto: "Encomienda al Señor tus afanes, y él te sostendrá.", ref: "— Salmos 55:22" },
      { texto: "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás.", ref: "— Juan 4:14" }
    ],
    mensaje: "Sea cual sea tu situación hoy, Dios tiene una palabra especial para ti. Él nunca te deja sin respuesta."
  }

};


// -------------------------------------------------------
// 2. FUNCIÓN PRINCIPAL: analizarEmocion()
// -------------------------------------------------------
function analizarEmocion() {
  const input = document.getElementById("userInput");
  const texto = input.value.trim();

  // Validar que haya texto
  if (!texto) {
    input.style.borderColor = "#f87171";
    input.focus();
    setTimeout(() => { input.style.borderColor = "#e4ddf5"; }, 1600);
    return;
  }

  // Detectar emoción y elegir versículo
  const emocion   = detectarEmocion(texto);
  const versiculo = elegirVersiculo(emocion.versiculos);

  // Mostrar resultado
  mostrarResultado(emocion, versiculo);
}


// -------------------------------------------------------
// 3. FUNCIÓN: detectarEmocion(texto)
//    Cuenta coincidencias de palabras clave por emoción
//    y devuelve la que tenga mayor puntaje.
// -------------------------------------------------------
function detectarEmocion(texto) {
  const textoMin = texto.toLowerCase();
  let maxPuntaje = 0;
  let ganadora   = "general";

  for (const [nombre, datos] of Object.entries(emociones)) {
    if (nombre === "general") continue;

    let puntaje = 0;
    for (const palabra of datos.palabrasClave) {
      if (textoMin.includes(palabra)) puntaje++;
    }

    if (puntaje > maxPuntaje) {
      maxPuntaje = puntaje;
      ganadora   = nombre;
    }
  }

  return emociones[ganadora];
}


// -------------------------------------------------------
// 4. FUNCIÓN: elegirVersiculo(versiculos)
//    Devuelve un versículo al azar del array de la emoción.
// -------------------------------------------------------
function elegirVersiculo(versiculos) {
  return versiculos[Math.floor(Math.random() * versiculos.length)];
}


// -------------------------------------------------------
// 5. FUNCIÓN: mostrarResultado(emocion, versiculo)
//    Llena el HTML y muestra la sección de resultado.
// -------------------------------------------------------
function mostrarResultado(emocion, versiculo) {
  // Afirmación positiva
  document.getElementById("affirmationText").textContent = emocion.afirmacion;

  // Foto inspiradora (con fallback si no carga)
  const img = document.getElementById("versePhoto");
  img.src   = emocion.foto;
  img.onerror = () => {
    // Si la imagen falla, se muestra el color de fondo del contenedor
    img.style.display = "none";
  };

  // Versículo y referencia
  document.getElementById("verseText").textContent = versiculo.texto;
  document.getElementById("verseRef").textContent  = versiculo.ref;

  // Mensaje espiritual
  document.getElementById("verseMessage").textContent = emocion.mensaje;

  // Mostrar sección de resultado
  const resultSection = document.getElementById("resultSection");
  resultSection.classList.remove("hidden");

  // Scroll suave hacia los resultados
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}


// -------------------------------------------------------
// 6. FUNCIÓN: limpiar()
//    Limpia el input y oculta la sección de resultado.
// -------------------------------------------------------
function limpiar() {
  document.getElementById("userInput").value = "";
  document.getElementById("resultSection").classList.add("hidden");

  // Restaurar imagen para la próxima vez
  const img = document.getElementById("versePhoto");
  img.style.display = "block";
  img.src = "";

  document.getElementById("userInput").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
