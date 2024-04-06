
import {forwardRef , useImperativeHandle , useRef} from 'react';
import { createPortal } from 'react-dom';
const Result = forwardRef( function Result({result ,targetTime , remainingTime , handleReset } , ref) {
    useImperativeHandle( ref, () => {
    return {
        open(){
          dialog.current.showModal();
        }
    };
    })
    const userLost = remainingTime <= 0;
    const formatRemainingTime = (remainingTime/1000).toFixed(2)
    const score =Math.round(( 1 - remainingTime / (targetTime *1000)) * 100) ;
    const dialog = useRef()
  return createPortal(
    <dialog className="result-modal" ref={dialog} >
      {userLost && <h2>You {result}</h2> }  
      {!userLost && <h2>You Score is {score}</h2> }  
        <p>The target time was <strong> {targetTime} seconds. </strong></p>
        <p>you stopped the timer was <strong> {formatRemainingTime} seconds left </strong></p>
        <form method='dialog' onSubmit={handleReset}>
            <button> close </button>

        </form>
    </dialog>,
    document.getElementById('modal')
  )
})
export default Result;
