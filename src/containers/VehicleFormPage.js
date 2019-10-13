import { connect } from 'react-redux'
import VehicleForm from '../components/VehicleForm'
import { setFormVisible, changeValueForm, fetchPutVehicles, fetchPostVehicles, callAlert } from '../reducers/vehiclesReducer';

const mapStateToProps = state => {
    return {
        openForm: state.vehicles.openForm,     
        detailVehicle: state.vehicles.detailVehicle,
        edit: state.vehicles.edit
    }
}



const VehicleFormPage = connect(
    mapStateToProps,
    { setFormVisible, changeValueForm, fetchPutVehicles, fetchPostVehicles, callAlert }
)(VehicleForm)

export default VehicleFormPage