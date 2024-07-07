import React from "react";
import { type RouteObject } from "react-router-dom";

import Auth0ClientProvider from "./providers/auth0-client-provider";
import { AppRoutingManager } from "@my-career/shell-router";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<Auth0ClientProvider>
				<AppRoutingManager type="app-job" />
			</Auth0ClientProvider>
		),
		errorElement: <div>App Job Error</div>,
		children: [
			{
				index: true,
				element: <div>job home</div>,
			},
		],
	},
];
