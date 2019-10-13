import React from 'react';
import MaterialTable from "material-table";

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};


//Componente que muestra el listado de vehiculos y las acciones.
export class VehicleTable extends React.Component {

    //Obtenemos los datos
    componentDidMount() {
        this.props.fetchGetVehicles();
       
    }

 




   


    render() {
       
       
        return (
            <div>              
                <MaterialTable
                    icons={tableIcons}
                    columns={[

                        { title: "Número de pedido", field: "NumeroPedido", type: "numeric" },
                        { title: "Bastidor", field: "Bastidor" },
                        { title: "Modelo", field: "Modelo" },
                        { title: "Matrícula", field: "Matricula" },
                        { title: "Fecha de entrega", field: "FechaEntrega", type: "date", render: rowData => new Date(rowData.FechaEntrega).toLocaleDateString() }

                    ]}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Editar detalle',
                            onClick: (event, rowData) => this.props.setFormVisible(true,rowData)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Eliminar',
                            onClick: (event, rowData) => this.props.callConfirm(true, rowData)
                        },
                        {
                            icon: 'add',
                            tooltip: 'Añadir vehículo',
                            isFreeAction: true,
                            onClick: (event, rowData) => this.props.setFormVisible(true,null)

                        }
           ]}
                    options={{
                        actionsColumnIndex: -1,
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF'
                        },
                        rowStyle: {
                            backgroundColor: '#EEE',
                        },
                        addRowPosition: "first",
                        pageSizeOptions: [this.props.vehicles.length, 10, 50 ],
                        pageSize: this.props.vehicles.length,
                        paginationType: "normal",
                        searchFieldAlignment: "left"
                    }}
                    localization={{
                        pagination: {
                            labelDisplayedRows: '{from}-{to} de {count}',
                            labelRowsSelect: 'filas',
                            labelRowsPerPage: 'Filas por pagina:',
                            firstAriaLabel: 'Primera pagina',
                            firstTooltip: 'Primera pagina',
                            previousAriaLabel: 'Pagina anterior',
                            previousTooltip: 'Pagina anterior',
                            nextAriaLabel: 'Pagina siguiente',
                            nextTooltip: 'Pagina siguiente',
                            lastAriaLabel: 'Ultima pagina',
                            lastTooltip: 'Ultima pagina',
                        },
                        toolbar: {
                            searchTooltip: 'Buscar',
                            searchPlaceholder: 'Buscar'
                        },
                        header: {
                            actions: 'Acciones'
                        },
                        body: {
                            emptyDataSourceMessage: 'Sin filas que mostrar',
                            filterRow: {
                                filterTooltip: 'Filtro'
                            }
                        }
                    }}
                    data={this.props.vehicles}
                    title="Listado de vehículos"
                />

               

                
             
            </div>
        );
    }
}

export default VehicleTable