import { Fragment } from 'react'
import { Transition } from 'react-transition-group'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import Typography from '@mui/joy/Typography'
import CircularProgress from '@mui/joy/CircularProgress'
import Box from '@mui/joy/Box'

function ModalLoading({ title = 'Loading', message = 'Please wait', open, setOpen = () => {} }) {
    return (
        <Fragment>
            <Transition in={open} timeout={400}>
                {(state) => (
                    <Modal
                        open={!['exited', 'exiting'].includes(state)}
                        onClose={() => setOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalDialog
                            aria-labelledby="fade-modal-dialog-title"
                            aria-describedby="fade-modal-dialog-description"
                            sx={{
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                            }}
                        >
                            <Typography id="fade-modal-dialog-title" component="h2">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {title}
                                    <CircularProgress variant="solid" thickness={2} sx={{ stroke: '#1100ff' }} />
                                </Box>
                            </Typography>
                            <Typography id="fade-modal-dialog-description" textColor="text.tertiary">
                                {message}
                            </Typography>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
        </Fragment>
    )
}

export default ModalLoading
