import React from "react";
import { type RouteObject } from "react-router-dom";

import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import create from "./redux/create";
import { Provider } from "react-redux";
import PageList from "./pages/page-list";
import PageDetail from "./pages/page-detail";
import { AppRoutingManager } from "@my-career/shell-router";

const store = create();

export const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<Provider store={store}>
				<Auth0ClientProvider>
					<Layout>
						<AppRoutingManager type="app-job" />
					</Layout>
				</Auth0ClientProvider>
			</Provider>
		),
		errorElement: <div>App Job Error</div>,
		children: [
			{
				index: true,
				element: <PageList />,
			},
			{
				path: ":id",
				element: <PageDetail />,
			},
		],
	},
];
