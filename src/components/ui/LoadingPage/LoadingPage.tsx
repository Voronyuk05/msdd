import { Oval } from 'react-loader-spinner'
import { COLORS } from '@/constants/color.constants'
import styles from './LoadingPage.module.scss'

export const LoadingPage = () => {

    return <div data-testid='loading' className={styles.backdrop}>
        <Oval
        visible={true}
        height="160"
        width="160"
        color={COLORS.primary}
        secondaryColor={COLORS.white}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
}

export default LoadingPage