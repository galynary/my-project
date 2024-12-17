import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Home } from './components/Home/Home';
import './styles/index.js';
import './styles/variables.css';

export const App = () => {
  return (
    <div className="page-fruits">
      <SharedLayout />
      <Home />
    </div>
  );
};
