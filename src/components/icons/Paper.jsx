// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiPaper } from "react-icons/gi";

const Paper = () => {
  const { onRPSIconClick, optionClicked } = useGlobalContext();
  return (
    <GiPaper onClick={() => onRPSIconClick("paper")} className={optionClicked !== 2? "rps-icon rps-icon-inactive" : "rps-icon"} />
  );
};

export default Paper;
