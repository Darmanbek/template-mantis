import {
	Badge,
	Button,
	Card,
	Flex,
	Form,
	FormProps,
	Input,
	Typography
} from "antd"
import Title from "antd/es/typography/Title"
import { type  FC, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "src/components/screens/basic/auth/Auth"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config"
import { FORM_DEFAULT } from "src/constants"
import { useFetchResponse } from "src/hooks"
import { validatePassword } from "src/utils"

interface TResetPassword {
	password: string
	confirm: string
}

const ResetPassword: FC = () => {
	const navigate = useNavigate()
	const [form] = Form.useForm<TResetPassword>()
	const password = Form.useWatch("password", form) || ""
	const [status, text] = useMemo(() => validatePassword(password), [password])
	const {
		mutate: resetPassword,
		isLoading,
		isSuccess
	} = useFetchResponse()
	
	const onFinish: FormProps<TResetPassword>["onFinish"] = (values) => {
		console.log(values)
		resetPassword()
	}
	
	useEffect(() => {
		if (isSuccess) {
			navigate(ROUTES.PAGES_AUTHENTICATION_LOGIN)
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
						Reset Password
					</Title>
				</Flex>
				<Typography.Text type={"secondary"}>
					Please choose your new password
				</Typography.Text>
				<Form
					{...FORM_DEFAULT}
					name={"Reset Password Form"}
					size={"large"}
					form={form}
					onFinish={onFinish}
					style={{ marginTop: 24 }}
				>
					<Form.Item<TResetPassword>
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
					<Form.Item<TResetPassword>
						name={"confirm"}
						dependencies={["password"]}
						label={"Confirm password"}
						hasFeedback={true}
						rules={[
							{ required: true },
							{ max: 10 },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error("The new password that you entered do not match!"))
								}
							})
						]}
						style={{
							marginBottom: 0
						}}
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
							loading={isLoading}
						>
							Reset Password
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</Auth>
	)
}

export { ResetPassword }
