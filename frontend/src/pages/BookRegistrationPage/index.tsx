import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import { Container, Button, Form, Input, LabelWithButton, LabelWithInput, CategoryButton } from "./styles";

import ICategory from "../../interfaces/ICategory";
import IUsers from "../../interfaces/IUser";

const BookRegistrationPage: React.FC = () => {
  const [wishlistCount, setWishlistCount] = useState(1);
  const [wishlistBooks, setWishlistBooks] = useState<string[]>([]);

  const [name, setName] = useState<string>('');
  const [selectedCategory, setselectedCategory] = useState<string[]>([]);

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [imagePath, setImagePath] = useState<File | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then(result => setCategories(result.data))
      .catch(err => console.error(err))
  }, []);

  function handleSubmitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newUser: IUsers = {
      name: name,
      wishlist: wishlistBooks
    }

    axios.post('http://localhost:3001/users', newUser)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(err => console.error(err));

    setName('');
    setWishlistBooks([]);
  }

  function handleSubmitBook(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();


    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);

    selectedCategory.forEach(category => {
      formData.append('categories[]', category);
    });

    if (imagePath) {
      formData.append('imagePath', imagePath);
    }

    console.log(formData)

    axios.request({
      url: 'http://localhost:3001/books',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(() => {
        alert('Success: book created');
      })
      .catch(err => console.error(err));

    setTitle('');
    setAuthor('');
    setselectedCategory([]);
    setImagePath(null);
  }

  function handleWishlist(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newWishlistBooks = [...wishlistBooks];
    newWishlistBooks[index] = e.target.value;
    setWishlistBooks(newWishlistBooks);
  }

  function handleCategories(e: React.MouseEvent<HTMLButtonElement>, categoryId: string) {
    e.preventDefault();
    setselectedCategory((prevSelectedBooks) =>
      prevSelectedBooks.includes(categoryId)
        ? prevSelectedBooks.filter((id) => id !== categoryId)
        : [...prevSelectedBooks, categoryId]
    );
  }

  function handleCountWishlist(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setWishlistCount(wishlistCount + 1);
  }

  function selectArchive(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setImagePath(e.target.files[0])
    } else {
      setImagePath(null)
    }
  }

  return (
    <Container>
      <aside>
        <form onSubmit={ handleSubmitUser }>
          <Input
            type="text"
            placeholder="Digite o nome aqui..."
            onChange={ (e) => setName(e.target.value) }
            value={name}
          />
          <LabelWithButton style={{ marginTop: 8 }}>
            <label htmlFor="wishlist">Wishlist</label>
            <button onClick={ handleCountWishlist }>+</button>
          </LabelWithButton>

          {Array.from({ length: wishlistCount }).map((_, index) => (
            <Input
              key={index}
              type="text"
              placeholder="Digite o nome aqui..."
              onChange={(e) => handleWishlist(e, index)}
              value={wishlistBooks[index] || ''}
            />
          ))}
          <Button type="submit">ENVIAR</Button>
        </form>
      </aside>

      <section>
        <Form onSubmit={ handleSubmitBook }>
          <div>
            <label htmlFor="title">Título</label>
            <Input
              type="text"
              placeholder="Nome do livro..."
              onChange={ (e) => setTitle(e.target.value) }
              value={ title }
            />
          </div>
          <div>
            <label htmlFor="author">Autor</label>
            <Input
              name="author"
              type="text"
              placeholder="Nome do livro..."
              onChange={ (e) => setAuthor(e.target.value) }
              value={ author }
            />
          </div>
          <div>
            <label htmlFor="category">Gêneros</label>
            {categories && categories.map((category) => (
              <CategoryButton
                name="category"
                key={category._id}
                value={category._id}
                onClick={(e) => handleCategories(e, category._id)}
                className={`category-button
                  ${selectedCategory.includes(category._id)
                  ? 'active'
                  : ''}`}
              >
                {category.title}
              </CategoryButton>
            ))}
          </div>
          <div>
            <LabelWithInput>
              <label htmlFor="imagePath">Image</label>
              <Input
                type="file"
                name="imagePath"
                id="imagePath"
                onChange={selectArchive}
              />
            </LabelWithInput>
          </div>
          <button>ENVIAR</button>
        </Form>
      </section>
    </Container>
  )
}

export default BookRegistrationPage;
