import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';






/* Componente para editar o añadir nuevo vehiculo*/
export class VehicleForm extends React.Component {

   
    /* Metodo que cierrar el formulario*/
     handleClose = () => {
         this.props.setFormVisible(false);
    };

    render() {

  

     
        const title = (this.props.edit ? "Editar Vehículo" : "Añadir Vehículo");

        //Metodo para controlar el cambio de datos en el formulario
        const handleChange = name => event => {            
            
            this.props.changeValueForm(name, event.target.value,this.props.detailVehicle);
        }

        //Metodo para guardar el vehiculo
        const saveVehicle = () => {
            if (validate(this.props.detailVehicle)) {
                if (this.props.edit) {
                    this.props.fetchPutVehicles(this.props.detailVehicle);
                }
                else {
                    this.props.fetchPostVehicles(this.props.detailVehicle);
                }
            }
            else {
                this.props.callAlert(true, "Error de datos", "Todos los campos deben estar correctamente rellenos.");
              
            }
        }

        //Metod que validar que todos los campos esten rellenos
        const validate = (vehicle) => {
            if (vehicle === null) return false;
            if (vehicle.NumeroPedido === null || vehicle.NumeroPedido <= 0) return false;
            if (vehicle.Bastidor === null || vehicle.Bastidor === "") return false;
            if (vehicle.Modelo === null || vehicle.Modelo === "") return false;
            if (vehicle.Matricula === null || vehicle.Matricula === "") return false;
            if (vehicle.FechaEntrega === null || vehicle.FechaEntrega === "" || vehicle.FechaEntrega === "T") return false;
            return true;
        }

        return (
            <form>
               
                <Dialog
                    open={this.props.openForm}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    maxWidth="lg">
                    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                    <DialogContent >
                     
                        <TextField
                            autoFocus
                            required
                            margin="normal"
                            id="NumeroPedido"
                            label="Numero de Pedido"
                            type="number"
                            defaultValue={(this.props.detailVehicle != null ? this.props.detailVehicle.NumeroPedido : 0)}
                            onChange={handleChange('NumeroPedido')}
                            variant="outlined"                         
                            style={{ margin: 8 }}

                        />
                        <TextField
                            required
                            margin="normal"
                            id="Bastidor"
                            label="Bastidor"
                            type="test"
                            defaultValue={(this.props.detailVehicle != null ? this.props.detailVehicle.Bastidor : "")}
                            onChange={handleChange('Bastidor')}
                            variant="outlined"
                            style={{ margin: 8 }}
                            inputProps={{ maxLength: 17 }}
                            
                        />
                        <TextField
                            required
                            margin="normal"
                            id="Modelo"
                            label="Modelo"
                            type="test"
                            defaultValue={(this.props.detailVehicle != null ? this.props.detailVehicle.Modelo : "")}
                            onChange={handleChange('Modelo')}
                            variant="outlined"
                            style={{ margin: 8 }}
                            inputProps={{ maxLength: 30 }}
                        />
                        <TextField
                            required
                            margin="normal"
                            id="Matricula"
                            label="Matrícula"
                            type="test"
                            defaultValue={(this.props.detailVehicle != null ? this.props.detailVehicle.Matricula : "")}
                            onChange={handleChange('Matricula')}
                            variant="outlined"
                            style={{ margin: 8 }}
                            inputProps={{ maxLength: 7 }}
                        />
                        <TextField 
                            required
                            margin="normal"
                            id="FechaEntrega"
                            label="Fecha de entrega"
                            type="date"
                            defaultValue={(this.props.detailVehicle != null ? this.props.detailVehicle.FechaEntrega.split('T')[0] : null)}
                            onChange={handleChange('FechaEntrega')}
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            style={{ margin: 8 }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
			  </Button>
                        <Button onClick={saveVehicle} color="primary">
                            Aceptar
			  </Button>
                    </DialogActions>
                </Dialog>
            </form>
        );


    }
}

export default VehicleForm