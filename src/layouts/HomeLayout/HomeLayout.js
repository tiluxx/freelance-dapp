import classNames from 'classnames/bind'
import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

function HomeLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>
}

export default HomeLayout