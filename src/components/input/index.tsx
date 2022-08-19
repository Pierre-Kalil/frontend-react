import "./styles.scss";
import { IInputProps } from "../../types/types";

export const Input = ({ value, onChange, placeholder }: IInputProps) => {
  return (
    <section className="input-container">
      <div className="input-box">
        <input value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    </section>
  );
};
