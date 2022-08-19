import "./styles.scss";

const options = [
  { name: "Aerosol" },
  { name: "Alcohol" },
  { name: "Barra" },
  { name: "Talco" },
];

interface IOptionsProps {
  open: boolean;
}

const Options = ({ open }: IOptionsProps) => {
  return (
    <ul className={open ? "options-none" : "options-active"}>
      {options.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Options;
