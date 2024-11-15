import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer",
          "HTML,CSS",
          "JavaScript",
          "React JS",
          "Redux",
          "Tailwid CSS",
          "Bootstrap",
          "Material UI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
