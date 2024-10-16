import { RouteProps } from "react-router-dom"
import { NotFound } from "src/components/screens"
import { ROUTES } from "src/config/routes.config"


export const routes: RouteProps[] = [
	{
		path: ROUTES.HOME,
		element: <></>
	},
	{
		path: ROUTES.NOT_FOUND,
		element: <NotFound />
	}
]
