import React from "react";

interface SearchFilterProps {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
}

function SearchFilter(props: SearchFilterProps) {
  const handleValueChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onValueChange(e.target.value);
  };

  return (
    <>
      <div className="mt-4">
        <label className=" font-semibold">Filter By District: </label>
        <select
          className=" border-2 border-gray-500 px-2 pl-2"
          value={props.value}
          onChange={handleValueChange}
        >
          {props.options.map((option, index) => (
            <option className="" key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default SearchFilter;
