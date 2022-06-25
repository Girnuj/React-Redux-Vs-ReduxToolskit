import UserList from "./Components/UserList";
import { Navbar } from "./Components/Navbar";
//redux
import { Provider } from 'react-redux';
import store from './Components/Redux-Toolkit/StoreT/store';



function App() {
  return (
    //store de Redux-Toolkit
    <>
      <Provider store={store}>
        <Navbar />
        <UserList />
      </Provider>   
    </>
  );
}

export default App;
