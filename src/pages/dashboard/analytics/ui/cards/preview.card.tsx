import { Button, Card, Col, Flex, Image, Row } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { Text, Title } from "src/shared/ui"

const PreviewCard: FC = () => {
	const { token } = useToken()
	const { colorType } = useThemeStore()
	const color1 = token[`${colorType}1`]
	const color2 = token[`${colorType}4`]
	const color3 = token[`${colorType}6`]
	const color4 = token[`${colorType}7`]
	const color5 = token[`${colorType}9`]

	return (
		<>
			<Card
				variant={"borderless"}
				style={{
					background: `linear-gradient(250.38deg, ${color1} 2.39%, ${color2} 34.42%, ${color3} 60.95%, ${color4} 84.83%, ${color5} 104.37%)`,
				}}
			>
				<Row>
					<Col span={12}>
						<Flex
							gap={16}
							vertical={true}
							style={{ padding: 24 }}
						>
							<Title
								level={2}
								style={{ color: "#fff" }}
							>
								Welcome to Mantis
							</Title>
							<Text style={{ color: "#fff" }}>
								The purpose of a product update is to add new features, fix bugs or improve the
								performance of the product.
							</Text>
							<div>
								<Button ghost={true}>View full statistic</Button>
							</div>
						</Flex>
					</Col>
					<Col span={12}>
						<Flex
							justify={"end"}
							align={"center"}
							style={{
								position: "relative",
								paddingRight: 64,
							}}
						>
							<Image
								preview={false}
								src={"/assets/dashboard/welcome-banner.webp"}
								width={"auto"}
								alt={"Preview Banner"}
								fallback={"/public/assets/dashboard/welcome-banner.webp"}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									right: "10%",
								}}
							>
								<Image
									preview={false}
									src={
										"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJySURBVHgBzZgxUutADIZ/e9LmAPEBwgHgALweXv8O8EhP6IGe0JMe6IEeHyChhwPAAUIf9NsSVoxDTCZL9p8Ri9f27DfSSqsYUM3n8wOxG7F9RKQO/whUT4ahWFfsFREp1fEIJdwsSZIXRCQD3NUxKjgqlfD2Zcz0Oj5AlKE1TRGZCJi56xkiU1q7jiqDKQI+I2IR8M1dZ4hMqdQ97jtLjkNEpo6OOcpayOPuWaBv7QE9ZfbEWI74f1HQUZakqTwbNPMTheCi16hCPFaIfVRFfJkIeKKRCAOIEpIgV988S4A3VKXIg+cCeIIAshCDoRLIHKXX6hrUQ6leP0U7L6+t1C14iGY4aij3h+rlQhpS82ZXgTcuH+IblIlAcQ8yIQhULz2WIEDluVcB/osA8v1g3y02dvPM4H/ufhdfQ3qJQLI9uOPmPkuMgDIp7mkKu6NwVm6K+yFLjQH23Vxjy6WwtBy/KEsSf9z1EJEMcOLmojruCkANn+2jXdlvR4hNTAKxR7GJWnBIrqE/d9ttK3144uyu9cs/h+s6h3Cdg6bnkoYXmdEXWCzQDwhQTmQt1tehm8rFRrrlmgH1RXrtDF8LMn8SPGGDsPol4xiVQ7jGwCCTFS8zo/9jeac9VWPtLI7AddoudcgIVT1+UchZ0vLlvRWgddEL1pq9o/oxZnOfZp7SZuPKQd7KvdFKwBps0XWjuYkIoT8/AvRyXyT6avRAD5sFH6wN+J00XNZQZKiOz8zN27hMY3ZVQQDbik0wylbOi/v13KpEB1uS1sA6HFu9sa8EW/GgVoZ7N7XgNa9tebB+epwvq5/bAuTRyfq48JGgSR+vqxtSm66JXgAAAABJRU5ErkJggg=="
									}
								/>
							</div>
						</Flex>
					</Col>
				</Row>
			</Card>
		</>
	)
}

export { PreviewCard }
