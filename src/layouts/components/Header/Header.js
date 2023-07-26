import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Avatar from '@mui/joy/Avatar'
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
} from '@fluentui/react-icons'
import styles from './Header.module.scss'
import config from 'src/config'

const cx = classNames.bind(styles)

function Header() {
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
                    <img src="" alt="Logo" />
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
                        <Nav.Item>
                            <Link to={config.routes.about}>Why us</Link>
                        </Nav.Item>
                    </Nav>
                    {true && (
                        <Nav className={cx('profile-wrapper')}>
                            <Nav.Link href="#" className="fs-2">
                                <ChatRegular />
                            </Nav.Link>
                            <Nav.Link href="#" className="fs-2">
                                <AlertRegular />
                            </Nav.Link>
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
                                        <Link>
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
                                    </MenuList>
                                </ClickAwayListener>
                            </Popper>
                        </Nav>
                    )}

                    {false && (
                        <Nav>
                            <Nav.Item className={['btn', 'rounded-pill', 'btn-outline-style', 'fw-bold']}>
                                <Link to={config.routes.home}>Sign in</Link>
                            </Nav.Item>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
