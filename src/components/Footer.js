import React from 'react'
import logo from "./imges/pokeball.png";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-1 text-center bg-white">
    <div className="container">
      {" "}
      © 2020 General Assembly SEi 36 Final Project{" "}
      <img
        src={logo}
        style={{ width: "1rem", height: "1rem", display: "inline" }}
      />{" "}
      Yukiko Isogimi{" "}
    </div>
  </footer>
  )
}
