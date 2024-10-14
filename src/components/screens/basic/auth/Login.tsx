import { Button, Checkbox, Flex, Form, Input } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"
import { Link } from "react-router-dom"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"
import { Auth } from "./Auth"
import styles from "./auth.module.scss"

const Login: FC = () => {
	return (
		<Auth>
			<div className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Login
					</Title>
					<Link to={ROUTES.REGISTER}>
						Don't have an account?
					</Link>
				</Flex>
				<Form
					{...FORM_DEFAULT}
					name={"Login Form"}
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
						name={"password"}
						label={"Password"}
						rules={[
							{ required: true }
						]}
						initialValue={"12345678"}
					>
						<Input.Password />
					</Form.Item>
					<Flex align={"end"} justify={"space-between"}>
						<Form.Item
							name={"remember"}
							noStyle={true}
							valuePropName={"checked"}
							initialValue={false}
						>
							<Checkbox>
								Keep me sign in
							</Checkbox>
						</Form.Item>
						<Link to={ROUTES.FORGOT_PASSWORD}>
							Forgot Password?
						</Link>
					</Flex>
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
							Login
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Auth>
	)
}

export { Login }
