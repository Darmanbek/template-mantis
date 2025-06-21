import { Card, Flex, List } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { Meta } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const data = [
	{
		title: "Admin Home",
		description: "/dashboard/default",
		count: 7755,
		percent: 31.74,
	},
	{
		title: "Form Elements",
		description: "/dashboard/forms",
		count: 5215,
		percent: 28.53,
	},
	{
		title: "Utilities",
		description: "/dashboard/utils",
		count: 4848,
		percent: 25.35,
	},
	{
		title: "Form Validation",
		description: "/dashboard/forms/validation",
		count: 3275,
		percent: 23.17,
	},
	{
		title: "Modals",
		description: "/dashboard/modals",
		count: 3003,
		percent: 22.21,
	},
]

const PageViewsList: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Card
				title={"Page Views by Page Title"}
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
								paddingInline: 16,
								paddingBlock: 24,
								cursor: "pointer",
							}}
							className={cx(css`
								&:hover {
									background-color: ${token.colorFillAlter};
								}
							`)}
						>
							<Flex
								justify={"space-between"}
								style={{ width: "100%" }}
							>
								<Meta
									title={item.title}
									description={item.description}
								/>
								<Meta
									style={{
										textAlign: "end",
									}}
									titleProps={{
										level: 4,
										style: {
											color: token.colorPrimary,
										},
									}}
									title={formatCountUp(item.count)}
									description={formatCountUp(item.percent, {
										decimals: 2,
										suffix: "%",
									})}
								/>
							</Flex>
						</List.Item>
					)}
				/>
			</Card>
		</>
	)
}

export { PageViewsList }
