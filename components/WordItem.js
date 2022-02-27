import React, { useState } from "react";
import { Card } from "antd";

const WordItem = ({ children }) => {
  const [color, setColor] = useState();

  return (
    <div style={{ cursor: "pointer" }}>
      <Card.Grid
        style={{
          width: "20%",
          textAlign: "center",
          backgroundColor: color,
        }}
        onClick={() => setColor("green")}
      >
        {children}
      </Card.Grid>
    </div>
  );
};

export default WordItem;
