import { useEffect, useRef } from "react";

export default function DrawRectTangle() {
  const refRect = useRef(null);
  const initRect = () => {
    const dom = document.querySelector("#drawRectTangle") as HTMLCanvasElement;
    if (!dom) return false;
    const ctx = dom.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "rgb(0,0,255,1.0)";
    ctx.fillRect(120, 10, 150, 150);
  };
  useEffect(() => {
    initRect();
    return () => {};
  }, []);
  return (
    <div>
      <canvas
        id="drawRectTangle"
        ref={refRect}
        width="400"
        height="400"
      ></canvas>
    </div>
  );
}
