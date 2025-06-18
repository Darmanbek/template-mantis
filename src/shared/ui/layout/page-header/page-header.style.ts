import { createStyles } from "antd-style"

export const usePageHeaderStyles = createStyles(({ css, token, prefixCls }) => ({
	"page-header": css`
		&.${prefixCls}-page-header {
			box-sizing: border-box;
			margin: 0;
			color: ${token.colorText};
			font-size: ${token.fontSize};
			font-vari${prefixCls}: tabular-nums;
			line-height: ${token.lineHeight};
			list-style: none;
			font-feature-settings: "trum";
			position: relative;
			padding: ${token.padding}px ${token.paddingLG}px;
			background: ${token.colorBgContainer};
			border-radius: ${token.borderRadiusLG}px;
			box-shadow: ${token.boxShadowTertiary};


			.${prefixCls}-page-header-heading {
				display: flex;
				justify-content: space-between;

				.${prefixCls}-page-header-heading-left {
					display: flex;
					align-items: center;
					margin: 4px 0;
					overflow: hidden;

					.${prefixCls}-page-header-back {
						margin-right: 16px;
						font-size: 16px;
						line-height: 1;

						.${prefixCls}-page-header-back-button {
							&.ant-btn-color-link.ant-btn-variant-link:not(:hover):not(:active) {
								 color: ${token.colorText};
							}
						}
					}

					.${prefixCls}-page-header-heading-title {
						margin-right: 12px;
						margin-bottom: 0;
						line-height: 32px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.${prefixCls}-page-header-heading-sub-title {
						margin-right: 12px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}

				.${prefixCls}-page-header-heading-right {
					margin: 4px 0;
					white-space: nowrap;
			}
		}

		&.${prefixCls}-page-header.has-breadcrumb {
			padding-top: ${token.paddingSM}px;

			.${prefixCls}-page-header-heading {
				margin-top: 8px;
			}
		}
		}

		&.${prefixCls}-page-header-bordered {
			border: ${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary};
			box-shadow: none;
		}

		&.${prefixCls}-page-header-ghost {
			background-color: inherit;
			border-radius: 0;
			border-color: transparent;
			box-shadow: none;
		}
	`,
}))
