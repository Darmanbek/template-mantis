import { Button, Card, Divider, Flex, Form, FormProps, Input } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Auth } from "src/components/screens/basic/auth/Auth"
import { UiInputMask } from "src/components/ui"
import { useFetchResponse } from "src/hooks"
import styles from "./auth.module.scss"
import { ROUTES } from "src/config/routes.config"
import { FORM_DEFAULT } from "src/constants"

interface TForgotPassword {
	email: string
	phone: string
}

const ForgotPassword: FC = () => {
	const navigate = useNavigate()
	const [form] = Form.useForm<TForgotPassword>()
	const {
		mutate: forgotPassword,
		isLoading,
		isSuccess,
	} = useFetchResponse()
	
	const email = Form.useWatch("email", form) || ""
	const phone = Form.useWatch("phone", form) || ""
	
	const onFinish: FormProps<TForgotPassword>["onFinish"] = (values) => {
		console.log(values)
		forgotPassword()
	}
	
	useEffect(() => {
		if (isSuccess) {
			navigate(ROUTES.PAGES_AUTHENTICATION_CHECK_MAIL)
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
						Forgot Password
					</Title>
					<Link to={ROUTES.PAGES_AUTHENTICATION_LOGIN}>
						Back to Login
					</Link>
				</Flex>
				<Form
					{...FORM_DEFAULT}
					name={"Forgot Password Form"}
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
						<Input placeholder={"Please enter"} disabled={!!phone} />
					</Form.Item>
					<Divider>OR</Divider>
					<Form.Item
						name={"phone"}
						label={"Phone Number"}
						rules={[
							{ required: !email }
						]}
						// initialValue={"+998 90 123 45 67"}
					>
						<UiInputMask mask={"+\\9\\98 99 999 99 99"} disabled={!!email} />
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
							loading={isLoading}
						>
							Send Password Reset Email or Phone
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</Auth>
	)
}

export { ForgotPassword }
