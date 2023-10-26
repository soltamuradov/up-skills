import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
      <Link to={'react-questions'}>React</Link>
      <Link to={'#'}>HTML</Link>
      <Link to={'#'}>CSS</Link>
    </div>
  );
};
