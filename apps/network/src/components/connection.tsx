import React from "react";
import { Button } from "@my-career/ui-kit";
import IconDefault from "../assets/icon-default";

interface ConnectionProps {
	name: string;
	picture: string | null;
	role: string;
	networkCount: number;
}

const Connection: React.FC<ConnectionProps> = ({
	name,
	picture,
	role,
	networkCount,
}) => {
	return (
		<div className="network--flex network--flex-col network--bg-white network--p-4 network--rounded-lg network--gap-4 network--border-solid network--border network--border-slate-700 network--items-center hover:network-border-blue-600 hover:network--cursor-pointer">
			<div>
				{picture === null && <IconDefault />}
				{picture !== null && <img className="network--w-12" src={picture} />}
			</div>
			<div className="network--text-base network--font-bold">{name}</div>
			<div className="network--text-xs network--text-gray-600">{role}</div>
			<div className="network--text-xs network--text-gray-600">
				공통 1촌 {networkCount}명
			</div>
			<div>
				<Button>1촌 맺기</Button>
			</div>
		</div>
	);
};

export default Connection;
