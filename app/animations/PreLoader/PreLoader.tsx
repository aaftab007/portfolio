"use client";
import { useEffect, useState } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour", 
    "Ciao",
    "Olá",
    "नमस्ते",
    "Привет",
    "こんにちは",
    "안녕하세요",
    "Hallo"
  ];

  useEffect(() => {
    preLoaderAnim();
    
    let totalTime = 0;
    const delays = [
      400,  // Hello - slow start
      200,  // Hola - faster
      200,  // Bonjour - faster
      200,  // Ciao - faster
      200,  // Olá - faster
      200,  // नमस्ते - faster
      200,  // Привет - faster
      200,  // こんにちは - faster
      200,  // 안녕하세요 - faster
      400   // Hallo - slow finish
    ];

    const timeouts = delays.map((delay, index) => {
      totalTime += delay;
      return setTimeout(() => {
        setCurrentGreeting(index);
      }, totalTime);
    });

    // Cleanup timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="preloader flex h-screen w-full items-center justify-center overflow-hidden bg-[#0E1016]">
      <div className="texts-container flex items-center justify-center">
        <div className="greeting-text flex items-center justify-center gap-3">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <span className="text-xl font-medium text-white sm:text-2xl md:text-3xl lg:text-4xl">
            {greetings[currentGreeting]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
