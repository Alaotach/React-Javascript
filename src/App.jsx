import './App.css'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import {useState} from 'react';


export default function App() {
  const [alert, setAlert] = useState({
    message: null
  });
  const showAlert = (msg) => {
    setAlert({
       message: msg
    })
    setTimeout(() => {
      setAlert({
        message: null
      });
      console.log(alert);
  }, 3000);
  }
  return (
    <main>
      <Navbar title='TextAloo' />
      <Alert alert={alert} />
      <TextArea alert={showAlert}/>
    </main>
  );
}
