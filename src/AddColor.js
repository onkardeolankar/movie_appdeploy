import React, { useState } from "react";
import Button from "@mui/material/Button";

export function AddColor() {
  const [color, setColor] = useState("green");
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  const [colorList, setcolorList] = useState([
    "orange",
    "red",
    "Pink",
    "green",
  ]);
  return (
    <div>
      <div className="added-color">
        <div className="add-color">
          <input
            onChange={(event) => {
              setColor(event.target.value);
            }}
            style={styles}
            type="text"
            placeholder="Enter a Color"
            value={color}
          />
          <Button
            variant="contained"
            color="error"
            onClick={() => setcolorList([...colorList, color])}
          >
            Add Color
          </Button>
        </div>
        {colorList.map((clr) => (
          <ColorBox color={clr} />
        ))}
      </div>
    </div>
  );
}
function ColorBox({ color }) {
  let styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
  };
  return <div className="ColorAdded" style={styles}></div>;
}
