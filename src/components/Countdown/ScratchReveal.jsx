import React, { useRef, useState, useEffect } from "react";

const ScratchCircle = ({ size = 150, coverImage, label }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = coverImage;

    img.onload = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, -2, -2, size + 4, size + 4);
    };
  }, [coverImage, size]);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMove = (e) => {
    if (!isDrawing) return;

    e.preventDefault();

    const pos = getPosition(e);
    scratch(pos.x, pos.y);
  };

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        fontWeight: "bold",
        // Background Properties
        backgroundImage: 'url("/assets/png/stagelogo.png")',
        backgroundSize: "contain",      // Ensures the whole logo is visible
        backgroundPosition: "center",   // Centers the logo
        backgroundRepeat: "no-repeat",  // Prevents the logo from tiling
        // Styling
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        color: "white",
        textShadow: "1px 1px 3px rgb(10, 10, 10)",
      }}
    >
      {label}

      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
          display: "block",
          touchAction: "none"
        }}
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDrawing(true)}
        onTouchEnd={() => setIsDrawing(false)}
        onTouchMove={handleMove}
      />
    </div>
  );
};

export default ScratchCircle;