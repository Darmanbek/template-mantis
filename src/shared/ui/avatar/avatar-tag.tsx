import type { TagProps } from "antd"
import { Avatar, type AvatarProps, Tag } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"

interface UiAvatarTagProps extends AvatarProps {
	tagProps?: TagProps
}

const AvatarTag: FC<UiAvatarTagProps> = (props) => {
	const { src, tagProps, ...rest } = props
	const { style, ...tagRest } = tagProps || {}
	const { token } = useToken()

	return (
		<>
			<Avatar
				shape={"square"}
				style={{
					fontSize: token.fontSizeLG,
				}}
				size={"large"}
				src={
					<Tag
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
							...style,
						}}
						{...tagRest}
					>
						{src}
					</Tag>
				}
				{...rest}
			/>
		</>
	)
}

export { AvatarTag }
