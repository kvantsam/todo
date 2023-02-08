import React from "react";
import "./item-staus-filter.css";

const ItemStatusFilter = ({ filter, onFilter }) => {
  return (
    <div className={"btn-group"}>
      <button
        onClick={() => onFilter("all")}
        type={"button"}
        className={
          filter === "all" ? "btn btn-info" : "btn btn-outline-secondary"
        }
      >
        All list
      </button>
      <button
        onClick={() => onFilter("active")}
        type={"button"}
        className={
          filter === "active" ? "btn btn-info" : "btn btn-outline-secondary"
        }
      >
        Active list
      </button>
      <button
        onClick={() => onFilter("done")}
        type={"button"}
        className={
          filter === "done" ? "btn btn-info" : "btn btn-outline-secondary"
        }
      >
        Done
      </button>
      <button
        onClick={() => onFilter("deleted")}
        type={"button"}
        className={
          filter === "deleted" ? "btn btn-info" : "btn btn-outline-secondary"
        }
      >
        Deleted
      </button>
    </div>
  );
};
export default ItemStatusFilter;
