import { useMedia } from "react-use"

interface ResponsiveProps {
	isWide: boolean
}

export const useResponsive = (size: number): ResponsiveProps => {
	const isWide = useMedia(`(max-width: ${size}px)`)
	
	return { isWide }
}
