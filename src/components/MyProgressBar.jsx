import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

const MyProgressBar = ({ percent }) => {
    return (
        <div className='w-48'>

            <CircularProgressbar
                value={percent}
                text={`${Math.round(percent)}%`}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#029E9D',
                    textColor: '#029E9D',
                    trailColor: '#D9D9D9',
                })}
            />
        </div>
    );
};

export default MyProgressBar;