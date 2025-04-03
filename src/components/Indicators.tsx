import React from "react";

type Props = {
  label: string;
  forHtml: string;
  value: number;
  disabled: boolean;
  onChange: (value: number) => void;
};

const Indicators: React.FC<Props> = ({
  label,
  forHtml,
  value,
  disabled,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = Math.floor(Number(event.target.value));
    if ((!input && input !== 0) || input < 0) return;
    if (label !== "hours" && input > 60) return;
    onChange(input);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <input
        className={`w-4 p-2 border-0 text-center bg-transparent rounded-3 border-white ${
          value === 0 ? "text-danger" : "text-white"
        }`}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={forHtml}>{label}</label>
    </div>
  );
};

export default Indicators;
