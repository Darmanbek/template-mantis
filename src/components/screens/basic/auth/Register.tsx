import { Badge, Button, Flex, Form, Input, Space } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"
import { Link } from "react-router-dom"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"
import { Auth } from "./Auth"

const Register: FC = () => {
	return (
		<Auth>
			<div className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Sign up
					</Title>
					<Link to={ROUTES.LOGIN}>
						Already have an account?
					</Link>
				</Flex>
				<Form
					{...FORM_DEFAULT}
					name={"Register Form"}
					size={"large"}
					style={{ marginTop: 24 }}
				>
					<Space
						style={{ display: "flex" }}
						size={"large"}
						styles={{
							item: {
								flexGrow: 1
							}
						}}
					>
						<Form.Item
							name={"firstName"}
							label={"First Name"}
							rules={[
								{ required: true }
							]}
						>
							<Input placeholder={"Alex"} />
						</Form.Item>
						<Form.Item
							name={"lastName"}
							label={"Last Name"}
							rules={[
								{ required: true }
							]}
						>
							<Input placeholder={"Mercer"} />
						</Form.Item>
					</Space>
					<Form.Item
						name={"company"}
						label={"Company"}
						rules={[
							{ required: true }
						]}
					>
						<Input placeholder={"Inc."} />
					</Form.Item>
					<Form.Item
						name={"email"}
						label={"Email Address"}
						rules={[
							{ required: true },
							{ type: "email" }
						]}
					>
						<Input placeholder={"user@example.com"} />
					</Form.Item>
					<Form.Item
						name={"password"}
						label={"Password"}
						rules={[
							{ required: true }
						]}
						help={<Badge
							status={"error"}
							text={"Bad"}
							styles={{
								indicator: {
									width: 80	,
									borderRadius: 99
								}
							}}
							style={{
								marginBottom: 24
							}}
						/>}
					>
						<Input.Password placeholder={"********"} />
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
							Create Account
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Auth>
	)
}

export { Register }
