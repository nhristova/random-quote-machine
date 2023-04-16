import viteLogo from '/vite.svg'
import twitter from './assets/twitter.svg';
import facebook from './assets/facebook.svg';
import octocat from './assets/octocat.svg';
import './App.css'

function App() {

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">Text</div>
        <div id="author">Author</div>
        <div>
        <a id="tweet-quote" href="">
          <img src={twitter} alt="" />
        </a>
        <a id="facebook-quote" href="">
          <img src={facebook} alt="" />
        </a>
          <button id="new-quote">New qote</button>
        </div>
      </div>
      <div id="author-box">
        by <a href="https://github.com/nhristova">
          <img src={octocat} alt="" />
          
          nhristova
          </a>
      </div>
    </div>
  )
}

export default App
