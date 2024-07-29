import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/Home';
import { CountryPage } from './pages/Country';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:name' element={<CountryPage />} />
      </Route>
    </Routes>
  );
}
