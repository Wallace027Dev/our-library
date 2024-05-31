interface IBook {
  _id?: string;
  title: string;
  author?: string;
  categories?: { title: string }[];
  imagePath?: File | null;
}

export default IBook;
