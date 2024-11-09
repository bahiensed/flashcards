export type Flashcard = {
  id: number;
  question: string;
  answer: string;
  frequency: number;  // Controle do intervalo
  easeFactor: number; // Novo campo para controlar a facilidade do cartão
};

export const initialFlashcards: Flashcard[] = [
  { id: 1, question: "O que significa HTML?", answer: "HyperText Markup Language", frequency: 1, easeFactor: 2.5 },
  { id: 2, question: "Qual tag é usada para criar um link?", answer: "<a>", frequency: 1, easeFactor: 2.5 },
  { id: 3, question: "Qual tag é usada para criar uma imagem?", answer: "<img>", frequency: 1, easeFactor: 2.5 },
  { id: 4, question: "Qual é a tag para criar um parágrafo?", answer: "<p>", frequency: 1, easeFactor: 2.5 },
  { id: 5, question: "Qual atributo é usado para definir o URL de um link?", answer: "href", frequency: 1, easeFactor: 2.5 },
  { id: 6, question: "O que significa a tag <br>?", answer: "Quebra de linha", frequency: 1, easeFactor: 2.5 },
  { id: 7, question: "Como se comenta em HTML?", answer: "<!-- Comentário -->", frequency: 1, easeFactor: 2.5 },
  { id: 8, question: "Qual tag é usada para cabeçalhos maiores?", answer: "<h1> até <h6>", frequency: 1, easeFactor: 2.5 },
  { id: 9, question: "Qual a tag de listagem não ordenada?", answer: "<ul>", frequency: 1, easeFactor: 2.5 },
  { id: 10, question: "Qual a tag para inserir uma tabela?", answer: "<table>", frequency: 1, easeFactor: 2.5 },
  { id: 11, question: "Qual tag é usada para criar uma lista ordenada?", answer: "<ol>", frequency: 1, easeFactor: 2.5 },
  { id: 12, question: "Qual tag é usada para criar um campo de entrada de texto?", answer: "<input>", frequency: 1, easeFactor: 2.5 },
  { id: 13, question: "Qual atributo é usado para definir o texto alternativo de uma imagem?", answer: "alt", frequency: 1, easeFactor: 2.5 },
  { id: 14, question: "Como você define um comentário em HTML?", answer: "<!-- Comentário -->", frequency: 1, easeFactor: 2.5 },
  { id: 15, question: "Qual tag HTML é usada para definir o título de um documento?", answer: "<title>", frequency: 1, easeFactor: 2.5 },
  { id: 16, question: "Qual tag HTML cria um botão?", answer: "<button>", frequency: 1, easeFactor: 2.5 },
  { id: 17, question: "Como você cria um checkbox em HTML?", answer: "<input type='checkbox'>", frequency: 1, easeFactor: 2.5 },
  { id: 18, question: "Qual atributo é usado para definir o valor de um campo de formulário?", answer: "value", frequency: 1, easeFactor: 2.5 },
  { id: 19, question: "Qual é o elemento pai de todas as tags HTML?", answer: "<html>", frequency: 1, easeFactor: 2.5 },
  { id: 20, question: "Qual tag HTML é usada para adicionar metadados ao documento?", answer: "<meta>", frequency: 1, easeFactor: 2.5 },
  { id: 21, question: "Qual atributo define o destino de um link em uma tag <a>?", answer: "href", frequency: 1, easeFactor: 2.5 },
  { id: 22, question: "Qual tag é usada para criar uma lista de definição?", answer: "<dl>", frequency: 1, easeFactor: 2.5 },
  { id: 23, question: "Como criar um dropdown menu em HTML?", answer: "<select>", frequency: 1, easeFactor: 2.5 },
  { id: 24, question: "Qual tag é usada para criar uma área de texto multilinha?", answer: "<textarea>", frequency: 1, easeFactor: 2.5 },
];
