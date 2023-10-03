import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarButton(props) {
    return (
        <>
            <FontAwesomeIcon onClick={props.onClick} icon={props.icon} size='lg' title={props.title} className='bg-gray-100 shadow-md text-gray-700 hover:bg-gray-200 p-4 rounded-full' />
        </>
    )
}

export default NavbarButton