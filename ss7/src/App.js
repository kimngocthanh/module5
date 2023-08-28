
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';
import UserList from './components/UsersList';

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

export default App;
