import {useState} from 'react';
import Slider from 'rc-slider';
import logo from '../logo.svg';
import 'rc-slider/assets/index.css';
import PlayerItem from '../PlayerItem/PlalyerItem.jsx';
import './App.css';


function App() {

  const [playList, playerListChange] = useState([

    {
      id:     'mp_0001a',
      state:  'activ',
      onplay: 'pause',
      author: "LED ZEPPELIN",
      song:   "STAIRWAY TO HEAVEN",
      path:   "./mp3/LedZeppelin-StairwayToHeaven.mp3",
    },

    {
      id:     'mp_0002a',
      state:  '',
      onplay: 'play',
      author: "QUEEN",
      song:   "BOHEMIAN RHAPSODY",
      path:   "./mp3/Queen-BohemianRhapsody.mp3",
    },

    {
      id:     'mp_0003a',
      state:  '',
      onplay: 'play',
      author: "LYNYRD SKYNYRD",
      song:   "FREE BIRD",
      path:   "./mp3/LynyrdSkynyrd-FreeBird.mp3",
    },

    {
      id:     'mp_0004d',
      state:  '',
      onplay: 'play',
      author: "DEEP PURPLE",
      song:   "SMOKE ON THE WATER",
      path:   "./mp3/DeepPurple-SmokeOnTheWater.mp3",
    },

    {
      id:     'mp_0005d',
      state:  '',
      onplay: 'play',
      author: "JIMI HENDRIX",
      song:   "ALL ALONG THE WATCHTOWER",
      path:   "./mp3/JimiHendrix-AllAlongTheWatchtower.mp3",
    },

    {
      id:     'mp_0006d',
      state:  '',
      onplay: 'play',
      author: "AC/DC",
      song:   "BACK IN BLACK",
      path:   "./mp3/AcDc-BackIinBlack.mp3",
    },

    {
      id:     'mp_0007e',
      state:  '',
      onplay: 'play',
      author: "QUEEN",
      song:   "WE WILL ROCK YOU",
      path:   "./mp3/Queen-WeWillRockYou.mp3",
    },

    {
      id:     'mp_0008r',
      state:  '',
      onplay: 'play',
      author: "METALLICA",
      song:   "ENTER SANDMAN",
      path:   "./mp3/Metallica-EnterSandman.mp3",
    }
]);

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
                    <div className="Playlist-item-header control">
                      <span className="volumeDown material-icons-outlined"></span>&nbsp;
                      <Slider className="volumeSlider" defaultValue={50}/>&nbsp;
                      <span className="volumeUp material-icons-outlined"></span>
                    </div>
                </div>

                  {playList.map((playListItem) => {
                      return <PlayerItem key={playListItem.id}
                                         author={playListItem.author}
                                         song={playListItem.song}
                                         onplay={playListItem.onplay}
                                         onstate={playListItem.state}/>
                    })
                  }

                <div className="Playlist-table footer">
                    <div className="item-footer"></div>
                </div>
            </div>
      </main>
    </div>
  );
}

export default App;




{/* <PlayerItem author="ASdfetr" song="GHgJKKjh HJKhjkhK" />
<PlayerItem author="Sdfehrj JHgg" song="KkKKKk HJHjh JHKJH" />
<PlayerItem author="DFG" song="Ghhtyu Bngk" /> */}