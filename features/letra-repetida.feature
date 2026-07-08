# language: es
Característica: Letra repetida

  Escenario: El jugador re-intenta una letra ya adivinada
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "A"
    Entonces se ven 6 vidas
    Y ve el aviso "Ya intentaste esa letra"