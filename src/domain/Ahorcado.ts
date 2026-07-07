export class Ahorcado {
  private readonly palabra: string;
  private readonly vidasIniciales: number = 6;
  private readonly letrasAdivinadas: string[] = [];

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
  }

  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra.toUpperCase());
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((c) => (this.letrasAdivinadas.includes(c) ? c : "_"))
      .join(" ");
  }

    vidas(): number {
    return this.vidasIniciales;
  }
}