import React, { useContext } from "react";
import { Column } from 'rbx'
import Map, { InfoMapa } from './map'

import Form from './form'
import { DataContextForProveedores } from "./formContext";

export default function Proveedores() {
    const { visible } = useContext(DataContextForProveedores)
    
    return (<Column.Group >
        <Column style={{ display: `${visible ? '' : 'none'}` }}>
            <Map />
        </Column>
        <Column>
            <InfoMapa />
            <Form />
        </Column>
    </Column.Group>)
}
