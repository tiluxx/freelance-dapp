import config from 'src/config'

// Layouts
import { HomeLayout } from 'src/layouts'
import Home from 'src/pages/Home'
import FindWork from 'src/pages/FindWork'
import FindTalent from 'src/pages/FindTalent'
import CreateWork from 'src/pages/CreateWork'
import Messages from 'src/pages/Messages'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.findWork, component: FindWork, layout: HomeLayout },
    { path: config.routes.findTalent, component: FindTalent, layout: HomeLayout },
    { path: config.routes.about, component: Home, layout: HomeLayout },
    { path: config.routes.createWork, component: CreateWork, layout: HomeLayout },
    { path: config.routes.messages, component: Messages, layout: HomeLayout },
    { path: config.routes.notFound, component: Home, layout: HomeLayout },
]

export { publicRoutes }
