import Dictionary from "./Dictionary";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">What word do you want to look up?</h1>
        </header>
        <main>
          <Dictionary />
        </main>

        
        <footer className="text-center">
          <span className="copyright">©️ Coded by Cristina Padilla</span>
          <a href="https://github.com/Mama-simba/dictionary-project" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/cristina-padilla-plasencia/"
          target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        </footer>

      </div>
    </div>
  );
}

export default App;
