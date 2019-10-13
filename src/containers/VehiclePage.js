
import { connect } from 'react-redux'
import VehicleTable from '../components/VehicleTable'

import { fetchGetVehicles, fetchDelVehicles, setFormVisible, callAlert, callConfirm } from '../reducers/vehiclesReducer';

const mapStateToProps = state => {
    return {
        vehicles: state.vehicles.vehicles,
        delOK: state.vehicles.delOK,
        confirmDelete: state.vehicles.confirmDelete,
        rowData: state.vehicles.rowData
    }
}




const VehiclePage = connect(
    mapStateToProps,
    { fetchGetVehicles, fetchDelVehicles, setFormVisible, callAlert, callConfirm }
)(VehicleTable)

export default VehiclePage