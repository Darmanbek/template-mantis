import { Avatar, type AvatarProps, Tag, TagProps, theme } from "antd"
import { type  FC } from "react"

interface UiAvatarTagProps extends AvatarProps {
	tagProps?: TagProps
}

const UiAvatarTag: FC<UiAvatarTagProps> = (props) => {
	const { src, tagProps, ...rest } = props
	const { style, ...tagRest } = tagProps || {}
	const { token } = theme.useToken()
	return (
		<>
			<Avatar
				shape={"square"}
				style={{
					fontSize: token.fontSizeLG
				}}
				size={"large"}
				src={<Tag
					bordered={false}
					style={{
						height: "inherit",
						width: "inherit",
						display: "flex",
						fontSize: "inherit",
						alignItems: "center",
						justifyContent: "center",
						padding: 0,
						margin: 0,
						...style
					}}
					{...tagRest}
				>
					{src}
				</Tag>}
				{...rest}
			/>
		</>
	)
}

export { UiAvatarTag }
