import { FormEvent, useState } from "react";
import axios from "axios";

import { Container } from "../../styles/BookPages";
import { Button, Form, Input, Wishlist } from "./styles";

interface IUserSubmit {
  name: string;
  wishlist: string[]
}

const BookRegistrationPage: React.FC = () => {
  const [wishlistBooks, setWishlistBooks] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [inputCount, setInputCount] = useState(1);

  function handleSubmitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newUser: IUserSubmit = {
      name: name,
      wishlist: wishlistBooks
    }

    console.log(newUser)

    axios.post('http://localhost:3001/users', newUser)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(err => console.error(err));

    setName('');
    setWishlistBooks([]);
  }

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleWishlist(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newWishlistBooks = [...wishlistBooks];
    newWishlistBooks[index] = e.target.value;
    setWishlistBooks(newWishlistBooks);
  }

  function handleCountWishlist(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setInputCount(inputCount + 1);
  }

  return (
    <Container>
      <aside>
        <Form onSubmit={handleSubmitUser}>
          <Input
            type="text"
            placeholder="Digite o nome aqui..."
            onChange={handleName}
            value={name}
          />
          <div>
            <Wishlist>
              <label htmlFor="wishlist">Wishlist</label>
              <button onClick={handleCountWishlist}>+</button>
            </Wishlist>

            {Array.from({ length: inputCount }).map((_, index) => (
              <Input
                key={index}
                type="text"
                placeholder="Digite o nome aqui..."
                onChange={(e) => handleWishlist(e, index)}
                value={wishlistBooks[index] || ''}
              />
            ))}
          </div>
          <Button type="submit">ENVIAR</Button>
        </Form>
      </aside>
      <section>Olá mundo</section>
    </Container>
  )
}

export default BookRegistrationPage;
