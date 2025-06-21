import { Flex } from "antd"
import { type ListItemMetaProps } from "antd/es/list/Item"
import Text, { type TextProps } from "antd/es/typography/Text"
import Title, { type TitleProps } from "antd/es/typography/Title"
import type { FC } from "react"

interface MetaProps extends ListItemMetaProps {
	titleProps?: TitleProps
	titleStrong?: boolean
	descriptionProps?: TextProps
}

const Meta: FC<MetaProps> = (props) => {
	const {
		description,
		title,
		titleProps,
		titleStrong = true,
		descriptionProps,
		avatar,
		...rest
	} = props

	return (
		<>
			<Flex
				align={"center"}
				style={{ textAlign: "start" }}
				gap={8}
				{...rest}
			>
				{avatar && <div>{avatar}</div>}
				<Flex vertical={true}>
					<Title
						level={5}
						{...titleProps}
						style={{
							marginBottom: 0,
							fontWeight: !titleStrong ? "normal" : undefined,
							...titleProps?.style,
						}}
					>
						{title}
					</Title>
					<Text
						type={"secondary"}
						{...descriptionProps}
						style={{
							marginBottom: 0,
							...descriptionProps?.style,
						}}
					>
						{description}
					</Text>
				</Flex>
			</Flex>
		</>
	)
}

export { Meta }
