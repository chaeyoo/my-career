import { AppRoutingManager } from "@my-career/shell-router";
import React from "react";
import { type RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import PageHome from "./pages/page-home";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<Auth0ClientProvider>
				<AppRoutingManager type="app-posting" />
			</Auth0ClientProvider>
		),
		errorElement: <div>App Posting Error</div>,
		children: [
			{
				index: true,
				element: <PageHome />,
			},
		],
	},
];
