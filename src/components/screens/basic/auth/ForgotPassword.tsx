import { Button, Flex, Form, Input } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"
import { Link } from "react-router-dom"
import { Auth } from "src/components/screens/basic/auth/Auth"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"

const ForgotPassword: FC = () => {
	return (
		<Auth>
			<div className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Forgot Password
					</Title>
					<Link to={ROUTES.LOGIN}>
						Back to Login
					</Link>
				</Flex>
				<Form
					{...FORM_DEFAULT}
					name={"Forgot Password Form"}
					size={"large"}
					style={{ marginTop: 24 }}
				>
					<Form.Item
						name={"email"}
						label={"Email Address"}
						rules={[
							{ required: true },
							{ type: "email" }
						]}
						initialValue={"user@example.com"}
					>
						<Input />
					</Form.Item>
					<Form.Item
						style={{
							marginTop: 24,
							marginBottom: 0
						}}
					>
						<Button
							type={"primary"}
							htmlType={"submit"}
							block={true}
						>
							Send Password Reset Email
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Auth>
	)
}

export { ForgotPassword }
