import React from 'react';
import VehiclePage from '../containers/VehiclePage';
import VehicleFormPage from '../containers/VehicleFormPage';
import AlertPage from '../containers/AlertPage';
import ConfirmPage from '../containers/ConfirmPage';

const App = () => (
    <div>
        <VehiclePage />,
        <VehicleFormPage />,
        <AlertPage />,
        <ConfirmPage />
    </div>
)

export default App