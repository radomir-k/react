import {useState, useCallback} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PlayerItem.css';


function PlayerItem(props) {

    const [playState, setPlayStatus] = useState(props.onplay);
    const [activState, setActiveStatus] = useState(props.onstate);

    const playStateChange = useCallback(
        () => {
            if (playState === 'play') {
                setPlayStatus('pause');
                setActiveStatus('activ');
            }
            if (playState === 'pause') {
                setPlayStatus('play');
            }
        },
        [playState],
    )

    function playStateReset() {
        setPlayStatus('play');
        setActiveStatus('');
    }


    return (
        <div className={`Playlist-table data is-${activState}`}>
            <div className='Playlist-item id'>
                {props.id}
            </div>

            <div className='Playlist-item song'>
                {`${props.author} -|- ${props.song}`}
            </div>

            <div className='Playlist-item time'>
                {props.valTimeSong}
            </div>
            <div className='Playlist-item control'>
                <button className={`btn-on material-icons-outlined is-${playState}`} onClick={playStateChange}></button>
                <button className='btn-stop material-icons-outlined' onClick={playStateReset}></button>
                <Slider className='timeSlider' defaultValue={33} value={props.valTimeSlider}/>
            </div>

        </div>
    );
}

export default PlayerItem;