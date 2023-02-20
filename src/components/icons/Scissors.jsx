// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiScissors } from "react-icons/gi";

const Scissors = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <GiScissors
      onClick={() => onRPSIconClick("scissors")}
      className='rps-icon'
    />
  );
};

export default Scissors;
