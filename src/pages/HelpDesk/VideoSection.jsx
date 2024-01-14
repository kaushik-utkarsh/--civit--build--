import React from 'react'
import close_svg from "../../assets/images/Close_square.svg";
import "../../App-new.css";
import './HelpDesk.css';

const VideoSection = () => {
    return (
        <div>
            <div className='container-help my-0 py-5 px-4 text-start bg-white'>
                <div className='d-flex justify-content-between'>
                    <h1 className='heading-600-24 text-start'>Getting Started!</h1>
                    <div className='pointer-global '><img src={close_svg} alt="" /></div>
                </div>
                <p className=' heading-400-14 gray-color2 text-start pb-2'>This video will help you get a better understanding of the platform with its unique features.</p>
                <div className='border-gray-help'>
                    <div className="ratio ratio-16x9">
                        <iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection