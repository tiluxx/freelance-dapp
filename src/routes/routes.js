import config from '~/config'

// Layouts
import { HomeLayout } from '~/layouts'
import { Home } from '~/pages/Home'

// Public routes
const publicRoutes = [{ path: config.routes.home, component: Home, layout: HomeLayout }]

export { publicRoutes }
