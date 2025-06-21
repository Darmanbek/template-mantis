import { Avatar, Button, Card, Col, Flex, Row } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { Meta } from "src/shared/ui"
import { IncomeOverviewChart, SalesReportChart, UniqueVisitorChart } from "./charts"
import { AnalyticsReportList, TransactionHistoryList } from "./lists"
import { DefaultStatistic } from "./statistics"
import { RecentOrdersTable } from "./tables"

const Default: FC = () => {
	const { token } = useToken()

	return (
		<>
			<DefaultStatistic />
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<UniqueVisitorChart />
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<IncomeOverviewChart />
				</Col>
			</Row>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<RecentOrdersTable />
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<AnalyticsReportList />
				</Col>
			</Row>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<SalesReportChart />
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<Flex
						vertical={true}
						gap={24}
					>
						<TransactionHistoryList />
						<Card>
							<Flex
								vertical={true}
								gap={24}
							>
								<Flex
									justify={"space-between"}
									align={"center"}
								>
									<Meta
										title={"Help & Support Chat"}
										description={"Typical replay within 5 min"}
									/>
									<Avatar.Group>
										<Avatar
											style={{
												backgroundColor: token.blue,
											}}
											src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
										/>
										<Avatar
											style={{
												backgroundColor: token.red,
											}}
											src={"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}
										/>
										<Avatar
											style={{
												backgroundColor: token.green,
											}}
											src={"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}
										/>
										<Avatar
											style={{
												backgroundColor: token.cyan,
											}}
											src={"https://api.dicebear.com/7.x/miniavs/svg?seed=4"}
										/>
									</Avatar.Group>
								</Flex>
								<Button
									type={"primary"}
									block={true}
								>
									Need Help?
								</Button>
							</Flex>
						</Card>
					</Flex>
				</Col>
			</Row>
		</>
	)
}

export default Default
