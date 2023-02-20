// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiRock } from "react-icons/gi";

const Rock = () => {
  const { onRPSIconClick } = useGlobalContext();
  return <GiRock onClick={() => onRPSIconClick("rock")} className='rps-icon' />;
};

export default Rock;
