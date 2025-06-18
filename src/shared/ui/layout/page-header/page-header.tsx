import { ArrowLeftOutlined } from "@ant-design/icons"
import { AvatarProps, BreadcrumbProps, Button, TagProps } from "antd"
import Title from "antd/es/typography/Title"
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from "react"
import { usePageHeaderStyles } from "src/shared/ui/layout/page-header/page-header.style.ts"

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
	tags?: TagProps | TagProps[]
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
				<div className={`${prefixCls}-page-header-heading`}>
					{(title || onBack) && (
						<div className={`${prefixCls}-page-header-heading-left`}>
							{!!onBack && (
								<Button
									type={"link"}
									size={"large"}
									className={`${prefixCls}-page-header-back-button`}
									icon={<ArrowLeftOutlined />}
								/>
							)}
							<Title
								level={4}
								className={`${prefixCls}-page-header-heading-title`}
							>
								{title}
							</Title>
						</div>
					)}
				</div>
			</div>
		)
	}
)
PageHeader.displayName = "PageHeader"

export { PageHeader }
