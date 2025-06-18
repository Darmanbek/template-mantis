import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { type FC, useRef, useState } from "react"
import { useFullscreen } from "react-use"

const FullScreenButton: FC = () => {
	const ref = useRef(document.body)
	const [isFull, setFull] = useState(false)
	const isFullscreen = useFullscreen(ref, isFull)
	return (
		<>
			<Button
				type={"text"}
				size={"large"}
				onClick={() => setFull((prev) => !prev)}
				icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
			/>
		</>
	)
}

export { FullScreenButton }
