import { ISpinnerProps } from "../../types";
import './styles.css';

export const Spinner = ({ top, left }: ISpinnerProps) => (
  <div
    className="spinner-border main-spinner"
    role="status"
    style={{
      top: `${top}px`,
      left: `${left}px`
    }}
  />
)