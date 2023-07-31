import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Home.module.scss'
import config from 'src/config'
import headerImg from './header_1.png'
import headerBubbleImg from './header_4_bubble.png'

const cx = classNames.bind(styles)

function Home() {
    return (
        <header>
            <div className={cx('content')}>
                <Container className={cx('header-wrapper')}>
                    <Row>
                        <Col md={6}>
                            <div className="info">
                                <small className={cx('badge-small')}>Secure with Smart Contracts</small>
                                <h1 className={cx('header-title')}>
                                    Find The
                                    <br />
                                    <span>Potential Freelancer</span>
                                    <br />
                                    To Help Your Work
                                </h1>
                                <p className={cx('header-subtitle')}>
                                    Work with the best freelance talent from around the world on our secure,
                                    <br />
                                    flexible and cost-effective platform.
                                </p>
                                <div className={cx('btn-wrapper', 'd-flex', 'align-items-center')}>
                                    <Link
                                        to={config.routes.home}
                                        className="btn rounded-pill btn-primary-style fw-bold"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={cx('header-img-wrapper')}>
                                <img src={headerImg} alt="Header figure" className={cx('header-figure-main')} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={headerBubbleImg} alt="Header bubble figure" className={cx('header-figure-bg')} />
            </div>
        </header>
    )
}

export default Home
