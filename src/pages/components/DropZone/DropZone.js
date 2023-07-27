import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'

function DropZone({ sx, ...props }) {
    return (
        <Card
            variant="outlined"
            {...props}
            sx={[
                {
                    borderRadius: 'sm',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    px: 3,
                    flexGrow: 1,
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box sx={{ p: 1, bgcolor: 'background.level1', borderRadius: '50%' }}>
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'background.level2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <i data-feather="upload-cloud" />
                </Box>
            </Box>
            <Typography level="body2" textAlign="center">
                <Link component="button" overlay>
                    Click to upload
                </Link>{' '}
                or drag and drop
                <br /> SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
        </Card>
    )
}

export default DropZone
