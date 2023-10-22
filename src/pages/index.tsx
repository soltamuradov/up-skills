import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { QuestionsReact } from './questions';
import { MainPage } from './MainPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />}/>
      <Route path="react-questions" element={<QuestionsReact />} />
    </>,
  ),
);
