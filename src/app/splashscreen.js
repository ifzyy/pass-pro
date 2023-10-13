"use client";
import { useState, useEffect } from "react";
import anime from "animejs";
import { preLoaderAnim } from "./animations";
import TypeWriter from "typewriter-effect";
function SplashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    }); 
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1.5,
      duration: 6000,
      easing: "easeInOutExpo",
    });
  };
  useEffect(() => {
    preLoaderAnim();
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="preloader" isMounted={isMounted}>
      <h1 id="logo" className="texts-container">
        <span>Pass</span>
        <span>Pro</span>
      </h1>
      <TypeWriter
        options={{
          strings: ["All In One"],
          autoStart: true,
          loop: true,
          className: "type"
        }}
      />
    </div>
  );
}

export default SplashScreen;
