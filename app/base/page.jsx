"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  width: 100,
  height: 50,
  backgroundColor: "#fff",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 10,
  border: "2px solid #000",
};

const handle = {
  width: 50,
  height: 50,
  backgroundColor: "#000",
  borderRadius: "50%",
};

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        style={handle}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        Click me
      </motion.div>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
