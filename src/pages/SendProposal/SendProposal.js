import { useState, Fragment } from 'react'
import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardContent from '@mui/joy/CardContent'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Textarea from '@mui/joy/Textarea'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Avatar from '@mui/joy/Avatar'
import Chip from '@mui/joy/Chip'
import Typography from '@mui/joy/Typography'

import Banner from 'src/pages/components/Banner'
import ModalAlert from 'src/pages/components/ModalAlert'
import ModalLoading from 'src/pages/components/ModalLoading'
import config from 'src/config'
import styles from './SendProposal.module.scss'

const cx = classNames.bind(styles)

function SendProposal() {
    const [currency, setCurrency] = useState('dollar')
    const [openModalAlert, setOpenModalAlert] = useState(false)
    const [openModalLoading, setOpenModalLoading] = useState(false)

    const sendProposalHandler = (e) => {
        e.preventDefault()
        setOpenModalLoading(true)
    }

    return (
        <div>
            <Box>
                <Container>
                    <Row>
                        {/* Banner */}
                        <Col xs={12} className={cx('card-wrapper')}>
                            <Banner title="Send Your Proposal" />
                        </Col>

                        {/* Work information */}
                        <Col xs={12} className={cx('card-wrapper')}>
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
                                            skilled web developer who can help us refresh our project. Our goal is to
                                            modify certain sections, add appealing animations to the website, optimize
                                            it, and overall give the design a fresh look. I will send detailed
                                            information and a link to the ready design directly via DM. !!! GreenSock,
                                            Threejs or webgl for the web animation is required !!! moreabout "Frontend
                                            development (figma to html), React or something like this.
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
                            </Card>
                        </Col>

                        {/* Create proposal */}
                        <Col xs={12} lg={8}>
                            <Card
                                variant="outlined"
                                sx={{
                                    maxHeight: 'max-content',
                                    maxWidth: '100%',
                                    mx: 'auto',
                                    px: '40px',
                                    py: '32px',
                                }}
                            >
                                <h3 className={cx('form-title')}>About Your Proposal</h3>
                                <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />
                                <form onSubmit={sendProposalHandler}>
                                    <CardContent
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                                            gap: 1.5,
                                        }}
                                    >
                                        <FormControl sx={{ gridColumn: '1/-1' }}>
                                            <FormLabel sx={{ my: '12px' }}>Pitch your price</FormLabel>
                                            <Input
                                                placeholder="Amount"
                                                startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
                                                endDecorator={
                                                    <Fragment>
                                                        <Divider orientation="vertical" />
                                                        <Select
                                                            variant="plain"
                                                            value={currency}
                                                            onChange={(_, value) => setCurrency(value)}
                                                            sx={{ '&:hover': { bgcolor: 'transparent' } }}
                                                        >
                                                            <Option value="dollar">US dollar</Option>
                                                            <Option value="baht">Thai baht</Option>
                                                            <Option value="yen">Japanese yen</Option>
                                                        </Select>
                                                    </Fragment>
                                                }
                                                slotProps={{
                                                    input: {
                                                        name: 'work-budget',
                                                    },
                                                }}
                                                required
                                            />
                                        </FormControl>
                                        <FormControl sx={{ gridColumn: '1/-1' }}>
                                            <FormLabel>Your timeline</FormLabel>
                                            <Input
                                                type="date"
                                                slotProps={{
                                                    input: {
                                                        name: 'work-due',
                                                    },
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl sx={{ gridColumn: '1/-1' }}>
                                            <FormLabel>Cover letter</FormLabel>
                                            <Textarea
                                                slotProps={{
                                                    input: {
                                                        name: 'work-cover-letter',
                                                    },
                                                }}
                                                required
                                            />
                                        </FormControl>
                                        <FormControl sx={{ gridColumn: '1/-1' }}>
                                            <FormLabel>Attach Files</FormLabel>
                                            <Input
                                                type="file"
                                                slotProps={{
                                                    input: {
                                                        name: 'work-attachments',
                                                    },
                                                }}
                                            />
                                        </FormControl>
                                        <CardActions sx={{ gridColumn: '1/-1', my: '24px' }}>
                                            <button
                                                className="btn rounded-pill btn-primary-style w-100 fw-bold"
                                                type="submit"
                                            >
                                                Send proposal
                                            </button>
                                        </CardActions>
                                    </CardContent>
                                </form>
                            </Card>
                        </Col>

                        {/* Bio card */}
                        <Col xs={12} lg={4}>
                            <Card
                                variant="outlined"
                                sx={{
                                    width: '100%',
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
                                        Hello, this is my bio and I am a PRO member of Freelance dApp. I am a developer
                                        and I love to code.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Box>
            <ModalAlert
                open={openModalAlert}
                setOpen={setOpenModalAlert}
                message="Your proposal've sent to client successfully! Be patient to wait response from them."
                backPath={config.routes.findWork}
            />
            <ModalLoading
                open={openModalLoading}
                setOpen={setOpenModalLoading}
                title="Sending"
                message="We are preparing your work to be published."
            />
        </div>
    )
}

export default SendProposal
