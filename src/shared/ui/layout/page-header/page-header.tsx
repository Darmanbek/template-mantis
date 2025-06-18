import { ArrowLeftOutlined } from "@ant-design/icons"
import {
	Avatar,
	type AvatarProps,
	Breadcrumb,
	type BreadcrumbProps,
	Button,
	Space,
	Tag,
	type TagProps,
} from "antd"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from "react"
import { usePageHeaderStyles } from "src/shared/ui/layout/page-header/page-header.style.ts"

type TagItem = Omit<TagProps, "children"> & {
	label: string
}

export interface PageHeaderProps extends Omit<ComponentPropsWithRef<"div">, "title"> {
	avatar?: AvatarProps
	backIcon?: ReactNode | boolean
	breadcrumb?: BreadcrumbProps
	// breadcrumbRender?: BreadcrumbProps["itemRender"]
	extra?: ReactNode
	footer?: ReactNode
	ghost?: boolean
	bordered?: boolean
	subTitle?: ReactNode
	tags?: TagItem | TagItem[]
	title?: ReactNode
	onBack?: () => void
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
	(
		{
			className,
			avatar,
			backIcon,
			breadcrumb,
			extra,
			footer,
			ghost = true,
			bordered = true,
			subTitle,
			tags,
			title,
			onBack,
			...props
		},
		ref
	) => {
		console.log({
			avatar,
			backIcon,
			breadcrumb,
			extra,
			footer,
			ghost,
			subTitle,
			tags,
			title,
			onBack,
		})
		const { cx, styles, prefixCls } = usePageHeaderStyles()
		return (
			<div
				ref={ref}
				className={cx(
					`${prefixCls}-page-header`,
					{
						[`${prefixCls}-page-header-ghost`]: ghost,
						[`${prefixCls}-page-header-bordered`]: bordered && !ghost,
						"has-breadcrumb": !!breadcrumb,
					},
					className,
					styles["page-header"]
				)}
				{...props}
			>
				{breadcrumb && <Breadcrumb {...breadcrumb} />}
				<div className={`${prefixCls}-page-header-heading`}>
					{(title || onBack) && (
						<div className={`${prefixCls}-page-header-heading-left`}>
							{!!onBack && (
								<div className={`${prefixCls}-page-header-back`}>
									<Button
										onClick={() => onBack()}
										type={"link"}
										className={`${prefixCls}-page-header-back-button`}
										size={"large"}
										style={{
											border: 0,
											background: "transparent",
											padding: 0,
											lineHeight: "inherit",
											display: "inline-block",
										}}
									>
										<ArrowLeftOutlined />
									</Button>
								</div>
							)}
							{avatar && <Avatar {...avatar} />}
							{title && (
								<Title
									level={4}
									className={`${prefixCls}-page-header-heading-title`}
								>
									{title}
								</Title>
							)}
							{subTitle && (
								<Text
									type={"secondary"}
									className={`${prefixCls}-page-header-heading-sub-title`}
								>
									{subTitle}
								</Text>
							)}
							{tags && (
								<div className={`${prefixCls}-page-header-heading-tags`}>
									{Array.isArray(tags)
										? tags?.map(({ label, ...tag }, index) => (
												<Tag
													key={index}
													{...tag}
													children={label}
												/>
											))
										: tags && (
												<Tag
													{...tags}
													children={tags.label}
												/>
											)}
								</div>
							)}
						</div>
					)}
					{extra && (
						<div className={`${prefixCls}-page-header-heading-extra`}>
							<Space>{extra}</Space>
						</div>
					)}
				</div>
			</div>
		)
	}
)
PageHeader.displayName = "PageHeader"

export { PageHeader }
