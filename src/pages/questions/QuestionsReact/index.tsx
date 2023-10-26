import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, getProducts } from 'shared';

export const QuestionsReact = () => {
  const [page, setPage] = useState(0);

  const { data } = useQuery(['react', page], () => getProducts({ page }));

  const products = data ? data.products : [];

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>

      <Button onClick={() => setPage((prev) => prev + 1)}>еще</Button>
    </div>
  );
};
