import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function MatrixParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="matrix-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00FF00",
          },
          shape: {
            type: "char",
            character: {
              value: ["0", "1"],
              font: "Courier New",
              style: "",
              weight: "bold",
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 14,
            random: true,
            anim: {
              enable: false,
            },
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 2,
            straight: true,
            outModes: {
              default: "out",
            },
          },
          trail: {
            enable: true,
            length: 5,
            fillColor: "#000000",
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
