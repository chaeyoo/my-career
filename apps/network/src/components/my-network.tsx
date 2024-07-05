import React, { useEffect } from "react";
import { type MyNetworkType } from "../types";

interface MyNetworkProps {
	myNetwork: MyNetworkType | null;
	fetchMyNetwork: () => Promise<void>;
}

const MyNetwork: React.FC<MyNetworkProps> = ({ myNetwork, fetchMyNetwork }) => {
	useEffect(() => {
		fetchMyNetwork();
	}, [fetchMyNetwork]);

	if (myNetwork === null) {
		return null;
	}

	const {
		connectionCount,
		contactCount,
		eventCount,
		pageCount,
		user: { picture, name, email },
	} = myNetwork;

	return (
		<div>
			<div className="network--flex network--flex-col network--bg-white network--px-3 network--py-4 network--border-solid network--border-b network--border-slate-700 network--rounded-tr-lg network--rounded-tl-lg network--gap-2">
				<span className="network--text-base network--font-bold network--h-4 network--leading-4">
					인맥 관리
				</span>
			</div>
			<div className="network--flex network--flex-col network--bg-white network--py-2 network--border-b">
				<div className="network--flex network--flex-row network--text-base network--text-gray-600 network--py-2 network--px-3 network--justify-between hover:network--bg-gray-200 hover:network--cursor-pointer">
					<div>1촌</div>
					<div className="network--text-base network--text-gray-600">
						{connectionCount}
					</div>
				</div>
				<div className="network--flex network--flex-row network--text-base network--text-gray-600 network--py-2 network--px-3 network--justify-between hover:network--bg-gray-200 hover:network--cursor-pointer">
					<div>연락처</div>
					<div className="network--text-base network--text-gray-600">
						{contactCount}
					</div>
				</div>
				<div className="network--flex network--flex-row network--text-base network--text-gray-600 network--py-2 network--px-3 network--justify-between hover:network--bg-gray-200 hover:network--cursor-pointer">
					<div>이벤트</div>
					<div className="network--text-base network--text-gray-600">
						{eventCount}
					</div>
				</div>
				<div className="network--flex network--flex-row network--text-base network--text-gray-600 network--py-2 network--px-3 network--justify-between hover:network--bg-gray-200 hover:network--cursor-pointer">
					<div>페이지</div>
					<div className="network--text-base network--text-gray-600">
						{pageCount}
					</div>
				</div>
			</div>
			<div className="network--flex network--flex-col network--bg-white network--px-3 network--py-4 network--rounded-br-lg network--rounded-bl-lg network--gap-2 network--justify-center network--items-center">
				<img className="network--w-12" src={picture} />
				<div className="network--text-xs network--font-bold">{name}</div>
				<div className="network--text-xs network--text-gray-600">{email}</div>
			</div>
		</div>
	);
};

export default MyNetwork;
