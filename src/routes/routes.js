import config from 'src/config'

// Layouts
import { HomeLayout } from 'src/layouts'
import Home from 'src/pages/Home'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.findWork, component: Home, layout: HomeLayout },
    { path: config.routes.findTalent, component: Home, layout: HomeLayout },
    { path: config.routes.about, component: Home, layout: HomeLayout },
    { path: config.routes.notFound, component: Home, layout: HomeLayout },
]

export { publicRoutes }
