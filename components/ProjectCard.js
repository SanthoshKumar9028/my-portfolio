import { useContext } from "react";

import { ThemeContext } from "../lib/Contexts";
import cs from "../lib/ClassSelector";

export default function ProjectCard(props) {
  const { theme } = useContext(ThemeContext);

  const { title = "UNTITLE", imgSrc, links, className = "", ...rest } = props;

  return (
    <>
      <div {...rest} className={`${theme} ${className}`}>
        <h1>{title}</h1>
        <img src={imgSrc} />
        <ul>
          {links.map((link) => (
            <li key={link.name}>{link.icon}</li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          div {
            max-width: 350px;
            position: relative;
            overflow-y: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          h1 {
            background-color: dodgerblue;
            padding: 1rem;
            margin: 0;
          }
          ul {
            margin-left: 0;
            padding: 1rem;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            transition: transform 200ms;
            transform: translateY(100%);
          }
          li {
            list-style-type: none;
            width: 50px;
            margin-left: auto;
            text-align: center;
          }
          div:hover ul {
            transform: translateY(0);
          }
          img {
            display: block;
            background-color: gray;
            width: 100%;
          }

          .light-theme {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .light-theme:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
          }
          .light-theme h1 {
            background-color: dodgerblue;
          }
          .light-theme ul {
            background-color: white;
          }

          .dark-theme {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .dark-theme:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
          }
          .dark-theme h1 {
            background-color: #333;
          }
          .dark-theme ul {
            background-color: #333;
          }
        `}
      </style>
    </>
  );
}
