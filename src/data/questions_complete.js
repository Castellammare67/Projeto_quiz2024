const data = [
  {
    category: "Matemática",
    questions: [
      {
        question: "Quanto é \n" +
            "10\n" +
            "+\n" +
            "10\n" +
            "÷\n" +
            "2\n" +
            "10+10÷2?",
        options: ["5", "10", "15", "20"],
        answer: "15",
        tip: "Lembre-se da ordem das operações: divisão vem antes da soma",
      },
      {
        question: "Se um trem tem 4 vagões e cada vagão comporta 50 pessoas, quantas pessoas cabem no trem?",
        options: ["50", "200", "250", "100"],
        answer: "200",
        tip: "Multiplique o número de vagões pela capacidade de cada vagão",
      },
      {
        question: "Quantos segundos há em 1 minuto e meio?",
        options: ["60", "120", "90", "100"],
        answer: "90",
      },
      {
        question: "Quanto é \n" +
            "10\n" +
            "÷\n" +
            "2\n" +
            "+\n" +
            "5\n" +
            "×\n" +
            "0\n" +
            "10÷2+5×0?",
        options: ["5", "10", "0", "15"],
        answer: "5",
      },
      {
        question: "Quantos segundos há em 1 minuto e meio?",
        options: ["R$5,00", "R$6,00", "R$7,00", "R$2,00"],
        answer: "R$6,00",
      },
      {
        question: "Qual é o resultado de \n" +
            "7\n" +
            "−\n" +
            "7\n" +
            "+\n" +
            "7\n" +
            "÷\n" +
            "7\n" +
            "7−7+7÷7?",
        options: ["0", "7", "14", "1"],
        answer: "1",
      },
      {
        question: "Se \n" +
            "𝑥\n" +
            "=\n" +
            "2\n" +
            "x=2, qual é o valor de \n" +
            "𝑥\n" +
            "2\n" +
            "−\n" +
            "2\n" +
            "𝑥\n" +
            "x \n" +
            "2\n" +
            " −2x?",
        options: ["0", "4", "2", "-2"],
        answer: "0",
      },
      {
        question: "Quanto é \n" +
            "3\n" +
            "×\n" +
            "0\n" +
            "+\n" +
            "5\n" +
            "3×0+5?",
        options: ["0", "5", "15", "8"],
        answer: "5",
        tip: "Multiplique o número de vagões pela capacidade de cada vagão",
      },
      {
        question: "Se você tem \n" +
            "10\n" +
            "10 maçãs e dá \n" +
            "3\n" +
            "3 para cada um dos seus 3 amigos, quantas maçãs sobram?",
        options: ["0", "1", "3", "10"],
        answer: "1",
        tip: "Calcule \n" +
            "10\n" +
            "−\n" +
            "(\n" +
            "3\n" +
            "×\n" +
            "3\n" +
            ")\n" +
            "10−(3×3)",
      },
      {
        question: "Quanto é \n" +
            "100\n" +
            "−\n" +
            "50\n" +
            "×\n" +
            "2\n" +
            "100−50×2?",
        options: ["1", "100", "50", "0"],
        answer: "0",
      },
    ],
  },
  {
    category: "Português",
    questions: [
      {
        question: "Qual é o gênero textual de um manual de instruções?",
        options: ["Narrativo", "Descritivo", "Injuntivo", "Dissertativo"],
        answer: "Injuntivo",
        tip: "Pense em textos que orientam ações",
      },
      {
        question: "Qual é a função do vocativo na frase: \"Maria, venha cá!\"?:",
        options: ["Sujeito", "Objeto direto", "Chamamento", "Complemento nominal"],
        answer: "Chamamento",
        tip: "Serve para chamar ou se dirigir a alguém.",
      },
      {
        question: "Qual é a principal característica de uma crônica?",
        options: ["Contar uma história fictícia longa", "Narrar um fato cotidiano", "Explicar um conceito científico", "Apresentar argumentos para defender uma ideia"],
        answer: "Narrar um fato cotidiano",
        tip: "Pense em textos curtos que falam do dia a dia",
      },
      {
        question: "Qual é o tempo verbal da oração: \"Se eu estudasse mais, tiraria notas melhores.\"?",
        options: ["Futuro do presente", "Presente do indicativo", "Pretérito imperfeito do subjuntivo", "Pretérito perfeito do indicativo"],
        answer: "Pretérito imperfeito do subjuntivo",
        tip: "Identifique o uso do verbo na hipótese",
      },
      {
        question: "Qual é o significado da palavra \"inócuo\"?",
        options: ["Perigoso", "Inofensivo", "Raro", "Complexo"],
        answer: "Inofensivo",
        tip: "Relacione com a ideia de algo que não causa dano",
      },
      {
        question: "Qual é a figura de linguagem presente na frase: \"O mar chorava suas mágoas.\"?",
        options: ["Metáfora", "Prosopopeia", "Eufemismo", "Ironia"],
        answer: "Prosopopeia",
        tip: "Identifique se há atribuição de características humanas a algo inanimado",
      },
      {
        question: "Qual é o sujeito da frase: \"Choveram intensamente na cidade.\"?",
        options: ["Oculto", "Inexistente", "Simples", "Indeterminado"],
        answer: "Indeterminado",
        tip: "Verifique se há um agente explícito na frase",
      },
      {
        question: "Qual é a classificação do termo destacado na frase: \"Ele é muito inteligente.\"?",
        options: ["Substantivo", "Adjetivo", "Verbo", "Advérbio"],
        answer: "Adjetivo",
        tip: "Pense em qual classe de palavra descreve características",
      },
      {
        question: "Na frase \"Gostamos de livros que nos fazem refletir.\", qual é a função do termo \"que\"?",
        options: ["Conjunção", "Pronome relativo", "Pronome demonstrativo", "Advérbio"],
        answer: "Pronome relativo",
        tip: "Substitua por \"o qual\" para confirmar sua função",
      },
      {
        question: "Qual é o tipo de predicado na frase: \"O dia amanheceu lindo.\"?",
        options: ["Predicado verbal", "Predicado nominal", "Predicado verbo-nominal", "Predicado simples"],
        answer: "Predicado nominal",
        tip: "Analise se há verbo de ligação e qualificação",
      },

    ],
  },
  {
    category: "Artes",
    questions: [
      {
        question: "Qual pintor é conhecido por cortar parte da própria orelha?",
        options: [
          "Pablo Picasso",
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Salvador Dalí",
        ],
        answer: "Vincent van Gogh",
      },
      {
        question: "Qual técnica artística usa pedaços de papel, tecido ou outros materiais colados?",
        options: ["Escultura", "Pintura", "Colagem", "Gravura"],
        answer: "Colagem",
      },
      {
        question: "Qual é a capital da música clássica, associada a compositores como Beethoven e Mozart?",
        options: ["Paris", "Viena", "Roma", "Londres"],
        answer: "Viena",
      },
      {
        question: "Quem pintou a Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
        answer: "Leonardo da Vinci",
      },
      {
        question:
          "Qual é a arte de criar figuras com argila, pedra ou outros materiais sólidos?",
        options: ["Pintura", "Escultura", "Gravura", "Fotografia"],
        answer: "Escultura",
      },
      {
        question:
          "Qual destas cores NÃO é primária?",
        options: ["Azul", "Amarelo", "Vermelho", "Verde"],
        answer: "Verde",
      },
      {
        question:
          "Em qual estilo artístico predominam formas geométricas e cubos?",
        options: ["Surrealismo", "Realismo", "Cubismo", "Impressionismo"],
        answer: "Cubismo",
      },
      {
        question:
          "Qual dos seguintes instrumentos é de percussão?",
        options: ["Violino", "Flauta", "Bateria", "Piano"],
        answer: "Bateria",
      },
      {
        question:
          "Em que tipo de teatro os atores não falam e usam gestos exagerados?",
        options: ["Teatro musical", "Pantomima", "Drama clássico", "Tragédia"],
        answer: "Pantomima",
      },
      {
        question:
          "Qual famoso artista espanhol é conhecido como um dos fundadores do cubismo?",
        options: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Diego Velázquez"],
        answer: "Pablo Picasso",
      },
    ],
  },
];

export default data;
