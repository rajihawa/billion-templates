import { startApp } from "../../billionjs/src";
import { BF } from "../../billionjs/src/bht";
import { state } from "../../billionjs/src/state";
import "./style.css";

const button: BF<string> = (c: string) => {
  return [
    "button",
    {
      style: {
        "font-size": "40px",
        margin: "20px",
      },
    },
    c,
  ];
};

const main: BF = () => {
  const [i, setI] = state(0);

  return ["div.bg#abc", button("click"), button("me"), button(i.toString())];
};

startApp("#app", main);
