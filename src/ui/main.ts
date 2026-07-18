import { Ahorcado } from "../domain/Ahorcado";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "";
const categoria = params.get("categoria") ?? "";

const juego = new Ahorcado(palabra, categoria);

function pintar(): void {
  document.querySelector('[data-testid="word"]')!.textContent = juego.palabraEnmascarada();
  document.querySelector('[data-testid="lives"]')!.textContent = String(juego.vidas());
  document.querySelector('[data-testid="mensaje"]')!.textContent = juego.mensaje();
  document.querySelector('[data-testid="aviso"]')!.textContent = juego.aviso();
  document.querySelector('[data-testid="pista"]')!.textContent = juego.categoria();
}

pintar();

const input = document.querySelector("input")!;
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value) {
    juego.adivinar(input.value);
    input.value = "";
    pintar();
  }
});