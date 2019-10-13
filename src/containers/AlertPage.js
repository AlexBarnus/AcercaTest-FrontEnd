import { connect } from 'react-redux'
import Alert from '../components/Alert'
import { callAlert} from '../reducers/vehiclesReducer';

const mapStateToProps = state => {
    return {
        openAlert: state.vehicles.openAlert,
        titleAlert: state.vehicles.titleAlert,
        textAlert: state.vehicles.textAlert
    }
}



const AlertPage = connect(
    mapStateToProps,
    { callAlert}
)(Alert)

export default AlertPage