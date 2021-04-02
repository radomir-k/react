import {useState, useCallback} from 'react';
import './TodoItem.css';

function TodoItem() {

    const [hlState, setStatus] = useState('new')

    const hlChangeState = useCallback(
        () => {
            if (hlState === 'new') {
                setStatus('progress')
            }
            if (hlState === 'progress') {
                setStatus('done')
            }
            if (hlState === 'done') {
                setStatus('new')
            }
        },
        [hlState],
    )

    return(
        <div className='todo-item'>
            <div className={`todo-item--state st-${hlState}`}>
                {hlState}
            </div>
            <div className='todo-item--name'>
                NAME
            </div>
            <button onClick={hlChangeState}>Change State</button>
        </div>
    );
}

export default TodoItem;