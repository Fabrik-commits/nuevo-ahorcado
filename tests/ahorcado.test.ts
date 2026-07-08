import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al iniciar con GATO, la palabra enmascarada tiene un guion por letra", () => {
    const juego = new Ahorcado("GATO");

    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
  it("al iniciar, el jugador tiene 6 vidas", () => {
    const juego = new Ahorcado("GATO");

    expect(juego.vidas()).toBe(6);
  });
  it("adivinar una letra presente revela todas sus ocurrencias", () => {
    const juego = new Ahorcado("ALA");

    juego.adivinar("A");

    expect(juego.palabraEnmascarada()).toBe("A _ A");
  });
  it("adivinar es case-insensitive", () => {
    const juego = new Ahorcado("ALA");

    juego.adivinar("a");

    expect(juego.palabraEnmascarada()).toBe("A _ A");
  });
  it("adivinar una letra presente no descuenta vidas", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("A");

    expect(juego.vidas()).toBe(6);
  });
  it("adivinar una letra ausente descuenta una vida", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("E");

    expect(juego.vidas()).toBe(5);
  });
  it("al adivinar todas las letras, el mensaje es GANASTE", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");

    expect(juego.mensaje()).toBe("GANASTE");
  });
  it("mientras falten letras por adivinar, no hay mensaje", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");

    expect(juego.mensaje()).toBe("");
  });
  it("al agotar las vidas, el mensaje es PERDISTE", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    juego.adivinar("B");
    juego.adivinar("C");
    juego.adivinar("D");

    expect(juego.mensaje()).toBe("PERDISTE");
  });
  it("al perder, la palabra se ve completa aunque no se hayan adivinado todas las letras", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    juego.adivinar("B");
    juego.adivinar("C");
    juego.adivinar("D");

    expect(juego.palabraEnmascarada()).toBe("G A T O");
  });
  it("al reintentar una letra ya adivinada, el aviso informa que ya fue intentada", () => {
    const juego = new Ahorcado("GATO");

    juego.adivinar("A");
    juego.adivinar("A");

    expect(juego.aviso()).toBe("Ya intentaste esa letra");
  });
});