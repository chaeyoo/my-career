import { routes } from "./routes";

import "./index.scss";
import { injectFactory } from "@my-career/shell-router";

const inject = injectFactory({
  routes,
});

export default inject;
