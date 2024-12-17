import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Home } from './components/Home/Home';

export const App = () => {
  return (
    <div className="page-fruits">
      <SharedLayout />
      <Home />
    </div>
  );
};
