import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarButton(props) {
    return (
        <>
            <FontAwesomeIcon icon={props.icon} size='2x' className='bg-gray-200 hover:bg-gray-400 p-4 rounded-full' />
        </>
    )
}

export default NavbarButton