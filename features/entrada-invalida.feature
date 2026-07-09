# language: es
Característica: Entrada inválida

  Escenario: El jugador ingresa algo que no es una letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "5"
    Entonces se ven 6 vidas
    Y ve el aviso "Ingresá una letra válida"

  Escenario: El jugador intenta jugar con la partida ya terminada
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "G"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "T"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "X"
    Entonces ve el mensaje "GANASTE"
    Y se ven 6 vidas