import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarButton(props) {
    return (
        <>
            <FontAwesomeIcon onClick={props.onClick} icon={props.icon} size='lg' title={props.title} className='bg-gray-200 text-gray-700 hover:bg-gray-400 p-4 rounded-full' />
        </>
    )
}

export default NavbarButton