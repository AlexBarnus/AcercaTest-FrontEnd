import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Componente de alert
export class Alert extends React.Component {


    //Metodo para cerrar el alert
    handleClose = () => {
        this.props.callAlert(false, "", "");
    };

    render() {


        return (
            <div>


                <Dialog
                    open={this.props.openAlert}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.titleAlert}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.textAlert}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Aceptar
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Alert