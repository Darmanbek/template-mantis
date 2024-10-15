function timeout(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export async function sleep() {
	await timeout(3000)
	return generateFakeToken()
}

export const generateFakeToken = (): string => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	
	// Генерируем первую часть токена - 2 цифры
	const firstPart = Math.floor(Math.random() * 90 + 10) // диапазон от 10 до 99
	
	// Генерируем вторую часть токена
	let secondPart = ""
	const tokenLength = 48 // длина второй части после '|'
	for (let i = 0; i < tokenLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		secondPart += characters[randomIndex]
	}
	
	// Собираем токен
	return `${firstPart}|${secondPart}`
}
