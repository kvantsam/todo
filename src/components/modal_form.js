import React from "react";
import "./modal-form.css";

const ModalForm = ({ onAdd, setModal }) => {
  const [label, setLabel] = React.useState("");
  return (
    <div className="backdrop">
      <div className="custom-modal">
        <div className="custom-modal-header">
          <h3 className="custom-modal-title">Add new todo</h3>
        </div>
        <div className="custom-modal-body">
          <input
            onChange={(e) => setLabel(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter new todo"
          />
        </div>
        <div className="custom-modal-footer">
          <button
            onClick={() => onAdd(label)}
            type="button"
            className="btn btn-primary"
          >
            Add
          </button>
          <button
            onClick={() => setModal(false)}
            type="button"
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
