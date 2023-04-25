import React from "react";

interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

const DropdownSelect: React.FC<DropdownProps> = (props: DropdownProps) => {
  return (
    <div>
      <select
        className="w-96"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      >
        <option className=" text-center" value="" disabled>
          --- Select Option ---
        </option>
        {props.options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
