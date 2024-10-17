import { type ListItemMetaProps, Meta } from "antd/es/list/Item"
import Paragraph, { type ParagraphProps } from "antd/es/typography/Paragraph"
import Title, { type TitleProps } from "antd/es/typography/Title"
import { type  FC } from "react"
import { useStylesMeta } from "./useStylesMeta"

interface UiMetaProps extends ListItemMetaProps {
	titleProps?: TitleProps
	titleStrong?: boolean
	descriptionProps?: ParagraphProps
}

const UiMeta: FC<UiMetaProps> = (props) => {
	const {
		description,
		title,
		titleProps,
		titleStrong = true,
		descriptionProps,
		...rest
	} = props
	const { styles } = useStylesMeta()
	
	return (
		<>
			<Meta
				className={styles.meta}
				title={(
					<Title
						level={5}
						style={!titleStrong ? {
							fontWeight: "normal"
						} : {}}
						{...titleProps}
					>
						{title}
					</Title>
				)}
				description={(
					<Paragraph
						type={"secondary"}
						{...descriptionProps}
					>
						{description}
					</Paragraph>
				)}
				{...rest}
			/>
		</>
	)
}

export { UiMeta }
