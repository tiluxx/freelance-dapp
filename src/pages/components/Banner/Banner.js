import classNames from 'classnames/bind'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import styles from './Banner.module.scss'
import bannerImg from './banner.jpg'

const cx = classNames.bind(styles)

function Banner({ title = 'Welcome' }) {
    return (
        <Card component="li" sx={{ minWidth: 300, minHeight: 160, flexGrow: 1 }}>
            <CardCover>
                <img src={bannerImg} loading="lazy" alt="Banner" />
            </CardCover>
            <CardContent sx={{justifyContent: 'center'}}>
                <h3 className={cx('banner-title')}>{title}</h3>
            </CardContent>
        </Card>
    )
}

export default Banner
