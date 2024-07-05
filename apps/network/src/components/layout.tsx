import React from "react";
import MyNetworkContainer from "../containers/my-network-container";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="network--flex network--flex-row network--gap-6 network--mx-auto network--my-0 network--mx-w-1128px">
			<div className="network--flex network--flex-col network--w-225px network--gap-2.5">
				<MyNetworkContainer />
			</div>
			<div className="network--flex network--flex-col network--w-879px network--gap-2.5">
				{children}
			</div>
		</div>
	);
};

export default Layout;
