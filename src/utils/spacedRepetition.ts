import { Flashcard } from "@/constants/flashcards";

export function updateFlashcardFrequency(
  flashcards: Flashcard[],
  currentCardId: number,
  correct: boolean
): Flashcard[] {
  return flashcards.map((card) =>
    card.id === currentCardId
      ? {
          ...card,
          // Ajuste o easeFactor e o intervalo de frequência baseado na resposta
          easeFactor: correct ? card.easeFactor + 0.1 : card.easeFactor - 0.2,
          frequency: correct
            ? Math.max(Math.floor(card.frequency * card.easeFactor), 1) // Aumenta o intervalo exponencialmente
            : Math.max(Math.floor(card.frequency / 2), 1) // Diminui o intervalo em caso de erro
        }
      : card
  );
}

// Função para escolher o próximo flashcard baseado na frequência
export function getNextFlashcard(flashcards: Flashcard[]): number {
  // Retorna o índice do flashcard com a menor frequência, ou seja, que precisa ser revisado primeiro
  let nextCardIndex = 0;
  let minFrequency = flashcards[0].frequency;

  flashcards.forEach((card, index) => {
    if (card.frequency < minFrequency) {
      minFrequency = card.frequency;
      nextCardIndex = index;
    }
  });

  return nextCardIndex;
}
