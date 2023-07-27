import * as React from 'react'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Input from '@mui/joy/Input'
import Textarea from '@mui/joy/Textarea'
import Stack from '@mui/joy/Stack'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import Tabs from '@mui/joy/Tabs'
import DropZone from 'src/pages/components/DropZone'
// import FileUpload from 'src/pages/components/FileUpload'
import CountrySelector from 'src/pages/components/CountrySelector'

function MyProfile() {
    return (
        <Sheet
            sx={{
                bgcolor: 'background.body',
                flex: 1,
                maxWidth: 1200,
                width: '100%',
                mx: 'auto',
            }}
        >
            <Typography level="h1" sx={{ mb: 1, fontSize: '2rem' }}>
                My profile
            </Typography>
            <Tabs
                defaultValue={0}
                sx={{
                    bgcolor: 'background.body',
                    '--Tab-height': '48px',
                }}
            >
                <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />
                <Box
                    sx={{
                        pt: 3,
                        pb: 10,
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '100%',
                            sm: 'minmax(120px, 30%) 1fr',
                            lg: '280px 1fr minmax(120px, 208px)',
                        },
                        columnGap: { xs: 2, sm: 3, md: 4 },
                        rowGap: { xs: 2, sm: 2.5 },
                        '& > hr': {
                            gridColumn: '1/-1',
                        },
                    }}
                >
                    <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Name</FormLabel>
                    <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel sx={{ display: { sm: 'none' } }}>First name</FormLabel>
                            <Input placeholder="first name" defaultValue="Siriwat" sx={{ p: 0 }} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel sx={{ display: { sm: 'none' } }}>Last name</FormLabel>
                            <Input placeholder="last name" defaultValue="K." sx={{ p: 0 }} />
                        </FormControl>
                    </Box>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <FormControl sx={{ display: { sm: 'contents' } }}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            startDecorator={<i data-feather="mail" />}
                            placeholder="email"
                            defaultValue="siriwatk@test.com"
                        />
                    </FormControl>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <Box>
                        <FormLabel>Your photo</FormLabel>
                        <FormHelperText>This will be displayed on your profile.</FormHelperText>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: 2.5,
                        }}
                    >
                        <Avatar size="lg" src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '64px' }} />
                        <DropZone />
                    </Box>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <FormControl sx={{ display: { sm: 'contents' } }}>
                        <FormLabel>Role</FormLabel>
                        <Input defaultValue="UI Developer" sx={{ p: 0 }} />
                    </FormControl>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <CountrySelector />

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <Box>
                        <FormLabel>Bio</FormLabel>
                        <FormHelperText>Write a short introduction.</FormHelperText>
                    </Box>
                    <Box>
                        <Textarea
                            minRows={4}
                            sx={{ mt: 1.5 }}
                            defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
                        />
                    </Box>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <Box>
                        <FormLabel>Portfolio projects</FormLabel>
                        <FormHelperText>Share a few snippets of your work.</FormHelperText>
                    </Box>
                    <Stack useFlexGap spacing={1.5}>
                        <DropZone />

                        {/* <FileUpload fileName="Tech design requirements.pdf" fileSize="200 KB" progress={100} />

                        <FileUpload
                            icon={<i data-feather="film" />}
                            fileName="Dashboard prototype recording.mp4"
                            fileSize="16 MB"
                            progress={40}
                        />

                        <FileUpload
                            icon={<i data-feather="upload-cloud" />}
                            fileName="Dashboard prototype FINAL.fig"
                            fileSize="4.2 MB"
                            progress={80}
                        /> */}
                    </Stack>

                    <Divider insert="none" sx={{ '--Divider-lineColor': 'rgb( 115 115 140)' }} />

                    <Box
                        sx={{
                            gridColumn: '1/-1',
                            justifySelf: 'flex-start',
                            display: 'flex',
                            gap: 1,
                        }}
                    >
                        <button className="save-btn btn rounded-pill btn-primary-style">Save</button>
                        <button className="cancel-btn btn rounded-pill btn-outline-style">Cancel</button>
                    </Box>
                </Box>
            </Tabs>
        </Sheet>
    )
}

export default MyProfile
