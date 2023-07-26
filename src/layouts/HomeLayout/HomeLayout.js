import classNames from 'classnames/bind'
import Header from 'src/layouts/components/Header'
import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

function HomeLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout
