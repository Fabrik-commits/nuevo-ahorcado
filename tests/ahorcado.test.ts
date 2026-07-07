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
});