import { connect } from 'react-redux'
import Confirm from '../components/Confirm'
import { callConfirm, fetchDelVehicles } from '../reducers/vehiclesReducer';

const mapStateToProps = state => {
    return {
        openConfirm: state.vehicles.openConfirm,
        deleteVehicle: state.vehicles.deleteVehicle
    }
}



const ConfirmPage = connect(
    mapStateToProps,
    { callConfirm, fetchDelVehicles }
)(Confirm)

export default ConfirmPage