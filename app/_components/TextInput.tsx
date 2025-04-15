import { FC, InputHTMLAttributes } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  fieldId: string;
  inputType?: "input" | "textarea";
  [x: string]: any;
}

const TextInput: FC<TextInputProps> = ({
  fieldId,
  fieldName,
  inputType = "input",
  ...props
}) => {
  return (
    <div className={styles["form-row"]}>
      {/* conditionally render inputs */}
      {inputType === "input" && (
        <input
          id={fieldId}
          name={fieldId}
          type="text"
          placeholder=""
          {...props}
        />
      )}
      {inputType === "textarea" && (
        <textarea id={fieldId} name={fieldId} placeholder="" />
      )}
      <label htmlFor={fieldId}>{fieldName}</label>
    </div>
  );
};

export default TextInput;
