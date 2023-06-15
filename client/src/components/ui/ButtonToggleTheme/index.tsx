"use client";

import useTheme from "@/hooks/useTheme";
import React from "react";

const ButtonToggleTheme = ({ id }: { id?: string }) => {
  const { toggleLightDark } = useTheme();

  return (
    <button
      id={id}
      data-test-id={`ButtonToggleTheme-${id}`}
      onClick={() => toggleLightDark()}
      className="btn-contained btn-contained-primary"
    >
      Theme
    </button>
  );
};

export default ButtonToggleTheme;
