// Context
import { useGlobalContext } from "../../context";
// React Icons
import { GiPaper } from "react-icons/gi";

const Paper = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <GiPaper onClick={() => onRPSIconClick("paper")} className='rps-icon' />
  );
};

export default Paper;
