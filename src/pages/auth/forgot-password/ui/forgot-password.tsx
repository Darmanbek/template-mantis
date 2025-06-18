import { Link, useNavigate } from "@tanstack/react-router"
import { Button, Divider, Flex, Form, type FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { ROUTES } from "src/shared/config"
import { FORM_DEFAULT } from "src/shared/constants"
import { useFetchResponse } from "src/shared/hooks"
import { InputMask, Title } from "src/shared/ui"

interface TForgotPassword {
	email: string
	phone: string
}

const ForgotPassword: FC = () => {
	const navigate = useNavigate()
	const [form] = Form.useForm<TForgotPassword>()
	const { mutate: forgotPassword, isLoading, isSuccess } = useFetchResponse()

	const email = Form.useWatch("email", form) || ""
	const phone = Form.useWatch("phone", form) || ""

	const onFinish: FormProps<TForgotPassword>["onFinish"] = (values) => {
		console.log(values)
		forgotPassword()
	}

	useEffect(() => {
		if (isSuccess) {
			navigate({
				to: ROUTES.PAGES_AUTHENTICATION_CHECK_MAIL,
			})
		}
	}, [isSuccess, navigate])
	return (
		<>
			<Flex
				align={"end"}
				justify={"space-between"}
				style={{ marginBottom: 4 }}
			>
				<Title level={3}>Forgot Password</Title>
				<Link to={ROUTES.PAGES_AUTHENTICATION_LOGIN}>Back to Login</Link>
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
					rules={[{ required: !phone }, { type: "email" }]}
					initialValue={"user@example.com"}
				>
					<Input
						placeholder={"Please enter"}
						disabled={!!phone}
					/>
				</Form.Item>
				<Divider>OR</Divider>
				<Form.Item
					name={"phone"}
					label={"Phone Number"}
					rules={[{ required: !email }]}
					// initialValue={"+998 90 123 45 67"}
				>
					<InputMask
						mask={"+\\9\\98 99 999 99 99"}
						disabled={!!email}
					/>
				</Form.Item>
				<Form.Item
					style={{
						marginTop: 24,
						marginBottom: 0,
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
		</>
	)
}

export default ForgotPassword
