import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Avatar from '@mui/joy/Avatar'
import Chip from '@mui/joy/Chip'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import CardActions from '@mui/joy/CardActions'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

import styles from './FindTalent.module.scss'
import bannerImg from './banner.jpg'

const cx = classNames.bind(styles)

function FindTalent() {
    return (
        <div>
            <Container>
                <Row>
                    {/* Banner */}
                    <Col xs={12} className={cx('banner-wrapper')}>
                        <Card component="li" sx={{ minWidth: 300, minHeight: 160, flexGrow: 1 }}>
                            <CardCover>
                                <img src={bannerImg} loading="lazy" alt="Banner" />
                            </CardCover>
                        </Card>
                    </Col>

                    {/* Talents grid */}
                    <Col xs={12}>
                        <Row>
                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Josephine Blanton</h5>
                                        <h6 className={cx('talent-role')}>Blockchain Developer</h6>
                                        <p className={cx('talent-bio')}>
                                            Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                                            love to code.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                BOS
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                React
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Rust
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <button
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </button>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Josephine Blanton</h5>
                                        <h6 className={cx('talent-role')}>Blockchain Developer</h6>
                                        <p className={cx('talent-bio')}>
                                            Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                                            love to code.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                BOS
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                React
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Rust
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <button
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </button>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Josephine Blanton</h5>
                                        <h6 className={cx('talent-role')}>Blockchain Developer</h6>
                                        <p className={cx('talent-bio')}>
                                            Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                                            love to code.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                BOS
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                React
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Rust
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <button
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </button>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Josephine Blanton</h5>
                                        <h6 className={cx('talent-role')}>Blockchain Developer</h6>
                                        <p className={cx('talent-bio')}>
                                            Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                                            love to code.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                BOS
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                React
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Rust
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <button
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </button>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FindTalent
