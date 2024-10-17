import {
	Button,
	Card,
	Checkbox,
	Flex,
	Form,
	FormProps,
	Input
} from "antd"
import Title from "antd/es/typography/Title"
import { type  FC, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UiInputMask } from "src/components/ui"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"
import { useFetchResponse, useTranslation } from "src/hooks"
import { useAuthStore } from "src/store"
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
	const saveToken = useAuthStore(
		state => state.setToken
	)
	const { t } = useTranslation()
	const {
		data: token,
		mutate: login,
		isLoading,
		isSuccess
	} = useFetchResponse()
	
	const email = Form.useWatch("email", form)
	const phone = Form.useWatch("phone", form)
	
	
	const onFinish: FormProps<LoginFormValues>["onFinish"] = (values) => {
		console.log(values)
		login()
	}
	
	useEffect(() => {
		if (isSuccess) {
			saveToken(token)
			navigate(ROUTES.HOME, { replace: true })
		}
	}, [isSuccess, navigate])
	return (
		<Auth>
			<Card className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						{t("Login")}
					</Title>
					<Link to={ROUTES.PAGES_AUTHENTICATION_REGISTER}>
						{t("Don't have an account?")}
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
						label={t("Email Address")}
						rules={[
							{ required: !phone },
							{ type: "email" }
						]}
						initialValue={"user@example.com"}
					>
						<Input placeholder={t("Please enter")} />
					</Form.Item>
					<Form.Item
						name={"phone"}
						label={"Phone Number"}
						rules={[
							{ required: !email }
						]}
						initialValue={"+998 90 123 45 67"}
					>
						<UiInputMask mask={"+\\9\\98 99 999 99 99"} />
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
						<Link to={ROUTES.PAGES_AUTHENTICATION_FORGOT_PASSWORD}>
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
							loading={isLoading}
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
