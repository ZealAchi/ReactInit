import React, { useContext, useState } from 'react'
import { Form, Input, Button, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

import { DataContextForProveedores } from './formContext';
import { Column } from 'rbx'
import { Box } from '@material-ui/core';




const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;

const Filtro1 = (
    <InputGroup compact style={{ paddingLeft: 10, display: 'flex' }}>
        <Select style={{ width: '70%' }} defaultValue="">
            <Option value="Option1-1">Construcción residencial</Option>
            <Option value="Option1-2">Construcción comercial</Option>
            <Option value="Option1-3">Construcción industrial</Option>
            <Option value="Option1-4">Construcción obras públicas</Option>
            <Option value="Option1-5">Construcción institucional</Option>
            <Option value="Option1-6">Construcción comercial</Option>
            <Option value="Option1-7">Compra/renta de maquinaria </Option>
        </Select>
    </InputGroup>
);
const Filtro2 = (
    <InputGroup compact style={{ paddingLeft: 10, display: 'flex' }}>
        <Select style={{ width: '70%' }} defaultValue="">
            <Option value="Option1-1">Material</Option>
            <Option value="Option1-7">Lote</Option>
        </Select>
    </InputGroup>
);

export const Filtros = (
    <><Column.Group style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgb(204, 204, 204)', alignItems: 'stretch' }}>
        <Column>
            <label title="Filtrar por Tipos de construcción">Filtrar por tipos de construcción</label>
        </Column>
        <Column size={8}>
            {Filtro1}
        </Column>
    </Column.Group>
        <Column.Group style={{ display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid rgb(204, 204, 204)', alignItems: 'stretch' }}>
            <Column >
                <label>Filtrar por Categoria</label>
            </Column>
            <Column size={8}>
                {Filtro2}
            </Column>
        </Column.Group ></>)

export default function () {
    const { pais, estado, ChangeVisible, visible } = useContext(DataContextForProveedores)
    const [formLayout, setFormLayout] = useState('horizontal')



    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;




    return (<>
        <Form layout={formLayout}>
            <Box css={{ display: `${visible ? '' : 'none'}` }}>
                <Form.Item label="Pais" {...formItemLayout}>
                    <Input placeholder="Selecciona un Pais en el Mapa" disabled value={pais} />
                </Form.Item>
                <Form.Item label="Estado" {...formItemLayout}>
                    <Input placeholder="Selecciona un Estado en el Mapa" disabled value={estado} />
                </Form.Item>
                <Form.Item label="Busca" {...formItemLayout}>
                    <Search placeholder="Buscar por palabra clave..." onSearch={value => console.log(value)} enterButton />
                </Form.Item>
            </Box>
            <Form >
                {Filtros}

                <br />
                Se Encontraron 10 Cotizaciones
               <br />
                <Button type="primary" onClick={ChangeVisible}>
                    {visible?'Ver Resultados':'Volver al mapa'}

                    
                </Button>

            </Form>
        </Form>

    </>)
}

