import { Col, Row } from "antd"
import { type FC } from "react"
import { IncomeOverviewChart, SalesReportChart, UniqueVisitorChart } from "./charts"
import { AnalyticsReportList, TransactionHistoryList } from "./lists"
import { DefaultStatistic } from "./statistics"
import { RecentOrdersTable } from "./tables"

const Default: FC = () => {
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
					<TransactionHistoryList />
				</Col>
			</Row>
		</>
	)
}

export default Default
