// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiScissors } from "react-icons/gi";

const Scissors = () => {
  const { onRPSIconClick, optionClicked } = useGlobalContext();
  return (
    <GiScissors
      onClick={() => onRPSIconClick("scissors")}
      className={optionClicked !== 3 ? "rps-icon rps-icon-inactive" : "rps-icon"}
    />
  );
};

export default Scissors;
