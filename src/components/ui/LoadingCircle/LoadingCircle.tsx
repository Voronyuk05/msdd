import { Oval } from 'react-loader-spinner'
import { COLORS } from '../../../constants/color.constants';
import styles from './LoadingCircle.module.scss'


export const LoadingCircle = () => {
    return (
        <div className={styles.wrapper_circle}>
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
    )
}