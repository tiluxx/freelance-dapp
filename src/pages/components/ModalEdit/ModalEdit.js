import { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

function ModalEdit({
    title = 'Change',
    message = 'Fill in the information of the work.',
    inputType = 'text',
    open,
    setOpen = () => {},
    submitFormHandler = () => {},
}) {
    return (
        <Fragment>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="edit-modal-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ minWidth: 500 }}
                >
                    <Typography id="edit-modal-title" component="h2">
                        {title}
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        {message}
                    </Typography>
                    <form onSubmit={submitFormHandler}>
                        <Stack spacing={2}>
                            {inputType === 'datetime' ? (
                                <FormControl>
                                    <FormLabel>Due date</FormLabel>
                                    <Row>
                                        <Col xs={8}>
                                            <Input
                                                type="date"
                                                autoFocus
                                                slotProps={{
                                                    input: {
                                                        name: 'dueDate',
                                                    },
                                                }}
                                                sx={{ color: '#fff' }}
                                                required
                                            />
                                        </Col>
                                        <Col xs={4}>
                                            <Input
                                                type="time"
                                                autoFocus
                                                slotProps={{
                                                    input: {
                                                        name: 'dueTime',
                                                    },
                                                }}
                                                sx={{ color: '#fff' }}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                </FormControl>
                            ) : (
                                <FormControl>
                                    <FormLabel>Due date</FormLabel>
                                    <Input
                                        type={inputType}
                                        autoFocus
                                        slotProps={{
                                            input: {
                                                name: 'dueDate',
                                            },
                                        }}
                                        required
                                    />
                                </FormControl>
                            )}
                            <Button type="submit" sx={{ p: '12px 24px' }}>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </Fragment>
    )
}

export default ModalEdit
