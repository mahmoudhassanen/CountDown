import { useRef , useState } from "react";

export default function Player() {
  let playerName = useRef();
  const [enteredPlayer , setEnteredPlayer ] = useState(null);
  function handleClick() {
    setEnteredPlayer(playerName.current.value);
    playerName.current.value = '';
    
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? 'unKnown player' }</h2>
      <p>
        <input type="text" 
                ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
