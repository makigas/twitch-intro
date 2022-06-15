<script>
  let hide = false;

  $: {
    setTimeout(() => hide = true, 5000);
  }
</script>

<svg class:hide={hide}>
<rect x="0" y="0" width="100%" height="100%" fill="black"></rect>
<g class="scroll">
<rect x="0" y="0" width="100%" height="100%" fill="darkblue"></rect>
  <rect fill="white" y="180" height="40" x="41%" width="18%"></rect>
<text x="50%" y="200" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" fill="darkblue">kiwi32.exe</text>
<text x="50%" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" y="300" fill="white">Se ha detectado un virus en su PC (kiwi32.exe)</text>
<text x="50%" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" fill="white" y="350">¿Desea consumir el kiwi para solucionar el problema?</text><text x="50%" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" fill="white" y="400">Presione Alt+F4 para consumir el kiwi</text>
<text x="50%" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" fill="white" y="350">¿Desea consumir el kiwi para solucionar el problema?</text><text x="50%" font-family="monospace" font-size="24" dominant-baseline="central" text-anchor="middle" fill="white" y="450">Presione Ctrl+Alt+Supr para reportar a @ckmu32</text>
</g>
</svg>

<style>
.hide { display: none; }

@keyframes drop {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

.scroll {
  animation: drop 0.1s linear; 
}
</style>
