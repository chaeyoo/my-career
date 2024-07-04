import "./index.scss";
import { injectFactory } from "@my-career/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
	routes,
});

export default inject;
