import React from 'react';


const Rank = ({namec, name, entries}) => {
    return (
        
            <div className='white f3'>
                {`${name} , your current entry count is...`}
                <div className='white f1 '>
                    {entries}
                </div>
            
            <div className='black f1'>
                <p>{namec}</p>
            </div>
        </div>
    )
}

export default Rank;