import React from "react";
import "./DropdownMenu.css";
import Select from "react-select";

interface DropdownMenuProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
  const options2 = [
    { value: "SWE", label: "Software Development" },
    { value: "graphics", label: "Graphics/Rendering" },
    { value: "tools", label: "TD work/Pipeline tools/Plugins" },
  ];

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      border: 0,
        // This line disable the blue border
        boxShadow: '0 0 0 1px #b78a80',
        '&:hover': {
        boxShadow: '0 0 0 3px #b78a80',
        }
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? "#f2c9bf" : "#b78a80",
      color: state.isFocused ? "#333333" : "#FFFFFF",
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#b78a80",
    }),
  };

  const handleChange = (selectedOption) => {
    // Only pass the selected value (string) to the parent component
    onSelect(selectedOption ? selectedOption.value : null);
  };

  return (
    <div>
      <div className="dropdown-page">
        <Select
          options={options2}
          className='select'
          styles={customStyles}
          onChange={handleChange}
          isClearable
          placeholder="Filter by Project Categories"
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
