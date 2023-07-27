import { useLayoutEffect, useEffect } from 'react'
import classNames from 'classnames/bind'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '@mui/joy/Card'
import Container from '@mui/joy/Container'
import Box from '@mui/joy/Box'
import useScript from 'src/hooks/useScript'
import MyMessages from 'src/pages/components/MyMessages'
import Banner from 'src/pages/components/Banner'
import styles from './Messages.module.scss'

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const cx = classNames.bind(styles)

function Messages() {
    const status = useScript(`https://unpkg.com/feather-icons`)

    useEnhancedEffect(() => {
        // Feather icon setup: https://github.com/feathericons/feather#4-replace
        // @ts-ignore
        if (typeof feather !== 'undefined') {
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
                        <Banner title="Your message box" />
                    </Col>

                    {/* Messages */}
                    <Col xs={12}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                                <Box component="main" className="MainContent" flex={1}>
                                    <MyMessages />
                                </Box>
                            </Box>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Messages
