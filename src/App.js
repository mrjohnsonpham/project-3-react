import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Test from './components/Test/Test.js';
import AndrewsCoolButton from './components/Button/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jivko is the man!</h1>
      </header>
      <Test></Test>
      <AndrewsCoolButton anything="Push me baby " jivko="something"></AndrewsCoolButton>
      <AndrewsCoolButton></AndrewsCoolButton>
      
    </div>
  );
}

export default App;
