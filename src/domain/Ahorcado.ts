export class Ahorcado {
  private readonly palabra: string;
  private readonly categoriaPartida: string;
  private readonly vidasIniciales: number = 6;
  private readonly letrasAdivinadas: string[] = [];
  private vidasRestantes = this.vidasIniciales;
  private ultimoAviso = "";

  constructor(palabra: string, categoria: string = "") {
    this.palabra = palabra.toUpperCase();
    this.categoriaPartida = categoria;
  }

  categoria(): string {
    return this.categoriaPartida;
  }

  adivinar(letra: string): void {
        if (this.mensaje() !== "") {
      return;
    }

    const letraNormalizada = letra.toUpperCase();

    if (!/^[A-ZÑ]$/.test(letraNormalizada)) {
      this.ultimoAviso = "Ingresá una letra válida";
      return;
    }

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