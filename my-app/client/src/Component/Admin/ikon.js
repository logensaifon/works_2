import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'react-icons-kit'
import {commentsO} from 'react-icons-kit/fa/commentsO'
import {upload} from 'react-icons-kit/fa/upload'
import { RiProductHuntLine } from "react-icons/ri"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"


export const IconUpload = (props) => <Icon icon={upload} size={props.size} />
export const IconCommentsO = (props) => <Icon icon={commentsO} size={props.size} />
export const IconRiProductHuntLine = (props) => (
    <i style={props.style}>
        <RiProductHuntLine 
            className={props.className}
            style={props.style}
            size={props.size}
        />
    </i>
)

export const IconAiOutlineCheck = (props) => (
    <i style={props.style}>
        <AiOutlineCheck 
            className={props.className}
            style={props.style}
            size={props.size}
        />
    </i>
)

export const IconAiOutlineClose = (props) => (
    <i style={props.style}>
        <AiOutlineClose 
            className={props.className}
            style={props.style}
            size={props.size}
        />
    </i>
)
