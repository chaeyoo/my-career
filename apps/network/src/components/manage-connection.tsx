import React from "react";
import { Button } from "@my-career/ui-kit";

const ManageConnection: React.FC = () => {
	return (
		<div className="network--flex network--flex-row network--bg-white network--p-4 network--rounded-lg network--justify-between network--items-center">
			<div>대기 중인 1촌 신청 없음</div>
			<div>
				<Button>관리</Button>
			</div>
		</div>
	);
};

export default ManageConnection;
