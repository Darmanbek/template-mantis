import { useState } from "react"
import { sleep } from "src/utils"

interface useFetchResponseProps {
	data: string,
	isLoading: boolean,
	isSuccess: boolean,
	mutate: () => void
}

export const useFetchResponse = (): useFetchResponseProps => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [data, setData] = useState("")
	
	const onMutate = () => {
		setLoading(true)
		setSuccess(false)
		sleep().then((token) => {
			setLoading(false)
			setData(token)
			setSuccess(true)
		})
	}
	
	return {
		data,
		isLoading: loading,
		mutate: onMutate,
		isSuccess: success
	}
}
