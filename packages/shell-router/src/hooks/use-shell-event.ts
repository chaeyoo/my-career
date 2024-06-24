// shell의 변경에 따라 이벤트를 내보내고 micro app의 변경에 따라 shell쪽으로 받을 수 있게 만든 이벤트 리스너 훅
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useShellEvent(type: string, basename: string) {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const appNavigationEventHandler = (event: Event) => {
			const pathname = (event as CustomEvent<string>).detail;
			const newPathname =
				pathname === "/" ? basename : `${basename}${pathname}`;

			if (newPathname === location.pathname) {
				return;
			}

			navigate(newPathname);
		};
		window.addEventListener(`[${type}] navigated`, appNavigationEventHandler);

		return () => {
			window.removeEventListener(
				`[${type}] navigated`,
				appNavigationEventHandler
			);
		};
	}, [basename, location, navigate, type]);

	// shell 쪽에서 페이지 변경됐을 때 이벤트 발생 시킴
	useEffect(() => {
		if (location.pathname.startsWith(basename)) {
			window.dispatchEvent(
				new CustomEvent("[app-shell] navigated", {
					detail: location.pathname.replace(basename, ""), // basename 제거
				})
			);
		}
	}, [basename, location]);
}
