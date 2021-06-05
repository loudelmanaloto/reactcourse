import PropTypes from 'prop-types'
import Button from './Button'
const HeaderComponent = ({title, onAdd, showAdd}) => {
   
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd?'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}

HeaderComponent.defaultProps = {
    title: 'Task Tracker'
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default HeaderComponent
