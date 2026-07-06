import { Ahorcado } from "../domain/Ahorcado";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "";

const juego = new Ahorcado(palabra);

document.querySelector('[data-testid="word"]')!.textContent = juego.palabraEnmascarada();
document.querySelector('[data-testid="lives"]')!.textContent = String(juego.vidas());