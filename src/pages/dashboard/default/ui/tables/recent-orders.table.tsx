import { Table } from "antd"
import { type FC } from "react"
import { Title } from "src/shared/ui"

const RecentOrdersTable: FC = () => {
	return (
		<>
			<Table
				title={() => <Title level={5}>Recent Orders</Title>}
				columns={[
					{
						title: "Tracking №",
						dataIndex: "tracking_number",
						key: "tracking_number",
					},
					{
						title: "Product Name",
						dataIndex: "product_name",
						key: "product_name",
					},
					{
						title: "Total Order",
						dataIndex: "total_order",
						key: "total_order",
					},
					{
						title: "Status",
						dataIndex: "status",
						key: "status",
					},
					{
						title: "Total Amount",
						dataIndex: "total_amount",
						key: "total_amount",
					},
				]}
			/>
		</>
	)
}

export { RecentOrdersTable }
