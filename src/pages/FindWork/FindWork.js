import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardActions from '@mui/joy/CardActions'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import Chip from '@mui/joy/Chip'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

import Banner from 'src/pages/components/Banner'
import styles from './FindWork.module.scss'

const cx = classNames.bind(styles)

function FindWork() {
    return (
        <div>
            <Container>
                <Row>
                    {/* Banner */}
                    <Col xs={12} className={cx('banner-wrapper')}>
                        <Banner title="Browse Work" />
                    </Col>

                    {/* Works grid */}
                    <Col xs={12} md={9}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                            className={cx('work-wrapper')}
                        >
                            <CardContent>
                                <Box>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 className={cx('work-title')}>
                                                Image Recognition & Object Detection System
                                            </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <small className={cx('work-subtitle')}>
                                                <span className={cx('work-subtitle_price')}>Fixed price: $500</span>
                                                <span>
                                                    &nbsp;-&nbsp;<span>Entry level</span>
                                                </span>
                                            </small>
                                        </Col>
                                    </Row>
                                </Box>
                                <Box>
                                    <p className={cx('work-desc')}>
                                        Hey freelancers, we have a live website (landing page). We are looking for a
                                        skilled web developer who can help us refresh our project. Our goal is to modify
                                        certain sections, add appealing animations to the website, optimize it, and
                                        overall give the design a fresh look. I will send detailed information and a
                                        link to the ready design directly via DM. !!! GreenSock, Threejs or webgl for
                                        the web animation is required !!! moreabout "Frontend development (figma to
                                        html), React or something like this.
                                    </p>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        AI
                                    </Chip>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        UI/UX
                                    </Chip>
                                </Box>
                            </CardContent>
                            <CardActions buttonFlex="0 1 120px">
                                <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
                                    <FavoriteBorder />
                                </IconButton>
                                <button className={cx('send-btn', 'btn', 'rounded-pill', 'btn-outline-style')}>
                                    Send proposal
                                </button>
                                {/* <Button variant="solid" color="primary">
                                    Join
                                </Button> */}
                            </CardActions>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                            className={cx('work-wrapper')}
                        >
                            <CardContent>
                                <Box>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 className={cx('work-title')}>
                                                Image Recognition & Object Detection System
                                            </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <small className={cx('work-subtitle')}>
                                                <span className={cx('work-subtitle_price')}>Fixed price: $500</span>
                                                <span>
                                                    &nbsp;-&nbsp;<span>Entry level</span>
                                                </span>
                                            </small>
                                        </Col>
                                    </Row>
                                </Box>
                                <Box>
                                    <p className={cx('work-desc')}>
                                        Hey freelancers, we have a live website (landing page). We are looking for a
                                        skilled web developer who can help us refresh our project. Our goal is to modify
                                        certain sections, add appealing animations to the website, optimize it, and
                                        overall give the design a fresh look. I will send detailed information and a
                                        link to the ready design directly via DM. !!! GreenSock, Threejs or webgl for
                                        the web animation is required !!! moreabout "Frontend development (figma to
                                        html), React or something like this.
                                    </p>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        AI
                                    </Chip>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        UI/UX
                                    </Chip>
                                </Box>
                            </CardContent>
                            <CardActions buttonFlex="0 1 120px">
                                <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
                                    <FavoriteBorder />
                                </IconButton>
                                <button className={cx('send-btn', 'btn', 'rounded-pill', 'btn-outline-style')}>
                                    Send proposal
                                </button>
                            </CardActions>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                            className={cx('work-wrapper')}
                        >
                            <CardContent>
                                <Box>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 className={cx('work-title')}>
                                                Image Recognition & Object Detection System
                                            </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <small className={cx('work-subtitle')}>
                                                <span className={cx('work-subtitle_price')}>Fixed price: $500</span>
                                                <span>
                                                    &nbsp;-&nbsp;<span>Entry level</span>
                                                </span>
                                            </small>
                                        </Col>
                                    </Row>
                                </Box>
                                <Box>
                                    <p className={cx('work-desc')}>
                                        Hey freelancers, we have a live website (landing page). We are looking for a
                                        skilled web developer who can help us refresh our project. Our goal is to modify
                                        certain sections, add appealing animations to the website, optimize it, and
                                        overall give the design a fresh look. I will send detailed information and a
                                        link to the ready design directly via DM. !!! GreenSock, Threejs or webgl for
                                        the web animation is required !!! moreabout "Frontend development (figma to
                                        html), React or something like this.
                                    </p>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        AI
                                    </Chip>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        UI/UX
                                    </Chip>
                                </Box>
                            </CardContent>
                            <CardActions buttonFlex="0 1 120px">
                                <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
                                    <FavoriteBorder />
                                </IconButton>
                                <button className={cx('send-btn', 'btn', 'rounded-pill', 'btn-outline-style')}>
                                    Send proposal
                                </button>
                                {/* <Button variant="solid" color="primary">
                                    Join
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Col>

                    {/* Bio card */}
                    <Col xs={0} md={3}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: 320,
                                maxWidth: '100%',
                            }}
                        >
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                                <Chip
                                    size="sm"
                                    variant="soft"
                                    color="primary"
                                    sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                >
                                    PRO
                                </Chip>
                                <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5 }}>
                                    Tien Le
                                </Typography>
                                <Typography level="body2" sx={{ maxWidth: '24ch' }}>
                                    Hello, this is my bio and I am a PRO member of Freelance dApp. I am a developer and
                                    I love to code.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FindWork
