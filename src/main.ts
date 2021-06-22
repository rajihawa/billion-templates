import { createApp, newComponent, newTemplate } from "../../billionjs/src";
import "./style.css";

const App = newComponent(() => newTemplate("h1", {}, "Hello World"));

createApp("#app", App);
