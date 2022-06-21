import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Skill from './Skill';

const Skills = () => {

    const skills = [
        { name: 'HTML', img: 'https://i.ibb.co/PcPmgK2/html.png', id: 1 },
        { name: 'CSS', img: 'https://i.ibb.co/WFzqtnf/css.png', id: 2 },
        { name: 'Bootstrap', img: 'https://i.ibb.co/TtBry9q/bootstrap.png', id: 3 },
        { name: 'Tailwind CSS', img: 'https://i.ibb.co/KFCDT3Y/tailwaind.png', id: 4 },
        { name: 'JavaScript', img: 'https://i.ibb.co/y673n67/js.png', id: 5 },
        { name: 'React Js', img: 'https://i.ibb.co/BPqRcJQ/react-35639ed930462bfcd544.png', id: 6 },
        { name: 'Firebase', img: 'https://i.ibb.co/w7FV4HM/firebase-bff5748e0ad72bf0c427.png', id: 7 },
        { name: 'GitHub', img: 'https://i.ibb.co/41YC08V/github-caeb9ff86e1c3e87612e.png', id: 8 },
        { name: 'Express Js', img: 'https://i.ibb.co/hXcHYBR/express-483b10d681a9c51431b7.png', id: 9 },
        { name: 'Node Js', img: 'https://i.ibb.co/x5Yr2kN/node-js-8030f6dd22521410731e.png', id: 10 },
        { name: 'MongoDB', img: 'https://i.ibb.co/qg7sKXM/mongodb-70c82e5ad6bbb2533be4.png', id: 11 },
        { name: 'DaisyUI', img: 'https://i.ibb.co/Z2QRk6w/daisyUi.jpg', id: 12 }
    ]

    return (
        <div className='lg:mx-24 mt-32'>
            <h2 id='skills' className='text-6xl text-center'>My <span className='text-[#ed5a00]'>Skills</span></h2>
            <div className='divider'>.......</div>

            <div style={{ width: '75%' }} className="grid lg:grid-cols-4 grid-cols-2 gap-8 mx-auto mt-10">
                {skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)}
            </div>

        </div>
    );
};

export default Skills;