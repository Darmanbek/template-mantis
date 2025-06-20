import { Card, Checkbox, Flex, Select, Space, Statistic } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { formatCountUp } from "src/shared/utils"

const SalesReportChart: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Card
				title={"Sales Report"}
				extra={
					<Select
						defaultValue={"1"}
						style={{ minWidth: 100 }}
						options={[
							{
								value: "1",
								label: "Today",
							},
							{
								value: "2",
								label: "This Month",
							},
							{
								value: "3",
								label: "This Year",
							},
						]}
					/>
				}
			>
				<Flex justify={"space-between"}>
					<Statistic
						title={"Net Profit"}
						value={1560}
						formatter={(value) =>
							formatCountUp(value, {
								prefix: "$",
							})
						}
					/>
					<Space>
						<Checkbox
							className={cx(css`
								&.ant-checkbox-checked {
									border-color: ${token.yellow4};

									.ant-checkbox-inner {
										background-color: ${token.yellow};
									}
								}
							`)}
						>
							Income
						</Checkbox>
						<Checkbox>Cost of Sales</Checkbox>
					</Space>
				</Flex>
			</Card>
		</>
	)
}

export { SalesReportChart }
