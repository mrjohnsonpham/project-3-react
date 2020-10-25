import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Test from './components/Test/Test.js';
import AndrewsCoolButton from './components/Button/Button.js';
import Navbar from './components/Nav/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jivko is the man!</h1>
      </header>
      <Navbar></Navbar>
      <Test></Test>
      <AndrewsCoolButton anything="Push me baby " jivko="something"></AndrewsCoolButton>
      <AndrewsCoolButton></AndrewsCoolButton>

    </div>
  );
}

export default App;
