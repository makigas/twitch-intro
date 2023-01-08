export const STATUSES = [
  // @danirod_
  "Montando el disco duro de los memes...",
  "Sacando brillo a los teclados...",
  "Desfragmentando un kiwi...",
  "Actualizando el entorno gráfico...",
  "Acariciando patos...",

  // @dannywolfmx2
  "BAD SECTOR -- @dannywolfmx2",
  "Sacando a pasear al lobete... -- @dannywolfmx2",
  "Recargándole las pilas a Pinchito... -- @dannywolfmx2",

  // @ikanian
  "Almacenando patos de emergencia... -- @ikanian",

  // @ckmu32
  "Preparando el nuevo año de Java en YouTube... -- @ckmu32",
  "Comiendo mandarinas... (esa vitamina C no se conseguir sola) -- @ckmu32",

  // @messer199
  "Preparando el curso de Scala... es coña, antes sale HL3 -- @messer199",
  "Sacudiendo los enanos... -- @messer199",
  "Redireccionando trafico nopor a este stream... -- @messer199",

  // @frostqui
  "Reparando el condensador de fluzo... -- @frostqui",
  "Liberando a clank del mundo de las tinieblas... -- @frostqui",
  "Preparando la música de m****a sin copyright... -- @frostqui",
  "Buscando frameworks raros para enseñarlos en directo... -- @frostqui",
  "Yendo al río a llenar garrafas para las recompensas del canal... -- @frostqui",

  // jemmaengz1202
  "Canjeando subs por kiwis y sandías... -- @jemmaengz1202",

  // sonirico
  "Atornillando bits... -- @sonirico",

  // @ivan_the_raging_python
  "Huyendo de LatAm... -- @ivan_the_raging_python",

  // @mauriballes
  "Compilando el kernel Linux... otra vez -- @mauriballes",
  "Levantando servidores! -- @mauriballes",

  // @Klairm_
  "Calmando wannabes... -- @Klairm_",

  // @MrTioTizo
  "Contando bits y bocabits.. -- @MrTioTizo",
  "Preparando la cena de empresa del año que viene... (aunque cene solo) -- @MrTioTizo",

  // @adrianiku
  "Liando porros ,muchos porros... -- @adrianiku",

  // @likendero
  "Parseando XML... -- @likendero",

  // @jesucristo_de_nazareth
  "Bajando desde cielo al stream... -- @jesucristo_de_nazareth",
];

export const NEWS = {
  "@messer199": [
    "Expertos en ciberseguridad recomiendan usar Emacs y Nano hasta nuevo aviso por vulnerabilidad encontrada en Vim",
    "Si tu teclado se ha Rusteado. Tranquilos! usa Don Dennis Ritchie, C limpiara porque la Pythhonisa solo hace tocar la flauta",
  ],
  "@frostqui": [
    "lerna.js ha muerto"
  ],
  "@mauriballes": [
    "Servidores en llamas!!! Panic Everywhere!!!"
  ],
  "@UnPayasoConUnMachete": [
    "¡Tengo buenas noticias para ti! PHP sigue mejorando cada año, y te invito a que le eches un vistazo antes de opinar",
  ],
};

export const BUBBLES = {
  "@frostqui": [
    "Escribe eeeeeeeeeeeeeeeee en el chat cuando leas este mensaje",
    "Atención: Todo aquel que no canjee la recompensa de fichar será fulminado",
  ],
  "@Klairm_": [
    "Un ruso con xanclas? Mas bien un ruso wannabe"
  ],
  "@messer199": [
    "Necesitas insomio para esta noche de crunch? Bill Puertas te trae café de la isla de Java, su opinión sobrerana es la siguiente: Java no me deja dormir por las noches. No apto por cardiopaticos",
    "Hay dos cosas peores que un agujero negro: Google Chrome y ElasticSearch",
    "Esta tarjeta es en color negro y solo aparece en los viernes para decir que es una tarjeta blackfriday, porque los descuento son una patraña irrespetuoso con el medio ambiente",
  ],
  "@dannywolfmx2": [
    "El tiempo es como el dinero, mientras menos se tiene más se valora",
    "11",
    "Tonacho programador de Rust",
    "Stallman programador de Excel. ",
    "Uriel jugador de COD",
    "DannyWolf pesetero",
  ],
  "@MrTioTizo": [
    "Buenas gracias y muchas tardes, espero esteis estupendos y estupendas.",
  ],
  "@hellsing2030": [
    "🦆🦆 PATASTICO 🦆🦆"
  ],
  "@leo_develop": [
    "No te olvides de poner el WHERE en el DELETE * FROM"
  ],
  "@zyryab_dev": [
    "Si la ves, que no la verás, no le digas que venga, que no vendrá",
  ],
};

function unroll(index) {
  const items = [];
  Object.entries(index).forEach(([username, messages]) => {
    messages.forEach((msg) => items.push({ author: username, text: msg }));
  });
  return items;
}

export const POPUPS = [
  ...unroll(BUBBLES).map((bubble, i) => ({
    ...bubble,
    kind: "ChatBubble",
    id: `chat-bubble-${i}`,
  })),
  ...unroll(NEWS).map((news, i) => ({
    ...news,
    kind: "BreakingNews",
    id: `breaking-news-${i}`,
  })),
  {
    // Custom designed, doesn't need additional parameters
    kind: "BoardPopup",
    id: "motherboards",
  },
  {
    // Custom designed, doesn't need additional parameters
    kind: "PatitaPopup",
    id: "patita",
  },
  {
    // Custom designed, doesn't need additional parameters
    kind: "KiwiBsod",
    id: "kiwibsod",
  },
  {
    // Custom designed, doesn't need additional parameters
    kind: "Mandarina",
    id: "mandarina",
  },
  {
    // Custom designed, doesn't need additional parameters
    kind: "Bun",
    id: "bun",
  },
  {
    kind: "Farm",
    title: "Sandía",
    id: "sandia",
    line1:
      "Este es dannywolfmx2. dannywolfmx2 madruga cada día para que puedas encontrar las sandías más frescas de todo el mercado",
    line2: "Compra calidad. Compra sandías dannywolfmx2",
  },
  {
    kind: "Farm",
    title: "Pollo",
    id: "pollo",
    line1:
      "Este es ckmu32. ckmu32 madruga cada día para que puedas encontrar los pollos mejor alimentados de todo el mercado",
    line2: "Compra calidad. Compra pollos ckmu32",
  },
  {
    kind: "DrinkReminder",
    title: "Café",
    id: "coffee-drink-reminder",
    person: "@mauriballes",
    emoji: "☕",
  },
  {
    kind: "DrinkReminder",
    title: "Té",
    id: "tea-drink-reminder",
    person: "@ckmu32",
    emoji: "🍵",
  },
  {
    kind: "Corporate",
    title: '<?xml version="1.0" ?>',
    id: "xml",
  },
];

export const SECONDS_BETWEEN_POPUPS = 45;

export const COUNTDOWN_MINUTES = 8;
