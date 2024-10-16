import { Button, Card, Result } from "antd"
import { type  FC } from "react"

const NotFound: FC = () => {
	return (
		<Card
			style={{
				flexGrow: 1
			}}
			styles={{
				body: {
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}
			}}
		>
			<Result
				status={"404"}
				title={"Page Not Found"}
				subTitle={"The page you are looking was moved, removed, renamed, or might never exist!"}
				extra={<Button type={"primary"}>Back To Home</Button>}
			/>
		</Card>
	)
}

export { NotFound }
