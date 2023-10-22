import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from './store/index';
import App from './components/app/App';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
