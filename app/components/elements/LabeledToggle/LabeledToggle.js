import styles from "./LabeledToggle.module.scss";
import Toggle from "@elements/Toggle/Toggle";

export default function LabeledToggle({ value, onClick, offLabel, onLabel }) {
  return (
    <div className={styles.LabeledToggle}>
      {/* <label>Prompt</label> */}
      <span className={value ? styles.active : ""}>{onLabel}</span>
      <Toggle className={value ? styles.active : ""} value={value} onClick={onClick} />
      <span className={!value ? styles.active : ""}>{offLabel}</span>
    </div>
  );
}
