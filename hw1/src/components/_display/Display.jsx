import './Display.css';

function Display (props) {
    return (
        <div className="display">
            {props.countSet}
        </div>
    )
}

export default Display;