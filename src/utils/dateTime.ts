export function dateTime(): string {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit", // Garante o zero à esquerda
    month: "2-digit", // Garante o zero à esquerda
    year: "numeric",
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(today);
}
