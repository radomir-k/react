import logo from '../logo.svg';
import PlayerItem from '../PlayerItem/PlalyerItem.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Lessons. Home Work 02.
        </p>
      </header>
      <main className="App-main">
        <div className= "Playlist-container">
                <h2 className="Playlist-header">PLAY&nbsp;LIST</h2>
                <div className="Playlist-table header">
                    <div className="Playlist-item-header id">#</div>
                    <div className="Playlist-item-header song">Author&nbsp;and&nbsp;Song</div>
                    <div className="Playlist-item-header time">Time</div>
                    <div className="Playlist-item-header control"></div>
                </div>

                <PlayerItem />
                <PlayerItem />
                <PlayerItem />

                <div className="Playlist-table footer">
                    <div className="item-footer"></div>
                </div>
            </div>
      </main>
    </div>
  );
}

export default App;
