import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'

function ModalAlert({ title = 'Congratulations', backPath = '/', message, open, setOpen = () => {} }) {
    return (
        <Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card
                    sx={{
                        textAlign: 'center',
                        alignItems: 'center',
                        maxWidth: 500,
                        '--icon-size': '100px',
                        boxShadow: 'lg',
                    }}
                >
                    <CardOverflow
                        variant="solid"
                        sx={{
                            backgroundImage:
                                'linear-gradient(to right,#501e9c 0%,#8169f1 30%,#8169f1 30%,#a44cee 73%,#ff847f 100%)',
                        }}
                    >
                        <ModalClose
                            variant="outlined"
                            sx={{
                                top: 'calc(-1/4 * var(--IconButton-size))',
                                right: 'calc(-1/4 * var(--IconButton-size))',
                                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                                borderRadius: '50%',
                                bgcolor: 'background.body',
                            }}
                        />
                        <AspectRatio
                            variant="outlined"
                            ratio="1"
                            color="warning"
                            sx={{
                                m: 'auto',
                                transform: 'translateY(50%)',
                                borderRadius: '50%',
                                width: 'var(--icon-size)',
                                boxShadow: 'sm',
                                bgcolor: 'background.surface',
                                position: 'relative',
                            }}
                        >
                            <div>
                                <BakeryDiningIcon sx={{ fontSize: '4rem' }} />
                            </div>
                        </AspectRatio>
                    </CardOverflow>
                    <Typography level="h2" sx={{ mt: 'calc(var(--icon-size) / 2)', fontSize: '2.4rem', mb: '10px' }}>
                        {title}
                    </Typography>
                    <CardContent sx={{ maxWidth: '40ch', fontSize: '1.4rem' }}>{message}</CardContent>
                    <CardActions
                        orientation="vertical"
                        buttonFlex={1}
                        sx={{
                            my: '20px',
                            width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                        }}
                    >
                        <Link to={backPath} className="save-btn btn rounded-pill btn-primary-style">
                            Back to dashboard
                        </Link>
                    </CardActions>
                </Card>
            </Modal>
        </Fragment>
    )
}

export default ModalAlert
