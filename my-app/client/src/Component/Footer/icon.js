import { Icon } from 'react-icons-kit'
import {envelopeO} from 'react-icons-kit/fa/envelopeO'
import {phone} from 'react-icons-kit/fa/phone'
import {mapMarker} from 'react-icons-kit/fa/mapMarker'

import {instagram} from 'react-icons-kit/fa/instagram'
import {vk} from 'react-icons-kit/fa/vk'
import {odnoklassniki} from 'react-icons-kit/fa/odnoklassniki'
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'



export const IconEnvelopeO = (props) => <Icon size={props.size} icon={envelopeO} />
export const IconPhone = (props) => <Icon size={props.size} icon={phone} />
export const IconMapMarker = (props) => <Icon size={props.size} icon={mapMarker} />


export const IconInstagram = (props) => <Icon size={props.size} style={props.style} icon={instagram} />
export const IconVk = (props) => <Icon size={props.size} style={props.style} icon={vk} />
export const IconOdnoklassniki = (props) => <Icon size={props.size} style={props.style} icon={odnoklassniki} />
export const IconFacebook = (props) => <Icon size={props.size} style={props.style} icon={facebook} />
export const IconTwitter = (props) => <Icon size={props.size} style={props.style} icon={twitter} />