import config from 'src/config'

// Layouts
import { HomeLayout } from 'src/layouts'
import Home from 'src/pages/Home'
import FindWork from 'src/pages/FindWork'
import FindTalent from 'src/pages/FindTalent'
import CreateWork from 'src/pages/CreateWork'
import Messages from 'src/pages/Messages'
import Profile from 'src/pages/Profile'
import SendProposal from 'src/pages/SendProposal'
import WorkProposals from 'src/pages/WorkProposals'
import WorkDashboard from 'src/pages/WorkDashboard'
import WorkDetail from 'src/pages/WorkDetail'
import ProposalsDashboard from 'src/pages/ProposalsDashboard'
import WorkDetailFreelancerSide from 'src/pages/WorkDetailFreelancerSide'

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HomeLayout },
    { path: config.routes.findWork, component: FindWork, layout: HomeLayout },
    { path: config.routes.findTalent, component: FindTalent, layout: HomeLayout },
    { path: config.routes.about, component: Home, layout: HomeLayout },
    { path: config.routes.createWork, component: CreateWork, layout: HomeLayout },
    { path: config.routes.messages, component: Messages, layout: HomeLayout },
    { path: config.routes.profile, component: Profile, layout: HomeLayout },
    { path: config.routes.sendProposal, component: SendProposal, layout: HomeLayout },
    { path: config.routes.workProposals, component: WorkProposals, layout: HomeLayout },
    { path: config.routes.workDashboard, component: WorkDashboard, layout: HomeLayout },
    { path: config.routes.workDetail, component: WorkDetail, layout: HomeLayout },
    { path: config.routes.proposalDashboard, component: ProposalsDashboard, layout: HomeLayout },
    { path: config.routes.workDetailFreelancerSide, component: WorkDetailFreelancerSide, layout: HomeLayout },
    { path: config.routes.notFound, component: Home, layout: HomeLayout },
]

export { publicRoutes }
