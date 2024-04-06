import React , {useState , useRef} from 'react'
import Result from './Result.jsx';

export default function TimerChange({title , targetTime}) {
  
  const [timerRemaining, settimerRemaining] = useState(targetTime * 1000)

 const timerActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;
 
  const timer = useRef()
  const dialog = useRef()
if (timerRemaining <=0 ) {
  clearInterval(timer.current);

  dialog.current.open()
}
  function handleStart() {
   timer.current =  setInterval(() => {
      
      settimerRemaining(prevRemaining  =>  prevRemaining - 10)
    },  10);
   
  }
  function handleStop() {
    clearInterval(timer.current)
    dialog.current.open()
  }
  function handleReset() {
    settimerRemaining(targetTime * 1000)
    
  }
  return (
    <>
   <Result targetTime={targetTime} result='Lost' ref={dialog} remainingTime={timerRemaining} handleReset={handleReset} /> 
 
  <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <button onClick={timerActive ? handleStop : handleStart}> 
    { timerActive? 'Stop' : 'Start'} challenge
     </button>
    <p className={timerActive ? 'active' : ''}>{timerActive ? 'Time is running' : 'Time is inactive'}</p>
  </section> 
  </>
  )
}
