import * as ReactDOM from "react-dom";
import "../../styles/dialog.css";

export default function Dialog(props) {
  const { children, open, setOpen } = props;
  if (open) {
    return ReactDOM.createPortal(
      <DialogComponent children={children} setOpen={setOpen} />,
      document.getElementById("modal")
    );
  }
  return null;
}

function DialogComponent(props) {
  const { children, setOpen } = props;
  return (
    <div className="modal-root">
      <div className="modal-container">
        <button className="close" onClick={() => setOpen(false)}>
          X
        </button>
        {/* <span onClick={() => setOpen(false)} className="close">
          &times;
        </span> */}
        {children}
      </div>
    </div>
  );
}
