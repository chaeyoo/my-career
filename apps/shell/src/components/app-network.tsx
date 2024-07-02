import React, { useEffect, useRef } from "react";
import inject from "network/injector";
import { useLocation } from "react-router-dom";
import { useShellEvent } from "@my-career/shell-router";
import { appNetworkBasename } from "../contants/prefix";

export default function AppNetwork() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useShellEvent("app-network", appNetworkBasename);

	const isFirstRunRef = useRef(true);
	const unmountRef = useRef(() => {});

	useEffect(() => {
		if (!isFirstRunRef.current) {
			return;
		}
		unmountRef.current = inject({
			routerType: "memory",
			rootElement: wrapperRef.current!,
			basePath: location.pathname.replace(appNetworkBasename, ""),
		});
		isFirstRunRef.current = false;
	}, [location]);

	useEffect(() => unmountRef.current, []);

	return <div ref={wrapperRef} id="app-network" />;
}
