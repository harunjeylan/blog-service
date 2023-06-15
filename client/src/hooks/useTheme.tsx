"use client";
import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light" | "system">();
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      setTheme("light");
    } else {
      setTheme(undefined);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.classList.add(theme);
      localStorage.theme = theme;
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("light");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const setDark = () => {
    setTheme("dark");
  };
  const setLight = () => {
    setTheme("light");
  };
  const toggleLightDark = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const setSystemPreference = () => {
    setTheme(undefined);
  };
  return { setDark, setLight, toggleLightDark, setSystemPreference };
};

export default useTheme;
