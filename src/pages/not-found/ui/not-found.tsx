import { rootRouteId, useMatch, useRouter } from "@tanstack/react-router"
import { Button, Card, Flex, Result } from "antd"
import { type FC } from "react"

const NotFound: FC = () => {
	const router = useRouter()
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	})
	const content = (
		<Result
			status={"404"}
			title={"Page Not Found"}
			subTitle={"The page you are looking was moved, removed, renamed, or might never exist!"}
			extra={
				<Button
					type={"primary"}
					onClick={() => router.history.back()}
				>
					Back To Home
				</Button>
			}
		/>
	)

	if (isRoot)
		return (
			<Flex
				flex={1}
				justify={"center"}
				align={"center"}
				style={{
					height: "100%",
				}}
			>
				{content}
			</Flex>
		)

	return (
		<Card
			style={{
				flexGrow: 1,
			}}
			styles={{
				body: {
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
			}}
		>
			{content}
		</Card>
	)
}

export default NotFound
