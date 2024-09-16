import { useState } from "react";
import { Checkbox } from "./ui";

type Props = {
  label: string;
  id: string;
};

const CheckIngredient = ({ label, id }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="rounded-full w-4 h-4 cursor-pointer"
        id={id}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className={`text-sm font-medium leading-none cursor-pointer ${
          isChecked ? "line-through opacity-50" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckIngredient;
