import React, { useContext, Children } from "react";
import { Column } from 'rbx'
import Map, { InfoMapa } from './map'

import Form from './form'
import { DataContextForProveedores } from "./formContext";

export default function Proveedores({ children }) {
    const { visible } = useContext(DataContextForProveedores)
    console.log('Proveedores', children)
    return (<Column.Group >
        <Column style={{ display: `${visible ? '' : 'none'}` }}>
            <Map />
        </Column>
        <Column>
            <InfoMapa />
            <Form>{children}</Form>
        </Column>
    </Column.Group>)
}
