import {
	Button,
	Card,
	Checkbox,
	Divider,
	Flex,
	Form,
	FormProps,
	Input
} from "antd"
import Title from "antd/es/typography/Title"
import { type  FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"
import { sleep } from "src/utils/faker.utils"
import { saveToken } from "src/utils/storage.utils"
import { Auth } from "./Auth"
import styles from "./auth.module.scss"

interface LoginFormValues {
	email: string
	phone: string
  password: string
  remember?: boolean
}

const Login: FC = () => {
	const [form] = Form.useForm<LoginFormValues>()
	const navigate = useNavigate()
	
	const email = Form.useWatch("email", form)
	const phone = Form.useWatch("phone", form)
	
	const [loading, setLoading] = useState(false)
	
	const onFinish: FormProps<LoginFormValues>["onFinish"] = (values) => {
		console.log(values)
		setLoading(true)
		sleep().then(token => {
			saveToken(token)
			setLoading(false)
			navigate(ROUTES.HOME, { replace: true })
		})
	}
	
	return (
		<Auth>
			<Card className={styles.content}>
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
					form={form}
					onFinish={onFinish}
					style={{ marginTop: 24 }}
				>
					<Form.Item
						name={"email"}
						label={"Email Address"}
						rules={[
							{ required: !phone },
							{ type: "email" }
						]}
						initialValue={"user@example.com"}
					>
						<Input />
					</Form.Item>
					<Divider>Or</Divider>
					<Form.Item
						name={"phone"}
						label={"Phone Number"}
						rules={[
							{ required: !email },
						]}
						initialValue={"+998 90 123 45 67"}
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
							loading={loading}
							block={true}
						>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</Auth>
	)
}

export { Login }
