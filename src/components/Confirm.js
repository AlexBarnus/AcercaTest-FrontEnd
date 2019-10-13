import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


//Componente para confirmar el borrado de un vehículo
export class Confirm extends React.Component {


    //Metodo para cerrar el formulario
    handleClose = () => {
        this.props.callConfirm(false, null);
    };

    //Metodo para borrar el vehículo
    handleConfirm = () => {
        this.props.fetchDelVehicles(this.props.deleteVehicle);
    }

    render() {


        return (
            <div>


                <Dialog
                    open={this.props.openConfirm}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Eliminar vehículo</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           ¿Desea eliminar el vehículo seleccionado?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancelar
                        </Button>
                        <Button onClick={this.handleConfirm} color="primary" autoFocus>
                            Aceptar
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Confirm