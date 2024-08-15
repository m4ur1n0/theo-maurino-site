import React, {useEffect, useState} from 'react'
import './EnterAnimation.css'
import TypingText from './TypingText'


const EnterAnimation = () => {
    const text = "import { theo-maurino } from\n    './src/about_me'\n    './src/projects'\n     './src/blog_personal'\n    './src/philosophy'";


    return (
        <div className={'white-screen-enter-animation'}>
            <div className='text-container-enter-animation'>
                <TypingText textInput={text} />
            </div>
        </div>
  )
}

export default EnterAnimation