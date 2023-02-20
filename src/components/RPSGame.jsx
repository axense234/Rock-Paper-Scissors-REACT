// Components
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import RPSGameModal from "./RPSGameModal";

const RPSGame = () => {
  return (
    <section className='rps-game'>
      <div className='rps-game-icons'>
        <Rock />
        <Paper />
        <Scissors />
      </div>
      <RPSGameModal />
    </section>
  );
};

export default RPSGame;
