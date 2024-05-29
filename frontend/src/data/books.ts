import ladraoDeRaios from '../assets/ladrao-de-raios.jpg';

export interface IBook {
  _id: number;
  imagePath: string;
  title: string;
  author: string;
  categories: { title: string }[];
}

export const Books: IBook[] = [
  {
    _id: 1,
    imagePath: ladraoDeRaios,
    title: "O ladrão de Raios",
    author: "Rick Riordan",
    categories: [
      { title: "Terror" }
    ]
  },
  {
    _id: 2,
    imagePath: ladraoDeRaios,
    title: "Mar de Monstros",
    author: "Rick Riordan",
    categories: [
      { title: "Literatura" },
      { title: "Juvenil" }
    ]
  },
  {
    _id: 3,
    imagePath: ladraoDeRaios,
    title: "Maldição do Titã",
    author: "Rick Riordan",
    categories: [
      { title: "Literatura" },
      { title: "Ficção" }
    ]
  },
  {
    _id: 4,
    imagePath: ladraoDeRaios,
    title: "O Último Herói",
    author: "Rick Riordan",
    categories: [
      { title: "Juvenil" },
      { title: "Ficção" }
    ]
  }
];
