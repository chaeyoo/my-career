import React from "react";
import ConnectionsContainer from "../components/connections-container";
import ManageConnection from "../components/manage-connection";

const PageHome: React.FC = () => {
	return (
		<>
			<ManageConnection />
			<ConnectionsContainer />
		</>
	);
};

export default PageHome;
