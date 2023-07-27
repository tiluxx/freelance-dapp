import { useState, useEffect } from 'react'
import Box from '@mui/joy/Box'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/joy/Stack'
import AvatarWithStatus from 'src/pages/components/AvatarWithStatus'
import ChatBubble from 'src/pages/components/ChatBubble'
import MessageInput from 'src/pages/components/MessageInput'
import MessagesPaneHeader from 'src/pages/components/MessagesPaneHeader'

function MessagesPane({ chat }) {
    const [chatMessages, setChatMessages] = useState(chat.messages)
    const [textAreaValue, setTextAreaValue] = useState('')

    useEffect(() => {
        setChatMessages(chat.messages)
    }, [chat.messages])

    return (
        <Sheet
            sx={{
                height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <MessagesPaneHeader sender={chat.sender} />

            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    minHeight: 0,
                    px: 2,
                    py: 2.5,
                    overflowY: 'scroll',
                    flexDirection: 'column-reverse',
                }}
            >
                <Stack spacing={2} justifyContent="flex-end">
                    {chatMessages.map((message, index) => {
                        const isYou = message.sender === 'You'
                        return (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={2}
                                flexDirection={isYou ? 'row-reverse' : 'row'}
                            >
                                {message.sender !== 'You' && (
                                    <AvatarWithStatus online={message.sender.online} src={message.sender.avatar} />
                                )}
                                <ChatBubble variant={isYou ? 'sent' : 'received'} {...message} />
                            </Stack>
                        )
                    })}
                </Stack>
            </Box>

            <MessageInput
                textAreaValue={textAreaValue}
                setTextAreaValue={setTextAreaValue}
                onSubmit={() => {
                    const newId = chatMessages.length + 1
                    const newIdString = newId.toString()
                    setChatMessages([
                        ...chatMessages,
                        {
                            id: newIdString,
                            sender: 'You',
                            content: textAreaValue,
                            timestamp: 'Just now',
                        },
                    ])
                }}
            />
        </Sheet>
    )
}

export default MessagesPane
