// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiRock } from "react-icons/gi";

const Rock = () => {
  const { onRPSIconClick, optionClicked } = useGlobalContext();
  return <GiRock onClick={() => onRPSIconClick("rock")} className={optionClicked !== 1? "rps-icon rps-icon-inactive" : "rps-icon"} />;
};

export default Rock;
