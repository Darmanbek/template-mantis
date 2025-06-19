import { MoreOutlined } from "@ant-design/icons"
import { createFileRoute } from "@tanstack/react-router"
import { Button, Dropdown, Row, Typography } from "antd"
import { PageHeader } from "src/shared/ui"

const { Paragraph } = Typography

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})

const items = [
	{
		key: "1",
		label: (
			<a
				target={"_blank"}
				rel={"noopener noreferrer"}
				href={"http://www.alipay.com/"}
			>
				1st menu item
			</a>
		),
	},
	{
		key: "2",
		label: (
			<a
				target={"_blank"}
				rel={"noopener noreferrer"}
				href={"http://www.taobao.com/"}
			>
				2nd menu item
			</a>
		),
	},
	{
		key: "3",
		label: (
			<a
				target={"_blank"}
				rel={"noopener noreferrer"}
				href={"http://www.tmall.com/"}
			>
				3rd menu item
			</a>
		),
	},
]

const DropdownMenu = () => (
	<Dropdown
		key={"more"}
		menu={{ items }}
		placement={"bottomRight"}
	>
		<Button
			type={"text"}
			icon={<MoreOutlined style={{ fontSize: 20 }} />}
		/>
	</Dropdown>
)

const routes = [
	{
		title: "First-level Menu",
	},
	{
		title: "Second-level Menu",
	},
	{
		title: "Third-level Menu",
	},
]

const tags = [
	{
		color: "blue" as const,
		label: "process",
	},
	{
		color: "red" as const,
		label: "red",
	},
	{
		color: "green" as const,
		label: "green",
	},
]

const IconLink = ({ src, text }: { src: string; text: string }) => (
	<a
		style={{
			marginRight: 16,
			lineHeight: "24px",
		}}
	>
		<img
			style={{
				marginRight: 8,
			}}
			src={src}
			alt={text}
		/>
		{text}
	</a>
)

const content = (
	<>
		<Paragraph>
			Ant Design interprets the color system into two levels: a system-level color system and a
			product-level color system.
		</Paragraph>
		<Paragraph>
			Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
			easier for designers to have a clear psychological expectation of color when adjusting colors,
			as well as facilitate communication in teams.
		</Paragraph>
		<div>
			<IconLink
				src={"https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"}
				text={"Quick Start"}
			/>
			<IconLink
				src={"https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"}
				text={" Product Info"}
			/>
			<IconLink
				src={"https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"}
				text={"Product Doc"}
			/>
		</div>
	</>
)

const Content: React.FC<{ children: React.ReactNode; extraContent: React.ReactNode }> = ({
	children,
	extraContent,
}) => (
	<Row>
		<div style={{ flex: 1 }}>{children}</div>
		<div
			className={"image"}
			style={{
				marginLeft: 60,
			}}
		>
			{extraContent}
		</div>
	</Row>
)

function RouteComponent() {
	return (
		<>
			<PageHeader
				ghost={false}
				onBack={() => null}
				title={"Title"}
				subTitle={"This is a subtitle"}
				avatar={{
					src: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
				}}
				tags={tags}
				extra={[
					<Button key={"3"}>Operation</Button>,
					<Button key={"2"}>Operation</Button>,
					<Button
						key={"1"}
						type={"primary"}
					>
						Primary
					</Button>,
					<DropdownMenu key={"more"} />,
				]}
				breadcrumb={{ items: routes }}
			>
				<Content
					extraContent={
						<img
							src={"https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"}
							alt={"content"}
							width={"100%"}
						/>
					}
				>
					{content}
				</Content>
			</PageHeader>
		</>
	)
}
