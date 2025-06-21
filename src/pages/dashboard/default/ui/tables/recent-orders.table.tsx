import { Badge, Table, type TableColumnsType } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { Text, Title } from "src/shared/ui"
import { formatPrice } from "src/shared/utils"

type DataType = {
	tracking_number: string
	product_name: string
	total_order: number
	status: "rejected" | "approved" | "pending"
	total_amount: number
}

const data: DataType[] = [
	{
		tracking_number: "13256498",
		product_name: "Keyboard",
		total_order: 125,
		status: "rejected",
		total_amount: 70999,
	},
	{
		tracking_number: "13286564",
		product_name: "Computer Accessories",
		total_order: 100,
		status: "approved",
		total_amount: 83348,
	},
	{
		tracking_number: "84564564",
		product_name: "Camera Lens",
		total_order: 40,
		status: "rejected",
		total_amount: 40570,
	},
	{
		tracking_number: "86739658",
		product_name: "TV",
		total_order: 99,
		status: "pending",
		total_amount: 410780,
	},
	{
		tracking_number: "98652366",
		product_name: "Handset",
		total_order: 50,
		status: "approved",
		total_amount: 10239,
	},
	{
		tracking_number: "98753263",
		product_name: "Mouse",
		total_order: 89,
		status: "rejected",
		total_amount: 10570,
	},
	{
		tracking_number: "98753275",
		product_name: "Desktop",
		total_order: 185,
		status: "approved",
		total_amount: 98063,
	},
	{
		tracking_number: "98753291",
		product_name: "Chair",
		total_order: 100,
		status: "pending",
		total_amount: 14001,
	},
	{
		tracking_number: "98756325",
		product_name: "Mobile",
		total_order: 355,
		status: "approved",
		total_amount: 90989,
	},
	{
		tracking_number: "98764564",
		product_name: "Laptop",
		total_order: 300,
		status: "pending",
		total_amount: 180139,
	},
]

const columns: TableColumnsType<DataType> = [
	{
		align: "center",
		title: "Tracking №",
		dataIndex: "tracking_number",
		key: "tracking_number",
		render: (value: string) => (
			<Text
				type={"secondary"}
				className={cx(css`
					cursor: pointer;
					padding-bottom: 2px;

					&:hover {
						text-decoration: underline;
					}
				`)}
			>
				{value}
			</Text>
		),
	},
	{
		title: "Product Name",
		dataIndex: "product_name",
		key: "product_name",
	},
	{
		align: "end",
		title: "Total Order",
		dataIndex: "total_order",
		key: "total_order",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
		render: (value: DataType["status"]) => (
			<Badge
				status={
					{
						rejected: "error" as const,
						approved: "success" as const,
						pending: "processing" as const,
					}[value]
				}
				text={value}
				style={{ textTransform: "capitalize" }}
			/>
		),
	},
	{
		align: "end",
		title: "Total Amount",
		dataIndex: "total_amount",
		key: "total_amount",
		render: (value: number) => `$${formatPrice(value)}`,
	},
]

const RecentOrdersTable: FC = () => {
	return (
		<>
			<Table<DataType>
				rowKey={"tracking_number"}
				title={() => <Title level={5}>Recent Orders</Title>}
				dataSource={data}
				columns={columns}
			/>
		</>
	)
}

export { RecentOrdersTable }
