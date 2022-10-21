import logo from './logo.svg';
import './App.css';
import Komponen from './materi/1_Komponent/pembahasan/ClassComponent';
import FunctionalComponet from './materi/1_Komponent/pembahasan/FungsionalComponent';

function App() {
  return (
    <div className="App">
      <Komponen nama="wahyudin"/>
      <FunctionalComponet nama = {23}/>
    </div>
  );
}

export default App;
