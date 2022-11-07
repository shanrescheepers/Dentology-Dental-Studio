import Lottie from 'react-lottie';
import React from 'react';
import * as animationData from '../lottie/404.json'

export function FourOhFour() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Lottie className='lottie' options={defaultOptions}
                height={500}
                width={800}
                style={{ "borderRadius": '30px', "marginRight": "20%" }}
                isStopped={false}
                isPaused={false} />
            <div className='home-btn' style={{ "borderRadius": '30px', "marginLeft": "45%", 'backgroundColor': '#7372E3', 'width': '150px', 'padding': '4px', textAlign: 'center', color: 'white' }}>
                <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }} > Go Back To Main </a>
            </div>
        </>
    )

}

export default FourOhFour;