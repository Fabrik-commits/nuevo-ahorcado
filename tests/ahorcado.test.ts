import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al iniciar con GATO, la palabra enmascarada tiene un guion por letra", () => {
    const juego = new Ahorcado("GATO");

    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
});