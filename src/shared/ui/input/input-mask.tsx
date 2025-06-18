import { ConfigProvider } from "antd"
import { cx } from "antd-style"
import type { Variant } from "antd/es/config-provider"
import { ConfigContext } from "antd/es/config-provider"
import useCSSVarCls from "antd/es/config-provider/hooks/useCSSVarCls"
import useSize from "antd/es/config-provider/hooks/useSize"
import type { SizeType } from "antd/es/config-provider/SizeContext"
import { FormItemInputContext } from "antd/es/form/context"
import useVariant from "antd/es/form/hooks/useVariants"
import useStyle from "antd/es/input/style"
import { forwardRef, type ReactNode, useContext, useMemo } from "react"
import type { Props, ReactInputMask as ReactInputMaskRef } from "react-input-mask"
import ReactInputMask from "react-input-mask"
import { useTranslation } from "src/shared/hooks"

export interface UiInputMaskProps extends Omit<Props, "size" | "prefix"> {
	prefix?: ReactNode
	suffix?: ReactNode
	size?: SizeType
	variant?: Variant
	bordered?: boolean
}

const InputMask = forwardRef<ReactInputMaskRef, UiInputMaskProps>((props, ref) => {
	const { size, variant = "outlined", prefix, suffix, className, bordered = true, ...rest } = props
	const { t } = useTranslation()
	const { getPrefixCls } = useContext(ConfigContext)
	const prefixCls = getPrefixCls("input")
	const rootCls = useCSSVarCls(prefixCls)
	const rootSize = useSize<SizeType>(size)
	const [, hashId, cssVarCls] = useStyle(prefixCls, rootCls)
	const [rootVariant] = useVariant("input", variant, bordered)

	const { status: contextStatus, hasFeedback, feedbackIcon } = useContext(FormItemInputContext)

	const classNames = useMemo(
		() =>
			prefix || suffix || hasFeedback
				? cx(
						prefixCls,
						`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId
					)
				: cx(
						prefixCls,
						`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId,
						`${prefixCls}-${rootVariant}`,
						contextStatus && `${prefixCls}-status-${contextStatus}`,
						cssVarCls,
						rootCls,
						className
					),
		[]
	)

	const input = (
		<ReactInputMask
			placeholder={t("Please enter")}
			className={classNames}
			ref={ref}
			maskChar={""}
			{...rest}
		/>
	)

	const withWrapper =
		prefix || suffix || hasFeedback ? (
			<>
				<span
					className={cx(
						`${prefixCls}-affix-wrapper`,
						`${prefixCls}-affix-wrapper${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId,
						`${prefixCls}-${rootVariant}`,
						contextStatus && `${prefixCls}-status-${contextStatus}`,
						cssVarCls,
						rootCls,
						className
					)}
				>
					{prefix && <span className={"ant-input-prefix"}>{prefix}</span>}
					{input}
					{(suffix || feedbackIcon) && (
						<span className={"ant-input-suffix"}>
							{suffix}
							{feedbackIcon}
						</span>
					)}
				</span>
			</>
		) : (
			input
		)

	return <ConfigProvider>{withWrapper}</ConfigProvider>
})
InputMask.displayName = "UiInputMask"

export { InputMask }
