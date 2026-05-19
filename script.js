// =============================================================
// ALMA SERENA - Logica principal
// =============================================================

const emociones = {
  tristeza: {
    palabrasClave: [
      "triste", "tristeza", "llorar", "lloro", "llorando", "llanto",
      "solo", "soledad", "vacio", "vacia", "vacío", "vacía", "perdido", "perdida",
      "deprimido", "deprimida", "melancolia", "melancolía", "melancolico", "melancólico",
      "pena", "dolor", "sufrimiento", "sufriendo", "herido", "herida",
      "abandonado", "abandonada", "roto", "rota", "sin esperanza",
      "desolado", "desolada", "oscuridad"
    ],
    foto: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Hoy reconozco lo que siento, y en esa honestidad encuentro valentía. Elijo caminar con esperanza y confiar en que esta tristeza no tendrá la última palabra en mi historia.",
    versiculos: [
      { texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.", ref: "Salmos 34:18" },
      { texto: "Él sana a los quebrantados de corazón, y venda sus heridas.", ref: "Salmos 147:3" },
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", ref: "Mateo 11:28" },
      { texto: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.", ref: "1 Pedro 5:7" }
    ],
    mensaje: "Dios ve cada lágrima tuya. No estás solo/a; Él está más cerca de lo que imaginas."
  },

  ansiedad: {
    palabrasClave: [
      "ansioso", "ansiosa", "ansiedad", "estresado", "estresada",
      "estres", "estrés", "preocupado", "preocupada", "preocupacion", "preocupación",
      "nervioso", "nerviosa", "nervios", "agobiado", "agobiada",
      "abrumado", "abrumada", "angustia", "angustiado", "angustiada",
      "tension", "tensión", "inquieto", "inquieta", "intranquilo",
      "intranquila", "futuro", "incertidumbre", "no se que hacer", "no sé qué hacer"
    ],
    foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Aunque mi mente quiere controlarlo todo, hoy decido soltar lo que no está en mis manos. Confío en que hay una fuerza mayor que guía mis pasos y cuida cada detalle de mi vida.",
    versiculos: [
      { texto: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios guardará vuestros corazones.", ref: "Filipenses 4:6-7" },
      { texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.", ref: "Juan 14:1" },
      { texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.", ref: "Proverbios 3:5" },
      { texto: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" }
    ],
    mensaje: "Respira. Dios conoce cada detalle de tu situación y tiene el control. Puedes confiarle tu futuro."
  },

  miedo: {
    palabrasClave: [
      "miedo", "temor", "asustado", "asustada", "aterrorizado",
      "aterrorizada", "panico", "pánico", "terror", "aterrado",
      "aterrada", "inseguro", "insegura", "vulnerable", "amenazado",
      "amenazada", "peligro", "no me atrevo", "me da miedo",
      "temo", "espanto", "espantado"
    ],
    foto: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Aunque hoy siento miedo, decido recordar que no estoy solo/a. Llevo dentro una fortaleza más grande de lo que creo, y Dios camina delante de mí abriendo el camino.",
    versiculos: [
      { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", ref: "Isaías 41:10" },
      { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me he de atemorizar?", ref: "Salmos 27:1" },
      { texto: "No os he dado espíritu de cobardía, sino de poder, de amor y de dominio propio.", ref: "2 Timoteo 1:7" }
    ],
    mensaje: "El miedo es real, pero Dios es más grande. Él camina contigo y te da valentía para seguir adelante."
  },

  desmotivacion: {
    palabrasClave: [
      "desmotivado", "desmotivada", "cansado", "cansada",
      "sin ganas", "sin fuerzas", "rendirse", "rendido", "rendida",
      "fracasado", "fracasada", "fracaso", "inutil", "inútil", "imposible",
      "no puedo", "derrota", "derrotado", "derrotada", "agotado",
      "agotada", "sin energia", "sin energía", "no sirvo",
      "no vale la pena", "para que", "para qué", "me rindo"
    ],
    foto: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Hoy puede ser un día difícil, pero no es el final de mi historia. Me levanto un paso a la vez, sabiendo que mis fuerzas se renuevan y que lo mejor de mi vida aún está por venir.",
    versiculos: [
      { texto: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
      { texto: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán y no se cansarán; caminarán y no se fatigarán.", ref: "Isaías 40:31" },
      { texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", ref: "Gálatas 6:9" },
      { texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.", ref: "Jeremías 29:11" }
    ],
    mensaje: "Tus fuerzas pueden acabarse, pero las fuerzas de Dios son infinitas. Él puede renovarte desde adentro."
  },

  agradecimiento: {
    palabrasClave: [
      "agradecido", "agradecida", "gracias", "bendecido", "bendecida",
      "bendicion", "bendición", "afortunado", "afortunada",
      "gratitud", "dichoso", "dichosa", "feliz de tener",
      "que bueno", "qué bueno", "doy gracias", "gracias a dios",
      "dios es bueno", "privilegiado", "privilegiada"
    ],
    foto: "https://images.unsplash.com/photo-1490750967868-88df5691cc88?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Mi corazón agradecido es una puerta abierta a más bendiciones. Hoy elijo ver todo lo bueno que me rodea y multiplicarlo con mi actitud y mis palabras.",
    versiculos: [
      { texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", ref: "1 Tesalonicenses 5:18" },
      { texto: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.", ref: "Salmos 136:1" },
      { texto: "Engrandezcan al Señor conmigo, y exaltemos su nombre a una.", ref: "Salmos 34:3" }
    ],
    mensaje: "El corazón agradecido es un corazón abierto a más bendiciones. Dios escucha tu gratitud con amor."
  },

  alegria: {
    palabrasClave: [
      "feliz", "alegre", "contento", "contenta", "emocionado",
      "emocionada", "gozo", "gozoso", "gozosa", "celebrar",
      "celebracion", "celebración", "genial", "excelente",
      "maravilloso", "maravillosa", "increible", "increíble",
      "emocionante", "satisfecho", "satisfecha", "pleno", "plena",
      "radiante", "lleno de alegria", "lleno de alegría"
    ],
    foto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Esta alegría que siento es un regalo y quiero cuidarla. La abrazo, la disfruto plenamente y la comparto, porque la luz que hay en mí puede iluminar a quienes me rodean.",
    versiculos: [
      { texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", ref: "Salmos 118:24" },
      { texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!", ref: "Filipenses 4:4" },
      { texto: "El corazón alegre constituye buen remedio.", ref: "Proverbios 17:22" }
    ],
    mensaje: "Dios te recuerda que la alegría que viene de Él fortalece tu alma y te llena de esperanza."
  },

  general: {
    palabrasClave: [],
    foto: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=82",
    afirmacion: "Hoy, sin importar lo que esté pasando, elijo recordar que soy valioso/a y amado/a. Cada nuevo día trae consigo posibilidades que aún no puedo ver, pero que están llegando.",
    versiculos: [
      { texto: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti.", ref: "Números 6:24-25" },
      { texto: "Encomienda al Señor tus afanes, y él te sostendrá.", ref: "Salmos 55:22" },
      { texto: "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás.", ref: "Juan 4:14" }
    ],
    mensaje: "Sea cual sea tu situación hoy, Dios tiene una palabra especial para ti. Él nunca te deja sin respuesta."
  }
};

function analizarEmocion() {
  const input = document.getElementById("userInput");
  const texto = input.value.trim();

  if (!texto) {
    input.classList.add("input-error");
    input.focus();
    setTimeout(() => input.classList.remove("input-error"), 1600);
    return;
  }

  const emocion = detectarEmocion(texto);
  const versiculo = elegirVersiculo(emocion.versiculos);

  mostrarResultado(emocion, versiculo);
  input.value = "";
}

function detectarEmocion(texto) {
  const textoMin = texto.toLowerCase();
  let maxPuntaje = 0;
  let ganadora = "general";

  for (const [nombre, datos] of Object.entries(emociones)) {
    if (nombre === "general") continue;

    const puntaje = datos.palabrasClave.reduce((total, palabra) => {
      return textoMin.includes(palabra) ? total + 1 : total;
    }, 0);

    if (puntaje > maxPuntaje) {
      maxPuntaje = puntaje;
      ganadora = nombre;
    }
  }

  return emociones[ganadora];
}

function elegirVersiculo(versiculos) {
  return versiculos[Math.floor(Math.random() * versiculos.length)];
}

function mostrarResultado(emocion, versiculo) {
  document.getElementById("affirmationText").textContent = emocion.afirmacion;

  const img = document.getElementById("versePhoto");
  img.style.display = "block";
  img.src = emocion.foto;
  img.onerror = () => {
    img.style.display = "none";
  };

  document.getElementById("verseText").textContent = versiculo.texto;
  document.getElementById("verseRef").textContent = versiculo.ref;
  document.getElementById("verseMessage").textContent = emocion.mensaje;

  document.getElementById("inputCard").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function limpiar() {
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("inputCard").classList.remove("hidden");

  const input = document.getElementById("userInput");
  input.value = "";
  input.classList.remove("input-error");

  const img = document.getElementById("versePhoto");
  img.style.display = "block";
  img.onerror = null;
  img.src = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => input.focus(), 300);
}
