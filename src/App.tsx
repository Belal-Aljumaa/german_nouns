import './App.scss';
import GermanNouns from './components/GermanNouns';

function App() {
  return (
    <div>
      <h1>Test Site</h1>
      <GermanNouns article="der"/>
      <hr/>
      <GermanNouns article="die"/>
      <hr/>
      <GermanNouns article="das"/>
    </div>
  );
}

export default App;
