import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';

export default function LoadingModal(props) {
    return (
        <>
            <CircularProgress
                {...props}
                className={`${props.className} loading-circle`}
            />
            <div className={`${props.className} layer-black`}></div>
        </>
    )
}
