import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "src/App"
import "src/assets/styles/index.scss"
import { AntdProvider } from "src/providers"

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AntdProvider>
			<App />
		</AntdProvider>
	</BrowserRouter>
)
