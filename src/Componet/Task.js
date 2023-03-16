import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
function Task({id,title,status}) {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: " row",
            justifyContent: "space-between",
          }}
        >
          <input
            style={{ width: "25px", height: "25px", backgroundColor: "#eee" }}
            type="checkbox"
            defaultChecked={status}
          />
          <input
            onChange={(e) => {}}
            value={title}
            style={{ color: "white", opacity: 0.7, margin: "5px" }}
          />

          <div style={{ display: "flex", flexDirection: " row" }}>
            <div className="deleteIcon">
              <FaRegEdit color="#dac184" size={20} />
            </div>
            <div className="deleteIcon" onClick={() => {}}>
              <RiDeleteBinLine size={20} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Task;
