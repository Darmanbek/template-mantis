import { createStyles } from "antd-style"

export const useStylesTheme = createStyles(({ css, token }) => ({
	drawer: {},
	header: css`
		min-height: 70px;
		background-color: ${token.colorPrimary};
		color: ${token.colorWhite};

		.ant-drawer-header-title
		{
			display: flex;
			flex-direction: row-reverse;

			.ant-drawer-title
			{
				flex-grow: 1;
			}

			.ant-drawer-close
			{
				color: ${token.colorWhite};
			}
		}
	`,
	collapse: css`
		.ant-collapse-header
		{
			align-items: center !important;
		}
	`
}))
