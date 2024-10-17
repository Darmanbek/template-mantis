type PasswordStatus = "error" | "warning" | "success";
type StatusText = "Bad" | "Weak" | "Normal" | "Good" | "Strong";

export const validatePassword = (password: string): [PasswordStatus, StatusText] => {
	// Регулярные выражения для проверки
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_-]/  // Проверка на специальные символы
	const hasNumber = /\d/ // Проверка на наличие цифр
	const hasUppercase = /[A-Z]/ // Проверка на заглавные буквы
	
	// Проверка длины пароля
	if (password.length < 6) {
		return ["error", "Bad"]
	}
	
	if (password.length >= 6 && password.length < 8) {
		if (hasSpecialChar.test(password)) {
			return ["warning", "Normal"]
		}
		return ["warning", "Weak"]
	}
	
	if (hasSpecialChar.test(password) && hasNumber.test(password) && hasUppercase.test(password)) {
		return ["success", "Strong"]
	}
	if (hasSpecialChar.test(password) || (hasNumber.test(password) && hasUppercase.test(password))) {
		return ["success", "Good"]
	}
	return ["success", "Normal"]
}
