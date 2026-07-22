"use client";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "");
    }
  }, [dark]);

  return (
    <button 
      id="theme-switcher"
      onClick={() => setDark(!dark)}
      style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
    >
      Ganti Tema
    </button>
  );
}