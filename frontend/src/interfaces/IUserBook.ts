interface IUserBook {
  _id: string;
  userId: string;

  bookId: {
    _id: string;
    title: string;
    author: string;
    categories: {
      title: string;
    }[];
    imagePath: string;
  };

  startedReadingAt: string;
  status: 'ALREADY_READ' | 'READING' | 'NOT_READ';
}


export default IUserBook;
