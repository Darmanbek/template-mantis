import { Badge, Button, Card, Flex, Form, Input, Space } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC, useMemo } from "react"
import { Link } from "react-router-dom"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"
import { validatePassword } from "src/utils"
import { Auth } from "./Auth"


interface TRegister {
	firstName: string
	lastName: string
	company: string
	email: string
	phone: string
	password: string
}

const Register: FC = () => {
	const [form] = Form.useForm<TRegister>()
	const password = Form.useWatch("password", form) || ""
	const [status, text] = useMemo(() => validatePassword(password), [password])
	
	return (
		<Auth>
			<Card className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Sign up
					</Title>
					<Link to={ROUTES.PAGES_AUTHENTICATION_LOGIN}>
						Already have an account?
					</Link>
				</Flex>
				<Form
					{...FORM_DEFAULT}
					name={"Register Form"}
					size={"large"}
					form={form}
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
						<Form.Item<TRegister>
							name={"firstName"}
							label={"First Name"}
							rules={[
								{ required: true }
							]}
						>
							<Input placeholder={"Alex"} />
						</Form.Item>
						<Form.Item<TRegister>
							name={"lastName"}
							label={"Last Name"}
							rules={[
								{ required: true }
							]}
						>
							<Input placeholder={"Mercer"} />
						</Form.Item>
					</Space>
					<Form.Item<TRegister>
						name={"company"}
						label={"Company"}
						rules={[
							{ required: true }
						]}
					>
						<Input placeholder={"Inc."} />
					</Form.Item>
					<Form.Item<TRegister>
						name={"email"}
						label={"Email Address"}
						rules={[
							{ required: true },
							{ type: "email" }
						]}
					>
						<Input placeholder={"user@example.com"} />
					</Form.Item>
					<Form.Item<TRegister>
						name={"phone"}
						label={"Email Address"}
						rules={[
							{ required: true },
							{ type: "email" }
						]}
					>
						<Input placeholder={"user@example.com"} />
					</Form.Item>
					<Form.Item<TRegister>
						name={"password"}
						label={"Password"}
						rules={[
							{ required: true },
							{ max: 10 }
						]}
						style={{
							marginBottom: 0
						}}
					>
						<Input.Password placeholder={"********"} />
					</Form.Item>
					<Badge
						status={status}
						text={text}
						styles={{
							indicator: {
								width: 80,
								borderRadius: 99
							}
						}}
						style={{
							marginBottom: 24
						}}
					/>
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
			</Card>
		</Auth>
	)
}

export { Register }
