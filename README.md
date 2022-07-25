# IntroTwitch

Esta es la nueva animación que voy a estar usando para mis directos.
La intro está desarrollada en Svelte y CSS y se muestra en los streams usando
un BrowserSource de OBS. Así que sí, la intro de mi Twitch es otro Electron...

El estilo artístico de la intro recrea un escritorio falso (obviamente tenía
que ser GNOME), donde una ventana va mostrando la cuenta atrás y de vez en
cuando otras ventanas van apareciendo con memes y otras partes del lore del
canal.

## Arquitectura técnica

Esta intro es una oda a los SVG anidados. Los elementos que hay dentro de un
SVG se posicionan y se dimensionan respecto al tamaño del SVG en el que están
metidos. Aunque es posible usar transform() para trasladar y escalar un SVG,
a veces no queda otra que usar un SVG dentro de otro para poder tener un control
más preciso...

Los componentes de Svelte generan nodos SVG ya que toda la animación está
contenida dentro de un SVG gigante, aunque enriquecida gracias a CSS y animada
gracias a JavaScript y CSS Animations.

El SVG gigante está en StartingSoonComponent y también tiene el viewbox
principal. Toda la animación se escala vectorialmente a 960x540, pero cuando
se muestre esto en el OBS hay que usar como dimensiones de la BrowserSource
la resolución del vídeo para que se vea nítido. (Por ejemplo, 1920x1080).

En la carpeta `src/components` están los componentes reusables:

- Countdown: muestra una cuenta atrás en un nodo de texto gigante.
- FlyingText: es una pieza de texto volador y animada, usada para los mensajes
  de carga.
- FlyingTexts: es el driver que va alternando nodos FlyingText aleatoriamente
  con mensajes del pool de mensajes.
- Progress: es una barra de progreso al estilo GTK/Adwaita.
- Window: es una ventana al estilo GTK.

En la carpeta `src/windows` están las distintas ventanas, algunas reusables
y otras no.

Para depurar todas las ventanas hay que utilizar la vista /debug.html.

- StreamStarting: es la ventana que muestra la cuenta atrás.

## Cómo proponer frases

Recoge puntos estando en mis streams y usa los puntos de canal para pedir
frases. **Pull requests que traten de proponer nuevas frases van a ser
cerrados**.
