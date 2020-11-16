import { useContext } from "react";

import cs from "../lib/ClassSelector";
import { ThemeContext } from "../lib/Contexts";

export function Skill({ imgSrc, title, value, className }) {
  const { theme } = useContext(ThemeContext);

  let skillClass = cs({
    "skill--dark": theme == "dark-theme",
    "skill--light": theme == "light-theme",
  });

  return (
    <>
      <div className={`skill ${skillClass} ${className || ""}`}>
        <img src={imgSrc} className="skill__img" />
        <div className="skill__body">
          <div className="skill__head">
            <h2 className="skill__title">{title}</h2>
            <p className="skill__percent">{value || 0}%</p>
          </div>
          <meter
            className="skill__meter"
            min="0"
            max="100"
            optimum="30"
            value={value || 0}
          ></meter>
        </div>
      </div>
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
        .skill {
          display: flex;
          justify-content: space-evenly;
          padding: 5px;
          transition: background-color 200ms;
          border-radius: 5px;
        }

        .skill--dark {
          background-color: black;
        }
        .skill--dark:hover {
          background-color: #777;
        }

        .skill--light {
          background-color: white;
        }
        .skill--light:hover {
          background-color: lightblue;
        }

        .skill__body {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        .skill__img {
          width: 70px;
          height: 70px;
          margin-right: 5px;
          background-color: #333;
        }
        .skill__head {
          display: flex;
          font-size: 0.8rem;
          justify-content: space-between;
          align-items: center;
        }
        .skill__meter {
          width: 100%;
          height: 1.5rem;
        }
        .skill__percent {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default function SkillSet(props) {
  const { theme } = useContext(ThemeContext);

  let SkillSetClass = cs({
    dark: theme == "dark-theme",
    light: theme == "light-theme",
  });

  const { title, skills, ...rest } = props;
  return (
    <>
      <div {...rest} className={SkillSetClass}>
        <h1>{title || "UNTITLE"}</h1>
        <ul>
          {skills.map((skillProps) => (
            <li key={skillProps.title}>
              <Skill {...skillProps} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div {
          font-size: 0.8rem;
          max-width: 300px;
          min-width: 250px;
          padding: 0 1rem 1rem;
          margin: 5px;
          border-radius: 10px;
        }
        .dark {
          background-color: #333;
          box-shadow: 0 0 5px white;
          color: white;
        }
        .light {
          background-color: gray;
          box-shadow: 0 0 7px black;
        }
        h1 {
          padding: 1rem 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
        @media screen and (min-width: 600px) {
          div {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}
