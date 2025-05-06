import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import styles from './Modal.module.scss'

export const Modal = ({children, handleCloseModal}: {children: React.ReactNode, handleCloseModal: () => void}) => {


    useEffect(() => {
        window.document.body.style.overflow = 'hidden'

        return () => {
            window.document.body.style.overflow = 'hidden auto'
        }
    }, [])

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleCloseModal()
        }

    }

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={`${styles.modal}`}>
                <div className={styles.close} onClick={(() => {handleCloseModal()})}>
                    <IoMdClose />
                </div>
                {children}
            </div>
        </div>
    )
}