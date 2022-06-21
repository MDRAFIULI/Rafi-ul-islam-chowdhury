import React from 'react';

const skill = ({ skill }) => {
    return (
        <div className='bg-[#FEF9A7] rounded-lg py-3'>
            <h3 className='text-center mb-2'>{skill.name}</h3>
            <img className='w-36 h-36 mx-auto' src={skill.img} alt="" />
        </div>
    );
};

export default skill;
// bg-[#4B5D67]