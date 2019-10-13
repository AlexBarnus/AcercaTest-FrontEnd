export const GET_VEHICLES = 'GET_VEHICLES';
export const DEL_VEHICLES = 'DEL_VEHICLES';
export const PUT_VEHICLES = 'PUT_VEHICLES';
export const POST_VEHICLES = 'POST_VEHICLES';
export const SET_VALUE_FORM = 'SET_VALUE_FORM';
export const SET_ALERT = 'SET_ALERT';
export const SET_CONFIRM = 'SET_CONFIRM';
export const SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY'


export const getVehicles = (vehicles) => ({ type: GET_VEHICLES, payload: vehicles });
export const delVehicles = (vehicles) => ({ type: DEL_VEHICLES, payload: vehicles });
export const putVehicles = (vehicles) => ({ type: PUT_VEHICLES, payload: vehicles });
export const postVehicles = (vehicles) => ({ type: POST_VEHICLES, payload: vehicles });
export const changeFormVisible = (visible, vehicle, edit) => ({ type: SET_FORM_VISIBILITY, payload: visible, vehicle: vehicle, edit: edit });
export const setValueForm = (detail) => ({ type: SET_VALUE_FORM, payload: detail });
export const setAlert = (openAlert, titleAlert, textAlert) => ({ type: SET_ALERT, openAlert: openAlert, titleAlert: titleAlert, textAlert: textAlert })
export const setConfirm = (openConfirm, vehicle) => ({ type: SET_CONFIRM, openConfirm: openConfirm, deleteVehicle: vehicle })