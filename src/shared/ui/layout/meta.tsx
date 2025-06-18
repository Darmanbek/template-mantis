import { Flex } from "antd"
import { type ListItemMetaProps } from "antd/es/list/Item"
import Paragraph, { type ParagraphProps } from "antd/es/typography/Paragraph"
import Title, { type TitleProps } from "antd/es/typography/Title"
import type { FC } from "react"

interface MetaProps extends ListItemMetaProps {
	titleProps?: TitleProps
	titleStrong?: boolean
	descriptionProps?: ParagraphProps
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
				gap={8}
				{...rest}
			>
				<div>{avatar}</div>
				<Flex
					vertical={true}
					align={"start"}
				>
					<Title
						level={5}
						style={
							!titleStrong
								? {
										fontWeight: "normal",
									}
								: {}
						}
						{...titleProps}
					>
						{title}
					</Title>
					<Paragraph
						type={"secondary"}
						{...descriptionProps}
					>
						{description}
					</Paragraph>
				</Flex>
			</Flex>
		</>
	)
}

export { Meta }
