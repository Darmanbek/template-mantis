import { Col, Row } from "antd"
import { type FC } from "react"
import { PreviewCard } from "./cards"
import { IncomeOverviewChart } from "./charts"
import { PageViewsList } from "./lists"
import {
	TotalMarketingStatistic,
	TotalOrderStatistic,
	TotalSalesStatistic,
	TotalUsersStatistic,
} from "./statistics"

const Analytics: FC = () => {
	return (
		<>
			<PreviewCard />
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				{[
					TotalUsersStatistic,
					TotalOrderStatistic,
					TotalSalesStatistic,
					TotalMarketingStatistic,
				].map((Content, index) => (
					<Col
						key={index}
						xs={24}
						sm={12}
						md={6}
					>
						<Content />
					</Col>
				))}
			</Row>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<IncomeOverviewChart />
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<PageViewsList />
				</Col>
			</Row>
		</>
	)
}

export default Analytics
