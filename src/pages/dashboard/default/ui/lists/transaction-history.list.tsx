import { GiftOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons"
import { Avatar, Card, Flex, List } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { Meta } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const data = [
	{
		id: "002434",
		icon: <GiftOutlined />,
		color: "green" as const,
		price: 1430,
		percent: 78,
		date: "Today, 2:00 AM",
	},
	{
		id: "984947",
		icon: <MessageOutlined />,
		color: "blue" as const,
		price: 302,
		percent: 8,
		date: "5 August, 1:45 PM",
	},
	{
		id: "984947",
		icon: <SettingOutlined />,
		color: "red" as const,
		price: 682,
		percent: 16,
		date: "7 hour ago",
	},
]

const TransactionHistoryList: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Card
				title={"Transaction History"}
				styles={{
					body: {
						padding: 0,
					},
				}}
			>
				<List
					dataSource={data}
					renderItem={(item, index) => (
						<List.Item
							key={index}
							style={{
								paddingInline: token.padding,
								cursor: "pointer",
							}}
							className={cx(
								css({
									"&:hover": {
										backgroundColor: token.colorFillAlter,
									},
								})
							)}
						>
							<Flex
								justify={"space-between"}
								style={{ width: "100%" }}
							>
								<Meta
									avatar={
										<Avatar
											style={{
												backgroundColor: token[`${item.color}1`],
												color: token[item.color],
											}}
											size={36}
											icon={item.icon}
										/>
									}
									title={`Order #${item.id}`}
									description={item.date}
								/>
								<Meta
									title={formatCountUp(item.price, {
										prefix: "+ $",
									})}
									description={formatCountUp(item.percent, {
										suffix: "%",
									})}
									titleProps={{
										style: {
											textAlign: "end",
										},
									}}
									descriptionProps={{
										style: {
											textAlign: "end",
										},
									}}
								/>
							</Flex>
						</List.Item>
					)}
				/>
			</Card>
		</>
	)
}

export { TransactionHistoryList }
