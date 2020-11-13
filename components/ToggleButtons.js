import { useState } from "react";

export function ThemeToggle({ toggleHandler }) {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => {
    setEnabled(!enabled);
    toggleHandler();
  };
  return (
    <>
      <div
        className={`but ${enabled ? "dark" : "light"}`}
        onClick={toggle}
      ></div>
      <style jsx>{`
        .but {
          width: 25px;
          height: 25px;
          background-color: gray;
          background-image: url("/images/theme-image.jpg");
          background-position-y: 0;
          background-size: 200% 100%;
          transition: background-position 200ms;
          border-radius: 40px;
          cursor: pointer;
        }
        .light {
          background-position-x: -100%;
        }
        .dark {
          background-position-x: 0;
        }
        @media screen and (min-width: 500px) {
          .but {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </>
  );
}
