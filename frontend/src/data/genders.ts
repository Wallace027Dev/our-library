export interface IGender {
  _id: number;
  title: string;
}

export const Genders: IGender[] = [
  { _id: 1, title: 'Todos os gêneros' },
  { _id: 4, title: 'Ação' },
  { _id: 2, title: 'Ficção' },
  { _id: 6, title: 'Juvenil' },
  { _id: 5, title: 'Literatura' },
  { _id: 7, title: 'Suspensa' },
  { _id: 3, title: 'Terror' }
];
