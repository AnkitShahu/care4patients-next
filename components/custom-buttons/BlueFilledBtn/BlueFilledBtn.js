import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/components-style/custom-buttons/blueFilledBtn/BlueFilledBtn.module.css'

const BlueFilledBtn = ({ btnTitle, btnLink, anchor, navlink }) => {
    return (
        <>
            {
                navlink ? <Button className={`${Styles.blueFilledBtn} rounded-pill me-1 mt-md-0 mt-2`}>
                    <Link href={btnLink}>
                        <a>{btnTitle}</a>
                    </Link>
                </Button> : anchor ? <Button className={`${Styles.blueFilledBtn} rounded-pill me-1 mt-md-0 mt-2`}>
                    <a href={btnLink}>{btnTitle}</a>
                </Button> : null
            }
        </>
    )
}

export default BlueFilledBtn