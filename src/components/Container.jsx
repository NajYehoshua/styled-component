import { Button, ButtonWithIcon } from "./Button";
import { FaPlus } from "react-icons/fa";

const Container = ({}) => {
  return (
    <div>
      <h1>Children</h1>

      <Button text="Button" />
      <ButtonWithIcon icon={<FaPlus />} text="Add Cart" />
    </div>
  );
};

export default Container;
