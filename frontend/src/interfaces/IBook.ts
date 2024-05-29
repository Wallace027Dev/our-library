interface IBook {
  _id: string;
  title: string;
  author: string;
  categories: { title: string }[];
  imagePath: string;
}

export default IBook;
