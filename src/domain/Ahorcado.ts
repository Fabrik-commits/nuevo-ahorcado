export class Ahorcado {
  private readonly palabra: string;
  private readonly vidasIniciales: number = 6;
  private readonly letrasAdivinadas: string[] = [];
  private vidasRestantes = this.vidasIniciales;
  private ultimoAviso = "";

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
  }

  adivinar(letra: string): void {
    const letraNormalizada = letra.toUpperCase();

    if (this.letrasAdivinadas.includes(letraNormalizada)) {
      this.ultimoAviso = "Ya intentaste esa letra";
      return;
    }

    this.ultimoAviso = "";
    this.letrasAdivinadas.push(letraNormalizada);

    if (!this.palabra.includes(letraNormalizada)) {
      this.vidasRestantes -= 1;
    }
  }

  aviso(): string {
    return this.ultimoAviso;
  }

/*   palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((c) => (this.letrasAdivinadas.includes(c) ? c : "_"))
      .join(" ");
  } */

palabraEnmascarada(): string {
    if (this.vidasRestantes <= 0) {
      return this.palabra.split("").join(" ");
    }

    return this.palabra
      .split("")
      .map((c) => (this.letrasAdivinadas.includes(c) ? c : "_"))
      .join(" ");
  }   

  vidas(): number {
    return this.vidasRestantes;
  }

/*   mensaje(): string {
    const letrasUnicas = new Set(this.palabra.split(""));
    const todasAdivinadas = [...letrasUnicas].every((c) => this.letrasAdivinadas.includes(c));

    return todasAdivinadas ? "GANASTE" : "";
  } */

  mensaje(): string {
    const letrasUnicas = new Set(this.palabra.split(""));
    const todasAdivinadas = [...letrasUnicas].every((c) => this.letrasAdivinadas.includes(c));

    if (todasAdivinadas) return "GANASTE";
    if (this.vidasRestantes <= 0) return "PERDISTE";
    return "";
  }  
}