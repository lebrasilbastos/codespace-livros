export interface Book {
  id: number;
  title: string;
  description: string;
  content: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "O Pequeno Príncipe",
    description: "Um piloto perdido no deserto encontra um pequeno príncipe de outro planeta.",
    content:
      "Certa vez, quando eu tinha seis anos, vi uma imagem magnífica num livro sobre a Floresta Virgem, chamado 'Histórias Vividas'. Era uma jiboia engolindo um animal. Lembro que li sobre um piloto que caiu no deserto do Saara e encontrou um principezinho que lhe pediu para desenhar um carneiro. O principinho vinha do asteroide B 612 e contou sobre sua rosa, suas aventuras por outros planetas e o que aprendeu sobre amizade e amor. 'O essencial é invisível aos olhos', disse a raposa. 'Só se vê bem com o coração.'",
  },
  {
    id: 2,
    title: "Dom Casmurro",
    description: "A dúvida eterna de Bentinho sobre a traição de Capitu.",
    content:
      "Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu. Cumprimentou-me, sentou-se ao pé de mim, falou da lua e dos ministros, e acabou recitando-me versos. A vida era tão boa nesse tempo. Capitu, a minha Capitu, com seus olhos de ressaca, que puxavam para dentro como a onda que se retira. E agora me perguntam se Capitu traiu ou não traiu. A verdade é que nunca saberei, e essa dúvida é a minha companheira eterna, assim como a solidão do Engenho Novo.",
  },
  {
    id: 3,
    title: "1984",
    description: "Um mundo onde o Grande Irmão vigia cada passo dos cidadãos.",
    content:
      "Era um dia frio e brilhante de abril, e os relógios batiam treze horas. Winston Smith, de queixo enterrado no peito para escapar do vento cortante, entrou apressadamente pelas portas de vidro do edifício do Ministério da Verdade. O Grande Irmão te vigia era a legenda que o encarava dos cartazes colados nas paredes, olhos negros e penetrantes que seguiam cada movimento. Winston sabia que o partido controlava não apenas as ações, mas também os pensamentos. E ainda assim, em seu coração, a rebelião germinava silenciosa como uma semente proibida.",
  },
  {
    id: 4,
    title: "A Metamorfose",
    description: "Gregor Samsa acorda transformado em um inseto monstruoso.",
    content:
      "Certa manhã, ao despertar de sonhos inquietantes, Gregor Samsa deu-se conta de que se transformara num inseto monstruoso. Estava deitado sobre o duro couraçado das costas e via, ao erguer um pouco a cabeça, o arco abaulado de seu ventre amarronzado, dividido em segmentos rígidos, sobre o qual a colcha quase se mantinha no ponto de escorregar totalmente. Suas numerosas pernas, lastimavelmente finas em comparação com o volume do resto do corpo, vibravam desamparadas diante de seus olhos. O que aconteceu comigo?, pensou. Não era um sonho.",
  },
];
