import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  const input = page.getByRole("textbox");
  await input.fill(letra);
  await input.press("Enter");
});

Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});
Then("ve el mensaje {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByTestId("mensaje")).toHaveText(mensaje);
});
Then("ve el aviso {string}", async ({ page }, aviso: string) => {
  await expect(page.getByTestId("aviso")).toHaveText(aviso);
});

Given("una partida con la palabra {string} y la categoría {string}", async ({ page }, palabra: string, categoria: string) => {
  await page.goto(`/?word=${palabra}&categoria=${categoria}`);
});

Then("se ve la pista {string}", async ({ page }, pista: string) => {
  await expect(page.getByTestId("pista")).toHaveText(pista);
});