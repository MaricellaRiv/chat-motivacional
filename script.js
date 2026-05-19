// =====================================================
// CHAT MOTIVACIONAL BÍBLICO — Lógica principal
// =====================================================

// -------------------------------------------------------
// 1. BASE DE DATOS DE EMOCIONES
//    Cada emoción tiene:
//    - palabrasClave: palabras que la identifican en el texto
//    - badge: etiqueta visible y clase CSS de color
//    - versiculos: array de versículos posibles (se elige uno)
//    - mensaje: texto de acompañamiento humano
// -------------------------------------------------------
const emociones = {

  tristeza: {
    palabrasClave: [
      "triste", "tristeza", "llorar", "lloro", "llorando", "llanto",
      "solo", "soledad", "vacío", "vacía", "perdido", "perdida",
      "deprimido", "deprimida", "melancolía", "melancólico",
      "pena", "dolor", "sufrimiento", "sufriendo", "herido", "herida",
      "abandonado", "abandonada", "roto", "rota", "sin esperanza",
      "desolado", "desolada", "oscuridad", "oscuro"
    ],
    badge: { texto: "😔 Tristeza detectada", clase: "badge-tristeza" },
    versiculos: [
      {
        texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.",
        ref: "— Salmos 34:18"
      },
      {
        texto: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
        ref: "— 1 Pedro 5:7"
      },
      {
        texto: "Él sana a los quebrantados de corazón, y venda sus heridas.",
        ref: "— Salmos 147:3"
      },
      {
        texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
        ref: "— Mateo 11:28"
      }
    ],
    mensaje: "Dios ve cada lágrima tuya. No estás solo/a en este momento — Él está más cerca de ti de lo que imaginas."
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
    badge: { texto: "😰 Ansiedad detectada", clase: "badge-ansiedad" },
    versiculos: [
      {
        texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.",
        ref: "— Juan 14:1"
      },
      {
        texto: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones.",
        ref: "— Filipenses 4:6-7"
      },
      {
        texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.",
        ref: "— Proverbios 3:5"
      },
      {
        texto: "Jehová es mi pastor; nada me faltará.",
        ref: "— Salmos 23:1"
      }
    ],
    mensaje: "Respira profundo. Dios conoce cada detalle de tu situación y tiene el control. Puedes confiarle tu futuro."
  },

  miedo: {
    palabrasClave: [
      "miedo", "temor", "asustado", "asustada", "aterrorizado",
      "aterrorizada", "pánico", "panico", "terror", "aterrado",
      "aterrada", "inseguro", "insegura", "vulnerable", "amenazado",
      "amenazada", "peligro", "no me atrevo", "me da miedo",
      "temo", "espanto", "espantado"
    ],
    badge: { texto: "😨 Miedo detectado", clase: "badge-miedo" },
    versiculos: [
      {
        texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
        ref: "— Isaías 41:10"
      },
      {
        texto: "El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me he de atemorizar?",
        ref: "— Salmos 27:1"
      },
      {
        texto: "No os he dado espíritu de cobardía, sino de poder, de amor y de dominio propio.",
        ref: "— 2 Timoteo 1:7"
      }
    ],
    mensaje: "El miedo es real, pero Dios es más grande. Él camina contigo en la oscuridad y te da valentía para seguir."
  },

  desmotivacion: {
    palabrasClave: [
      "desmotivado", "desmotivada", "cansado", "cansada",
      "sin ganas", "sin fuerzas", "rendirse", "rendido", "rendida",
      "fracasado", "fracasada", "fracaso", "inútil", "imposible",
      "no puedo", "derrota", "derrotado", "derrotada", "agotado",
      "agotada", "sin energía", "sin energia", "no sirvo",
      "no vale la pena", "qué caso tiene", "que caso tiene",
      "para qué", "para que", "me rindo", "no hay caso"
    ],
    badge: { texto: "😞 Desmotivación detectada", clase: "badge-desmotivacion" },
    versiculos: [
      {
        texto: "Todo lo puedo en Cristo que me fortalece.",
        ref: "— Filipenses 4:13"
      },
      {
        texto: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán y no se cansarán; caminarán y no se fatigarán.",
        ref: "— Isaías 40:31"
      },
      {
        texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.",
        ref: "— Gálatas 6:9"
      },
      {
        texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.",
        ref: "— Jeremías 29:11"
      }
    ],
    mensaje: "Tus fuerzas pueden acabarse, pero las fuerzas de Dios son infinitas. Él puede renovarte desde adentro."
  },

  agradecimiento: {
    palabrasClave: [
      "agradecido", "agradecida", "gracias", "bendecido", "bendecida",
      "bendición", "bendicion", "afortunado", "afortunada",
      "gratitud", "dichoso", "dichosa", "feliz de tener",
      "qué bueno", "que bueno", "doy gracias", "gracias a dios",
      "dios es bueno", "maravilloso", "maravillosa", "privilegiado",
      "privilegiada", "reconocido", "reconocida"
    ],
    badge: { texto: "🙏 Agradecimiento detectado", clase: "badge-agradecimiento" },
    versiculos: [
      {
        texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",
        ref: "— 1 Tesalonicenses 5:18"
      },
      {
        texto: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.",
        ref: "— Salmos 136:1"
      },
      {
        texto: "Engrandezcan al Señor conmigo, y exaltemos su nombre a una.",
        ref: "— Salmos 34:3"
      }
    ],
    mensaje: "El corazón agradecido es un corazón abierto a más bendiciones. Dios escucha tu gratitud con amor."
  },

  alegria: {
    palabrasClave: [
      "feliz", "alegre", "contento", "contenta", "emocionado",
      "emocionada", "gozo", "gozoso", "gozosa", "celebrar",
      "celebración", "celebracion", "bien", "genial", "excelente",
      "maravilloso", "maravillosa", "increíble", "increible",
      "emocionante", "eufórico", "eufórica", "satisfecho",
      "satisfecha", "pleno", "plena", "radiante", "lleno de alegría"
    ],
    badge: { texto: "😊 Alegría detectada", clase: "badge-alegria" },
    versiculos: [
      {
        texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.",
        ref: "— Salmos 118:24"
      },
      {
        texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!",
        ref: "— Filipenses 4:4"
      },
      {
        texto: "El corazón alegre constituye buen remedio.",
        ref: "— Proverbios 17:22"
      }
    ],
    mensaje: "¡Qué hermoso que te sientas bien! Dios se alegra contigo. Comparte esa luz con quienes te rodean."
  },

  // Fallback: si no se detecta ninguna emoción clara
  general: {
    palabrasClave: [],
    badge: { texto: "✨ Mensaje para ti", clase: "badge-general" },
    versiculos: [
      {
        texto: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti.",
        ref: "— Números 6:24-25"
      },
      {
        texto: "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás.",
        ref: "— Juan 4:14"
      },
      {
        texto: "Encomienda al Señor tus afanes, y él te sostendrá.",
        ref: "— Salmos 55:22"
      }
    ],
    mensaje: "Sea cual sea tu situación hoy, Dios tiene una palabra especial para ti. Él nunca te deja sin respuesta."
  }

};


// -------------------------------------------------------
// 2. FUNCIÓN PRINCIPAL: analizarEmocion()
//    - Lee el texto del usuario
//    - Llama al detector de emociones
//    - Muestra el resultado en pantalla
// -------------------------------------------------------
function analizarEmocion() {
  const input = document.getElementById("userInput");
  const texto = input.value.trim();

  // Validar que el usuario haya escrito algo
  if (!texto) {
    input.focus();
    input.style.borderColor = "#f87171";
    setTimeout(() => { input.style.borderColor = "#c7d2fe"; }, 1500);
    return;
  }

  // Detectar la emoción dominante en el texto
  const emocionDetectada = detectarEmocion(texto);

  // Elegir un versículo al azar dentro de la emoción detectada
  const versiculoElegido = elegirVersiculo(emocionDetectada.versiculos);

  // Mostrar el resultado en la tarjeta de resultados
  mostrarResultado(emocionDetectada, versiculoElegido);
}


// -------------------------------------------------------
// 3. FUNCIÓN: detectarEmocion(texto)
//    - Convierte el texto a minúsculas
//    - Cuenta cuántas palabras clave de cada emoción aparecen
//    - Devuelve la emoción con mayor puntaje
// -------------------------------------------------------
function detectarEmocion(texto) {
  const textoMinusculas = texto.toLowerCase();

  let maxPuntaje = 0;
  let emocionGanadora = "general";

  // Recorrer cada emoción y contar coincidencias
  for (const [nombreEmocion, datos] of Object.entries(emociones)) {
    if (nombreEmocion === "general") continue; // El fallback no se evalúa

    let puntaje = 0;

    for (const palabra of datos.palabrasClave) {
      if (textoMinusculas.includes(palabra)) {
        puntaje++; // Sumar 1 por cada palabra clave encontrada
      }
    }

    // Guardar la emoción con más coincidencias
    if (puntaje > maxPuntaje) {
      maxPuntaje = puntaje;
      emocionGanadora = nombreEmocion;
    }
  }

  return emociones[emocionGanadora];
}


// -------------------------------------------------------
// 4. FUNCIÓN: elegirVersiculo(versiculos)
//    - Devuelve un versículo al azar del array de la emoción
//    - Así la app no siempre repite el mismo versículo
// -------------------------------------------------------
function elegirVersiculo(versiculos) {
  const indice = Math.floor(Math.random() * versiculos.length);
  return versiculos[indice];
}


// -------------------------------------------------------
// 5. FUNCIÓN: mostrarResultado(emocion, versiculo)
//    - Inyecta el contenido en el HTML
//    - Muestra la tarjeta de resultado con animación
//    - Oculta la tarjeta de entrada
// -------------------------------------------------------
function mostrarResultado(emocion, versiculo) {
  // Rellenar los elementos del resultado
  const badge = document.getElementById("emotionBadge");
  badge.textContent = emocion.badge.texto;
  badge.className = "emotion-badge " + emocion.badge.clase;

  document.getElementById("verseText").textContent = `"${versiculo.texto}"`;
  document.getElementById("verseRef").textContent = versiculo.ref;
  document.getElementById("verseMessage").textContent = emocion.mensaje;

  // Mostrar tarjeta de resultado (quitar clase "hidden")
  const resultCard = document.getElementById("resultCard");
  resultCard.classList.remove("hidden");

  // Hacer scroll suave hacia el resultado
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });

  // Ocultar la tarjeta de entrada para dar protagonismo al resultado
  document.querySelector(".input-card").style.display = "none";
}


// -------------------------------------------------------
// 6. FUNCIÓN: limpiar()
//    - Limpia el input y vuelve al estado inicial
// -------------------------------------------------------
function limpiar() {
  document.getElementById("userInput").value = "";
  document.getElementById("resultCard").classList.add("hidden");
  document.querySelector(".input-card").style.display = "block";
  document.getElementById("userInput").focus();

  // Scroll hacia arriba
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// -------------------------------------------------------
// 7. EXTRA: Permitir enviar con la tecla Enter + Ctrl
// -------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("userInput");
  textarea.addEventListener("keydown", (e) => {
    // Ctrl + Enter para enviar (Enter solo hace salto de línea en textarea)
    if (e.key === "Enter" && e.ctrlKey) {
      analizarEmocion();
    }
  });
});
