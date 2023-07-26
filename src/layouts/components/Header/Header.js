import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Avatar from '@mui/joy/Avatar'
import config from 'src/config'

function Header() {
    return (
        <Navbar expand="lg" className="navbar-style">
            <Container>
                <Navbar.Brand href="/">
                    <img src="" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={['me-auto', 'nav-list']}>
                        <Nav.Item>
                            <Link to={config.home}>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={config.home}>Find work</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={config.home}>Find talent</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={config.home}>Why us</Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            <Avatar />
                        </Nav.Link>
                        <Nav.Item className={['btn', 'rounded-pill', 'btn-outline-style', 'fw-bold']}>
                            <Link to={config.home}>Sign in</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
