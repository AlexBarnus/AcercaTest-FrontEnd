import { apiGetVehicles, apiDelVehicles, apiPutVehicles, apiPostVehicles } from '../api/Api';
import * as actions from '../actions/VehicleActions';


const initialState = { vehicles: [], delOK: false, openForm: false, detailVehicle: null, edit: false, openAlert: false, titleAlert: "", textAlert: "", openConfirm: false, deleteVehicle:null };



//Funcion para obtener la lista de vehículos
export const fetchGetVehicles = () => {
    return (dispatch) => {
        //Llamamos a la función de la api
        apiGetVehicles()
            .then(res =>          
            { dispatch(actions.getVehicles(res)); })
            .catch(res => { console.log(res); })
    }
};

//Funcion para eliminar un vehículo
export const fetchDelVehicles = (vehicle) => {
    return (dispatch) => {
        //Llamamos a la función de la api
        apiDelVehicles(vehicle)
            .then(res => { dispatch(actions.delVehicles(res)); })
            .catch(res => { console.log(res); });        
    }
};

//Funcion para actualizar un vehículo
export const fetchPutVehicles = (vehicle) => {
    return (dispatch) => {
        //Llamamos a la función de la api
         apiPutVehicles(vehicle)
             .then(res => { dispatch(actions.putVehicles(res)); })
            .catch(res => { console.log(res); });       
    }
};

//Funcion para añadir un vehiculo
export const fetchPostVehicles = (vehicle) => {
    return (dispatch) => {
        //Llamamos a la función de la api
        apiPostVehicles(vehicle)
            .then(res => { dispatch(actions.postVehicles(res)); })
            .catch(res => { console.log(res); });
    }
};

//Funcion para cambiar el estado de visibilidad del componente VehicleForm y guardar el vehiculo
export const setFormVisible = (visible,vehicle) => {
    return (dispatch) => {
        dispatch(actions.changeFormVisible(visible,vehicle,(vehicle != null)))
    }
}

//Funcion para cambiar la visibilidad del componente Alert y sus textos.
export const callAlert = (openAlert, titleAlert, textAlert) => {
    return (dispatch) => {
        dispatch(actions.setAlert(openAlert, titleAlert, textAlert))
    }
}

//Funcion para cambiar el estado de visibilidad del componente Confirm y guardar el vehiculo a eliminar
export const callConfirm = (openConfirm, vehicle) => {
    return (dispatch) => {
        dispatch(actions.setConfirm(openConfirm, vehicle))
    }
}

//Funcion para crear un objeto vehicle vacio
const createVehicle = () => {
   var vehicle = new Object();
    vehicle.NumeroPedido = 0;
    vehicle.Id = 0;
    vehicle.Bastidor = "";
    vehicle.Matricula = "";
    vehicle.FechaEntrega = "T";
    return vehicle;
}

//Funcion para cambiar los datos del formulario
export const changeValueForm = (name, value, detail) => {   

    let vehicle = detail;
    if (vehicle === null) {
        vehicle = createVehicle();
     }
    switch (name)
    {
        case "NumeroPedido":
            vehicle.NumeroPedido = value;
            break;
        case "Bastidor":
            vehicle.Bastidor = value;     
            break;
        case "Modelo":
            vehicle.Modelo = value; 
            break;
        case "Matricula":
            vehicle.Matricula = value; 
            break;
        case "FechaEntrega":
            vehicle.FechaEntrega = value; 
            break;
        default:
            break;
        
    }
    
    return (dispatch) => {        
        dispatch(actions.setValueForm(vehicle))
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_VEHICLES:
            return Object.assign({}, state, { vehicles: action.payload }) 
        case actions.DEL_VEHICLES:
            return Object.assign({}, state, { vehicles: action.payload, openAlert: true, openConfirm: false, deleteVehicle: null, titleAlert: "Eliminar vehículo", textAlert: "Vehículo eliminado correctamente" }); 
        case actions.PUT_VEHICLES:
            return Object.assign({}, state, { vehicles: action.payload, openForm: false, detailVehicle: null, openAlert: true, titleAlert: "Modificar vehículo", textAlert: "Vehículo modificado correctamente"  }); 
        case actions.POST_VEHICLES:
            return Object.assign({}, state, { vehicles: action.payload, openForm: false, detailVehicle: null, openAlert: true, titleAlert: "Añadir vehículo", textAlert: "Vehículo añadido correctamente" }); 
        case actions.SET_FORM_VISIBILITY:
            return Object.assign({}, state, { openForm: action.payload, detailVehicle: action.vehicle, edit: action.edit });  
        case actions.SET_VALUE_FORM:
            return Object.assign({}, state, { detailVehicle: action.payload });
        case actions.SET_ALERT:
            return Object.assign({}, state, { openAlert: action.openAlert, titleAlert: action.titleAlert, textAlert: action.textAlert });  
        case actions.SET_CONFIRM:
            return Object.assign({}, state, { openConfirm: action.openConfirm, deleteVehicle: action.deleteVehicle });  
          
        default:
            return { ...state };
    }
}