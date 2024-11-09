"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { initialFlashcards, Flashcard } from "@/constants/flashcards";
import { updateFlashcardFrequency, getNextFlashcard } from "@/utils/spacedRepetition";

export default function QuizletPage() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const handleShowAnswer = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowAnswer(true);
      setIsFlipping(false);
    }, 500); // Tempo da animação
  };

  const handleAnswer = (correct: boolean) => {
    setIsFlipping(true);
    setTimeout(() => {
      const currentCardId = flashcards[currentCardIndex].id;

      // Atualiza os flashcards com base na resposta
      const updatedFlashcards = updateFlashcardFrequency(flashcards, currentCardId, correct);
      setFlashcards(updatedFlashcards);

      // Escolhe o próximo card com base na lógica de repetição espaçada
      const nextCardIndex = getNextFlashcard(updatedFlashcards);
      setCurrentCardIndex(nextCardIndex);
      setShowAnswer(false); // Volta para o estado de exibição da pergunta
      setIsFlipping(false);
    }, 500); // Tempo da animação
  };

  return (
    <Card
      className={`flashcard ${isFlipping ? "flipping" : ""}`}
      sx={{ display: "flex", margin: "auto", mt: 4, maxWidth: 330, minHeight: 440 }}
    >
      <CardContent
        sx={{ display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "space-between" }}
      >
        <Typography variant="h5">
          {/* Mostra a pergunta ou a resposta com base no estado */}
          {showAnswer ? flashcards[currentCardIndex].answer : flashcards[currentCardIndex].question}
        </Typography>

        {!showAnswer && (
          <Box sx={{ display: "flex" }}>
            <Button
              color="primary"
              size="large"
              variant="contained"
              sx={{ m: 2, width: "100%" }}
              onClick={handleShowAnswer}
            >
              Ver Resposta
            </Button>
          </Box>
        )}

        {showAnswer && (
          <Box sx={{ display: "flex" }}>
            <Button
              color="success"
              size="large"
              variant="contained"
              sx={{ m: 2, width: "100%" }}
              onClick={() => handleAnswer(true)}
            >
              Acertei
            </Button>

            <Button
              color="error"
              size="large"
              variant="contained"
              sx={{ m: 2, width: "100%" }}
              onClick={() => handleAnswer(false)}
            >
              Errei
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
