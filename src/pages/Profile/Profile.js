import { useLayoutEffect, useEffect } from 'react'
import classNames from 'classnames/bind'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from '@mui/joy/Container'
import Box from '@mui/joy/Box'
import Avatar from '@mui/joy/Avatar'
import Chip from '@mui/joy/Chip'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'

import useScript from 'src/hooks/useScript'
import Banner from 'src/pages/components/Banner'
import MyProfile from 'src/pages/components/MyProfile'
import styles from './Profile.module.scss'

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const cx = classNames.bind(styles)

function Profile() {
    const status = useScript(`https://unpkg.com/feather-icons`)

    useEnhancedEffect(() => {
        // Feather icon setup: https://github.com/feathericons/feather#4-replace
        // @ts-ignore
        if (typeof feather !== 'undefined') {
            // @ts-ignore
            // eslint-disable-next-line no-undef
            feather.replace()
        }
    }, [status])

    return (
        <div>
            <Container>
                <Row>
                    {/* Banner */}
                    <Col xs={12} className={cx('banner-wrapper')}>
                        <Banner title="Your Profile" />
                    </Col>

                    {/* Profile space */}
                    <Col xs={12} md={3}>
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
                                    Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to
                                    code.
                                </p>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mt: 1,
                                        '& > button': { borderRadius: '2rem' },
                                    }}
                                >
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        BOS
                                    </Chip>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        React
                                    </Chip>
                                    <Chip variant="soft" color="neutral" size="lg" sx={{ pointerEvents: 'none' }}>
                                        Rust
                                    </Chip>
                                </Box>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col xs={12} md={9}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                                <Box
                                    component="main"
                                    className="MainContent"
                                    sx={(theme) => ({
                                        '--main-paddingTop': {
                                            xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
                                            md: '32px',
                                        },
                                        px: {
                                            xs: 2,
                                            md: 3,
                                        },
                                        pt: 'var(--main-paddingTop)',
                                        pb: {
                                            xs: 2,
                                            sm: 2,
                                            md: 3,
                                        },
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minWidth: 0,
                                        height: '100dvh',
                                        gap: 1,
                                        overflow: 'auto',
                                    })}
                                >
                                    <MyProfile />
                                </Box>
                            </Box>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
