
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {
  return (
    <div>
      
      <Header></Header>
      <AddContact></AddContact> 
       <ContactList></ContactList>
    </div>
  );
}

export default App;
