import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const STARTING_REMAINING_TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout");
      onConfirm();
    }, STARTING_REMAINING_TIMER);

    return () => {
      console.log("destructor");
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={STARTING_REMAINING_TIMER} />
    </div>
  );
}
