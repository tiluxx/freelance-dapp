import { Fragment, useState } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Chip from '@mui/joy/Chip'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Link from '@mui/joy/Link'
import Input from '@mui/joy/Input'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import ModalClose from '@mui/joy/ModalClose'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'
import Checkbox from '@mui/joy/Checkbox'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import {
    ArrowLeftRegular,
    ArrowRightRegular,
    ArrowDownRegular,
    CheckmarkRegular,
    DismissRegular,
    ArrowStepBackRegular,
    EyeRegular,
} from '@fluentui/react-icons'
import config from 'src/config'

const rows = [
    {
        id: 'INV-1234',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
        subscription: 'Yearly',
    },
    {
        id: 'INV-1233',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
        subscription: 'Monthly',
    },
    {
        id: 'INV-1232',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
        subscription: 'Yearly',
    },
    {
        id: 'INV-1231',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
        subscription: 'Yearly',
    },
    {
        id: 'INV-1230',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
        subscription: 'Yearly',
    },
    {
        id: 'INV-1229',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
        subscription: 'Yearly',
    },
    {
        id: 'INV-1228',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
        subscription: 'Monthly',
    },
    {
        id: 'INV-1227',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Sachin Flynn',
            email: 's.flyn@email.com',
        },
        subscription: 'Monthly',
    },
    {
        id: 'INV-1226',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'B',
            name: 'Bradley Rosales',
            email: 'brad123@email.com',
        },
        subscription: 'Monthly',
    },
]

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
}

function ProposalsTable() {
    const [order, setOrder] = useState('desc')
    const [selected, setSelected] = useState([])
    const [openFilter, setOpenFilter] = useState(false)

    const renderFilters = () => (
        <Fragment>
            <FormControl size="sm">
                <FormLabel>Status</FormLabel>
                <Select placeholder="Filter by status" slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}>
                    <Option value="paid">Paid</Option>
                    <Option value="pending">Pending</Option>
                    <Option value="refunded">Refunded</Option>
                    <Option value="cancelled">Cancelled</Option>
                </Select>
            </FormControl>

            <FormControl size="sm">
                <FormLabel>Category</FormLabel>
                <Select placeholder="All">
                    <Option value="all">All</Option>
                </Select>
            </FormControl>

            <FormControl size="sm">
                <FormLabel>Customer</FormLabel>
                <Select placeholder="All">
                    <Option value="all">All</Option>
                </Select>
            </FormControl>
        </Fragment>
    )

    return (
        <Fragment>
            <Sheet
                className="SearchAndFilters-mobile"
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'none',
                    },
                    my: 1,
                    gap: 1,
                }}
            >
                <Input
                    size="sm"
                    placeholder="Search"
                    startDecorator={<i data-feather="search" />}
                    sx={{ flexGrow: 1 }}
                />
                <IconButton size="sm" variant="outlined" color="neutral" onClick={() => setOpenFilter(true)}>
                    <i data-feather="filter" />
                </IconButton>
                <Modal open={openFilter} onClose={() => setOpenFilter(false)}>
                    <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                        <ModalClose />
                        <Typography id="filter-modal" level="h2">
                            Filters
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {renderFilters()}
                            <Button color="primary" onClick={() => setOpenFilter(false)}>
                                Submit
                            </Button>
                        </Sheet>
                    </ModalDialog>
                </Modal>
            </Sheet>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: {
                        xs: 'none',
                        sm: 'flex',
                    },
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > *': {
                        minWidth: {
                            xs: '120px',
                            md: '160px',
                        },
                    },
                }}
            >
                <FormControl sx={{ flex: 1 }} size="sm">
                    <FormLabel>Search for order</FormLabel>
                    <Input placeholder="Search" startDecorator={<i data-feather="search" />} />
                </FormControl>

                {renderFilters()}
            </Box>
            <Sheet
                variant="outlined"
                sx={{
                    width: '100%',
                    borderRadius: 'md',
                    flex: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': (theme) => theme.vars.palette.background.level1,
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': (theme) => theme.vars.palette.background.level1,
                        fontSize: '1.2rem',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 48, textAlign: 'center', padding: 12 }}>
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length !== rows.length}
                                    checked={selected.length === rows.length}
                                    onChange={(event) => {
                                        setSelected(event.target.checked ? rows.map((row) => row.id) : [])
                                    }}
                                    color={
                                        selected.length > 0 || selected.length === rows.length ? 'primary' : undefined
                                    }
                                    sx={{ verticalAlign: 'text-bottom' }}
                                />
                            </th>
                            <th style={{ width: 140, padding: 12 }}>
                                <Link
                                    underline="none"
                                    component="button"
                                    onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                    fontWeight="lg"
                                    endDecorator={<ArrowDownRegular />}
                                    sx={{
                                        '& svg': {
                                            transition: '0.2s',
                                            transform: order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                        },
                                        color: 'hsl(244, 100%, 50%)',
                                    }}
                                >
                                    Work
                                </Link>
                            </th>
                            <th style={{ width: 120, padding: 12 }}>Created Date</th>
                            <th style={{ width: 120, padding: 12 }}>Status</th>
                            <th style={{ width: 220, padding: 12 }}>Freelancer</th>
                            <th style={{ width: 120, padding: 12 }}>Due Date</th>
                            <th style={{ width: 200, padding: 12 }}> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {stableSort(rows, getComparator(order, 'id')).map((row) => (
                            <tr key={row.id}>
                                <td style={{ textAlign: 'center' }}>
                                    <Checkbox
                                        checked={selected.includes(row.id)}
                                        color={selected.includes(row.id) ? 'primary' : undefined}
                                        onChange={(event) => {
                                            setSelected((ids) =>
                                                event.target.checked
                                                    ? ids.concat(row.id)
                                                    : ids.filter((itemId) => itemId !== row.id),
                                            )
                                        }}
                                        slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                                        sx={{ verticalAlign: 'text-bottom' }}
                                    />
                                </td>
                                <td>
                                    <LinkRoute to={config.routes.workDetail}>
                                        <Typography fontWeight="md">{row.id}</Typography>
                                    </LinkRoute>
                                </td>
                                <td>{row.date}</td>
                                <td>
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        startDecorator={
                                            {
                                                Paid: <CheckmarkRegular />,
                                                Refunded: <ArrowStepBackRegular />,
                                                Cancelled: <DismissRegular />,
                                            }[row.status]
                                        }
                                        color={
                                            {
                                                Paid: 'success',
                                                Refunded: 'neutral',
                                                Cancelled: 'danger',
                                            }[row.status]
                                        }
                                        sx={{ fontSize: '1.2rem' }}
                                    >
                                        {row.status}
                                    </Chip>
                                </td>
                                <td>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <Avatar size="sm">{row.customer.initial}</Avatar>
                                        <div>
                                            <Typography fontWeight="lg" level="body3" textColor="text.primary">
                                                {row.customer.name}
                                            </Typography>
                                            <Typography level="body3">{row.customer.email}</Typography>
                                        </div>
                                    </Box>
                                </td>
                                <td>{row.subscription}</td>
                                <td>
                                    <LinkRoute to={config.routes.workDetailFreelancerSide}>
                                        <Link
                                            fontWeight="lg"
                                            component="button"
                                            color="neutral"
                                            sx={{ ml: 2 }}
                                            startDecorator={<EyeRegular />}
                                        >
                                            View
                                        </Link>
                                    </LinkRoute>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            <Box className="Pagination-mobile" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                <IconButton aria-label="previous page" variant="outlined" color="neutral" size="sm">
                    <i data-feather="arrow-left" />
                </IconButton>
                <Typography level="body2" mx="auto">
                    Page 1 of 10
                </Typography>
                <IconButton aria-label="next page" variant="outlined" color="neutral" size="sm">
                    <i data-feather="arrow-right" />
                </IconButton>
            </Box>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 4,
                    gap: 1,
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button size="md" variant="plain" color="neutral" startDecorator={<ArrowLeftRegular />}>
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton key={page} size="sm" variant={Number(page) ? 'outlined' : 'plain'} color="neutral">
                        {page}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} />

                <Button size="md" variant="plain" color="neutral" endDecorator={<ArrowRightRegular />}>
                    Next
                </Button>
            </Box>
        </Fragment>
    )
}

export default ProposalsTable
