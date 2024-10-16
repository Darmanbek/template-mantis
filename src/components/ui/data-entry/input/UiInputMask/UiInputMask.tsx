import { ConfigProvider } from "antd"
import { ConfigContext, Variant } from "antd/es/config-provider"
import useCSSVarCls from "antd/es/config-provider/hooks/useCSSVarCls"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FormItemInputContext } from "antd/es/form/context"
import useStyle from "antd/es/input/style"
import useVariant from "antd/es/form/hooks/useVariants"
import { cx } from "antd-style"
import { forwardRef, type ReactNode, useContext } from "react"
import InputMask, { Props, ReactInputMask } from "react-input-mask"
import { useTranslation } from "src/hooks"

export interface UiInputMaskProps extends Omit<Props, "size" | "prefix"> {
	prefix?: ReactNode
	suffix?: ReactNode
	size?: SizeType
	variant?: Variant
	bordered?: boolean
}

const UiInputMask = forwardRef<ReactInputMask, UiInputMaskProps>(
	(props, ref) => {
		const {
			size,
			variant = "outlined",
			prefix,
			suffix,
			className,
			bordered = true,
			...rest
		} = props
		const { t } = useTranslation()
		const {
			getPrefixCls
		} = useContext(ConfigContext)
		const prefixCls = getPrefixCls("input")
		const rootCls = useCSSVarCls(prefixCls)
		const rootSize = useSize<SizeType>(size)
		const [, hashId, cssVarCls] = useStyle(prefixCls, rootCls)
		const [rootVariant] = useVariant("input", variant, bordered)
		
		const {
			status: contextStatus,
			hasFeedback,
			feedbackIcon
		} = useContext(FormItemInputContext)
		
		if (prefix || suffix || hasFeedback) return (
			<ConfigProvider>
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
				<InputMask
					placeholder={t("Please enter")}
					className={cx(
						prefixCls,
						`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId
					)}
					maskChar={""}
					{...rest}
				/>
				{(suffix || feedbackIcon) &&
					<span className={"ant-input-suffix"}>{suffix}{feedbackIcon}</span>}
		</span>
			</ConfigProvider>
		)
		return (
			<ConfigProvider>
				<InputMask
					placeholder={t("Please enter")}
					className={cx(
						prefixCls,
						`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId,
						`${prefixCls}-${rootVariant}`,
						contextStatus && `${prefixCls}-status-${contextStatus}`,
						cssVarCls,
						rootCls,
						className
					)}
					ref={ref}
					maskChar={""}
					{...rest}
				/>
			</ConfigProvider>
		)
	}
)
UiInputMask.displayName = "UiInputMask"

export { UiInputMask }
