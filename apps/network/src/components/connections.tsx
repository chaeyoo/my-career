import React, { useEffect } from "react";
import { type ConnectionType } from "../types";
import Connection from "./connection";

interface ConnectionsProps {
	connections: ConnectionType[];
	fetchConnections: () => Promise<void>;
}

const Connections: React.FC<ConnectionsProps> = ({
	connections,
	fetchConnections,
}) => {
	useEffect(() => {
		fetchConnections();
	}, [fetchConnections]);

	return (
		<div className="network--flex network--flex-col network--bg-white network--p-4 network--rounded-lg network--gap-4">
			<div>서울 인천 지역에 사는 사람</div>
			<div className="network--grid network--grid-cols-4 network--gap-4">
				{connections.map((connection) => (
					<Connection {...connection} />
				))}
			</div>
		</div>
	);
};

export default Connections;
