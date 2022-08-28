import './App.css';
import {Episode} from './episodeList'

function App() {
  const randomNum = Math.floor(Math.random()* Math.floor(Episode.length))
  return (
    <div className="App">
      <h1>{Episode[randomNum].FIELD1}</h1>
      <h3>{Episode[randomNum].FIELD2}</h3>
    </div>
  );
}

export default App;
