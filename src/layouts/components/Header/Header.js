import { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Avatar from '@mui/joy/Avatar'
import Divider from '@mui/joy/Divider'
import Popper from '@mui/base/Popper'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import MenuList from '@mui/joy/MenuList'
import MenuItem from '@mui/joy/MenuItem'
import {
    ChatRegular,
    PersonAvailableRegular,
    SettingsRegular,
    PaymentRegular,
    AlertRegular,
    SignOutRegular,
    CheckmarkCircleRegular,
} from '@fluentui/react-icons'

import { WalletContext } from 'src/App'
import styles from './Header.module.scss'
import config from 'src/config'
import logoWhite from './logo_white.svg'

const cx = classNames.bind(styles)

function Header() {
    const { isSignedIn, wallet } = useContext(WalletContext)
    const buttonRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            setOpen(false)
        } else if (event.key === 'Escape') {
            if (buttonRef.current) {
                buttonRef.current?.focus()
            }
            setOpen(false)
        }
    }

    return (
        <Navbar expand="lg" className="navbar-style">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoWhite} alt="Logo" className={cx('logo-img')} />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={['me-auto', 'nav-list']}>
                        <Nav.Item>
                            <Link to={config.routes.home}>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={config.routes.findWork}>Find work</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={config.routes.findTalent}>Find talent</Link>
                        </Nav.Item>
                        {false && (
                            <Nav.Item>
                                <Link to={config.routes.about}>Why us</Link>
                            </Nav.Item>
                        )}
                        {true && (
                            <Nav.Item>
                                <Link to={config.routes.proposalDashboard}>Your proposals</Link>
                            </Nav.Item>
                        )}
                        {true && (
                            <Nav.Item>
                                <Link to={config.routes.workDashboard}>Work dashboard</Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    {true ? (
                        <Nav className={cx('profile-wrapper')}>
                            <Nav.Item href="#" className="fs-2">
                                <Link to={config.routes.messages}>
                                    <ChatRegular />
                                </Link>
                            </Nav.Item>
                            <Nav.Item href="#" className="fs-2">
                                <Link to={config.routes.messages}>
                                    <AlertRegular />
                                </Link>
                            </Nav.Item>
                            <Nav.Link
                                ref={buttonRef}
                                id="composition-button"
                                className="fs-2"
                                aria-controls={'composition-menu'}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="outlined"
                                color="neutral"
                                onClick={() => {
                                    setOpen(!open)
                                }}
                                href="#"
                            >
                                <Avatar />
                            </Nav.Link>
                            <Popper
                                role={undefined}
                                id="composition-menu"
                                open={open}
                                anchorEl={buttonRef.current}
                                disablePortal
                                modifiers={[
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 4],
                                        },
                                    },
                                ]}
                            >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        variant="outlined"
                                        onKeyDown={handleListKeyDown}
                                        sx={{ boxShadow: 'md', bgcolor: 'background.body' }}
                                        placement="bottom-end"
                                    >
                                        <MenuItem>
                                            <CheckmarkCircleRegular />
                                            wallet.accountId
                                        </MenuItem>
                                        <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />
                                        <Link to={config.routes.profile}>
                                            <MenuItem onClick={handleClose}>
                                                <PersonAvailableRegular />
                                                Profile
                                            </MenuItem>
                                        </Link>
                                        <Link>
                                            <MenuItem onClick={handleClose}>
                                                <SettingsRegular />
                                                Settings
                                            </MenuItem>
                                        </Link>
                                        <Link>
                                            <MenuItem onClick={handleClose}>
                                                <PaymentRegular />
                                                Payment
                                            </MenuItem>
                                        </Link>
                                        <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />
                                        <Link>
                                            <MenuItem onClick={() => wallet.signOut()}>
                                                <SignOutRegular />
                                                Sign Out
                                            </MenuItem>
                                        </Link>
                                    </MenuList>
                                </ClickAwayListener>
                            </Popper>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Item className={['btn', 'rounded-pill', 'btn-outline-style', 'fw-bold']}>
                                <Link to={config.routes.home}>Sign in with Near</Link>
                            </Nav.Item>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
