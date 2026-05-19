// =============================================================
// ALMA SERENA - Logica principal
// =============================================================

let ultimaRespuesta = {
  afirmacion: "",
  mensaje: "",
  versiculo: ""
};

const emociones = {
  tristeza: {
    palabrasClave: [
      "triste", "tristeza", "llorar", "lloro", "llorando", "llanto",
      "solo", "sola", "soledad", "vacio", "vacia", "perdido", "perdida",
      "deprimido", "deprimida", "melancolia", "melancolico", "melancolica",
      "pena", "dolor", "sufrimiento", "sufriendo", "herido", "herida",
      "abandonado", "abandonada", "roto", "rota", "sin esperanza",
      "desolado", "desolada", "oscuridad", "extraño", "extraño a", "me duele"
    ],
    foto: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Hoy reconozco lo que siento, y en esa honestidad encuentro valentía. Esta tristeza no tendrá la última palabra en mi historia.",
      "Aunque mi corazón esté cansado, sigo siendo amado/a, valioso/a y digno/a de esperanza. Dios también está conmigo en este momento.",
      "Puedo avanzar despacio. No necesito tener todo resuelto hoy; solo necesito permitirme respirar y recibir consuelo.",
      "Mis lágrimas no son debilidad. Son una señal de que mi corazón sigue vivo, sensible y capaz de sanar."
    ],
    versiculos: [
      { texto: "El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.", ref: "Salmos 34:18" },
      { texto: "Él sana a los quebrantados de corazón, y venda sus heridas.", ref: "Salmos 147:3" },
      { texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", ref: "Mateo 11:28" },
      { texto: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.", ref: "1 Pedro 5:7" }
    ],
    mensajes: [
      "Dios ve cada lágrima tuya. No estás solo/a; Él está más cerca de lo que imaginas.",
      "Este día puede sentirse pesado, pero no tienes que cargarlo sin ayuda. Dios sostiene tu corazón con ternura.",
      "Lo que sientes importa. Permítete ir paso a paso, porque incluso en el dolor puede empezar una nueva calma."
    ]
  },

  ansiedad: {
    palabrasClave: [
      "ansioso", "ansiosa", "ansiedad", "estresado", "estresada",
      "estres", "preocupado", "preocupada", "preocupacion",
      "nervioso", "nerviosa", "nervios", "agobiado", "agobiada",
      "abrumado", "abrumada", "angustia", "angustiado", "angustiada",
      "tension", "inquieto", "inquieta", "intranquilo", "intranquila",
      "futuro", "incertidumbre", "no se que hacer", "todo me preocupa",
      "no puedo dormir", "mi mente no para"
    ],
    foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Aunque mi mente quiera controlarlo todo, hoy elijo soltar lo que no está en mis manos y confiar en que Dios cuida cada detalle.",
      "Puedo respirar con calma. No tengo que resolver toda mi vida en este instante; puedo dar solo el siguiente paso.",
      "Mi paz no depende de tener todas las respuestas. Dios puede sostenerme aun cuando el futuro se vea incierto.",
      "Hoy le bajo el volumen a la preocupación y le doy espacio a la fe, a la calma y al descanso."
    ],
    versiculos: [
      { texto: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios guardará vuestros corazones.", ref: "Filipenses 4:6-7" },
      { texto: "No se turbe vuestro corazón; creéis en Dios, creed también en mí.", ref: "Juan 14:1" },
      { texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.", ref: "Proverbios 3:5" },
      { texto: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" }
    ],
    mensajes: [
      "Respira. Dios conoce cada detalle de tu situación y tiene el control. Puedes confiarle tu futuro.",
      "No estás fallando por sentir ansiedad. Tu corazón está pidiendo pausa, cuidado y dirección.",
      "Entrega una preocupación a la vez. Dios no te pide cargar mañana antes de terminar este día."
    ]
  },

  miedo: {
    palabrasClave: [
      "miedo", "temor", "asustado", "asustada", "aterrorizado",
      "aterrorizada", "panico", "terror", "aterrado", "aterrada",
      "inseguro", "insegura", "vulnerable", "amenazado", "amenazada",
      "peligro", "no me atrevo", "me da miedo", "temo", "espanto",
      "espantado", "espantada", "tengo miedo"
    ],
    foto: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Aunque hoy sienta miedo, no estoy solo/a. Dios camina delante de mí y me da valentía para avanzar.",
      "Mi miedo puede hablar fuerte, pero mi fe también tiene voz. Hoy decido escuchar la verdad que me sostiene.",
      "Puedo enfrentar este momento con calma. La valentía no es ausencia de miedo; es seguir tomado/a de la mano de Dios.",
      "Hay una fortaleza en mí que no desaparece cuando tiemblo. Dios me acompaña y me ayuda a mantenerme firme."
    ],
    versiculos: [
      { texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", ref: "Isaías 41:10" },
      { texto: "El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me he de atemorizar?", ref: "Salmos 27:1" },
      { texto: "No os he dado espíritu de cobardía, sino de poder, de amor y de dominio propio.", ref: "2 Timoteo 1:7" }
    ],
    mensajes: [
      "El miedo es real, pero Dios es más grande. Él camina contigo y te da valentía para seguir adelante.",
      "No tienes que negar lo que sientes para ser fuerte. Puedes sentir miedo y aun así avanzar con fe.",
      "Que este momento te recuerde que no enfrentas la incertidumbre a solas."
    ]
  },

  desmotivacion: {
    palabrasClave: [
      "desmotivado", "desmotivada", "cansado", "cansada",
      "sin ganas", "sin fuerzas", "rendirse", "rendido", "rendida",
      "fracasado", "fracasada", "fracaso", "inutil", "imposible",
      "no puedo", "derrota", "derrotado", "derrotada", "agotado",
      "agotada", "sin energia", "no sirvo", "no vale la pena",
      "para que", "me rindo", "no quiero seguir", "estoy agotado"
    ],
    foto: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Hoy puede ser difícil, pero no es el final de mi historia. Me levanto un paso a la vez, confiando en que mis fuerzas se renuevan.",
      "No soy mi cansancio ni mis errores. Dios todavía puede hacer algo hermoso con mi proceso.",
      "Un día pesado no cancela mi propósito. Puedo descansar, respirar y volver a intentarlo con nuevas fuerzas.",
      "Aunque ahora me cueste ver resultados, cada paso pequeño también cuenta. Mi esfuerzo no es en vano."
    ],
    versiculos: [
      { texto: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
      { texto: "Pero los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán y no se cansarán; caminarán y no se fatigarán.", ref: "Isaías 40:31" },
      { texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", ref: "Gálatas 6:9" },
      { texto: "Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.", ref: "Jeremías 29:11" }
    ],
    mensajes: [
      "Tus fuerzas pueden acabarse, pero las fuerzas de Dios son infinitas. Él puede renovarte desde adentro.",
      "Descansar también es parte del camino. No tienes que exigirte más de lo que tu corazón puede cargar hoy.",
      "Este no es un punto final. Es una pausa para recuperar aire, fe y dirección."
    ]
  },

  agradecimiento: {
    palabrasClave: [
      "agradecido", "agradecida", "gracias", "bendecido", "bendecida",
      "bendicion", "afortunado", "afortunada", "gratitud",
      "dichoso", "dichosa", "feliz de tener", "que bueno",
      "doy gracias", "gracias a dios", "dios es bueno",
      "privilegiado", "privilegiada", "estoy feliz por"
    ],
    foto: "https://images.unsplash.com/photo-1490750967868-88df5691cc88?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Mi corazón agradecido es una puerta abierta a más bendiciones. Hoy elijo mirar con amor todo lo bueno que me rodea.",
      "Reconozco las bendiciones de este día y las recibo con humildad, alegría y gratitud.",
      "La gratitud me ayuda a ver la mano de Dios en los detalles pequeños y en los regalos grandes.",
      "Hoy celebro lo recibido, lo aprendido y lo que todavía está creciendo en mi vida."
    ],
    versiculos: [
      { texto: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", ref: "1 Tesalonicenses 5:18" },
      { texto: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.", ref: "Salmos 136:1" },
      { texto: "Engrandezcan al Señor conmigo, y exaltemos su nombre a una.", ref: "Salmos 34:3" }
    ],
    mensajes: [
      "El corazón agradecido es un corazón abierto a más bendiciones. Dios escucha tu gratitud con amor.",
      "Tu gratitud honra lo que has vivido y te ayuda a caminar con una mirada más luminosa.",
      "Que este agradecimiento se convierta en paz, alegría y generosidad para compartir."
    ]
  },

  alegria: {
    palabrasClave: [
      "feliz", "alegre", "contento", "contenta", "emocionado",
      "emocionada", "gozo", "gozoso", "gozosa", "celebrar",
      "celebracion", "genial", "excelente", "maravilloso",
      "maravillosa", "increible", "emocionante", "satisfecho",
      "satisfecha", "pleno", "plena", "radiante", "lleno de alegria",
      "me fue bien", "estoy bien"
    ],
    foto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Esta alegría es un regalo. La abrazo, la disfruto y la comparto, porque la luz que hay en mí también puede bendecir a otros.",
      "Hoy permito que la alegría me recuerde que Dios también está presente en los días buenos.",
      "Celebro este momento con gratitud. Mi corazón puede descansar en la bondad que estoy viviendo.",
      "La alegría que siento tiene valor. La recibo sin culpa y la convierto en fuerza para seguir."
    ],
    versiculos: [
      { texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", ref: "Salmos 118:24" },
      { texto: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!", ref: "Filipenses 4:4" },
      { texto: "El corazón alegre constituye buen remedio.", ref: "Proverbios 17:22" }
    ],
    mensajes: [
      "Dios te recuerda que la alegría que viene de Él fortalece tu alma y te llena de esperanza.",
      "Disfruta este momento con gratitud. También los días luminosos son parte del cuidado de Dios.",
      "Que esta alegría te anime a seguir sembrando amor, fe y esperanza."
    ]
  },

  general: {
    palabrasClave: [],
    foto: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=82",
    afirmaciones: [
      "Hoy, sin importar lo que esté pasando, elijo recordar que soy valioso/a y amado/a. Este día aún puede traer posibilidades nuevas.",
      "No necesito entenderlo todo para confiar. Puedo caminar con calma, con fe y con el corazón abierto.",
      "Dios conoce lo que llevo dentro, incluso cuando me cuesta explicarlo. Hoy puedo descansar en su cuidado.",
      "Mi vida tiene valor en este momento, no solo cuando todo esté perfecto. Hoy recibo paz para seguir."
    ],
    versiculos: [
      { texto: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti.", ref: "Números 6:24-25" },
      { texto: "Encomienda al Señor tus afanes, y él te sostendrá.", ref: "Salmos 55:22" },
      { texto: "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás.", ref: "Juan 4:14" }
    ],
    mensajes: [
      "Sea cual sea tu situación hoy, Dios tiene una palabra especial para ti. Él nunca te deja sin respuesta.",
      "Aunque no sepas exactamente cómo nombrar lo que sientes, Dios entiende tu corazón por completo.",
      "Este puede ser un buen momento para pausar, respirar y permitirte recibir ánimo."
    ]
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
  const respuesta = crearRespuesta(emocion);

  mostrarResultado(emocion, respuesta);
  input.value = "";
}

function detectarEmocion(texto) {
  const textoNormalizado = normalizarTexto(texto);
  let maxPuntaje = 0;
  let ganadora = "general";

  for (const [nombre, datos] of Object.entries(emociones)) {
    if (nombre === "general") continue;

    const puntaje = datos.palabrasClave.reduce((total, palabra) => {
      return textoNormalizado.includes(normalizarTexto(palabra)) ? total + 1 : total;
    }, 0);

    if (puntaje > maxPuntaje) {
      maxPuntaje = puntaje;
      ganadora = nombre;
    }
  }

  return emociones[ganadora];
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function crearRespuesta(emocion) {
  const afirmacion = elegirSinRepetir(emocion.afirmaciones, ultimaRespuesta.afirmacion);
  const mensaje = elegirSinRepetir(emocion.mensajes, ultimaRespuesta.mensaje);
  const versiculo = elegirSinRepetir(emocion.versiculos, ultimaRespuesta.versiculo, (item) => item.ref);

  ultimaRespuesta = {
    afirmacion,
    mensaje,
    versiculo: versiculo.ref
  };

  return { afirmacion, mensaje, versiculo };
}

function elegirSinRepetir(opciones, ultimoValor, obtenerValor = (item) => item) {
  const disponibles = opciones.filter((opcion) => obtenerValor(opcion) !== ultimoValor);
  const lista = disponibles.length > 0 ? disponibles : opciones;
  return lista[Math.floor(Math.random() * lista.length)];
}

function mostrarResultado(emocion, respuesta) {
  document.getElementById("affirmationText").textContent = respuesta.afirmacion;

  const img = document.getElementById("versePhoto");
  img.style.display = "block";
  img.src = emocion.foto;
  img.onerror = () => {
    img.style.display = "none";
  };

  document.getElementById("verseText").textContent = respuesta.versiculo.texto;
  document.getElementById("verseRef").textContent = respuesta.versiculo.ref;
  document.getElementById("verseMessage").textContent = respuesta.mensaje;

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
