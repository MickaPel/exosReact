import './App.css';
import {useState} from 'react'
import Title from './Components/Title';
import Connexion from './Components/Connexion';
import Librairie from './Components/Librairie';

function App() {

  const [isConnected, setConnected] = useState(false);
  const [name, setName] = useState("");
  const [titleName, setTitleName] = useState("");

    const getName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setConnected(true);
        setTitleName(name)
        alert('connexion valide')
        setName("")
    }

    const logout = () => {
      setConnected(false)
    }

    console.log(name)

  return (
    <div className="App">
      <Title userName={titleName} />
      <Connexion connected={isConnected} value={name} change={getName} submit={handleSubmit} logout={logout}/>
      { isConnected ?
        <Librairie />
        : 
        <></>
      }
      

    </div>
  );
}

export default App;
