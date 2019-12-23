import React, { useContext, useState } from 'react'
import { Form, Input, Button, Select, } from 'antd';

import { DataContextForProveedores } from './formContext';
import { Column, Divider } from 'rbx'
import { Box } from '@material-ui/core';
import { Animate } from 'uxcore';
import { Select as uxSelect } from 'uxcore';
import CrearProyecto from '../Proyecto/crear'
const { uxOption } = uxSelect;

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
            <Option value="Option1-5">Compra/renta de maquinaria </Option>
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
    <>
        <Divider color='black'></Divider>
        <Column.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch' }}>
            <Column>
                <label title="Filtrar por Tipos de construcción">Filtrar por tipos de construcción</label>
            </Column>
            <Column size={8}>
                {Filtro1}
            </Column>
        </Column.Group>
        <Column.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch' }}>
            <Column >
                <label>Filtrar por Categoria</label>
            </Column>
            <Column size={8}>
                {Filtro2}
            </Column>
        </Column.Group >
        <Divider color='black'></Divider>
    </>)

export default function ({ children }) {

    console.log(children)
    const { pais, estado, ChangeVisible, visible, effect } = useContext(DataContextForProveedores)
    const [formLayout] = useState('horizontal')

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;
    const effects = ['fade', 'slideRight', 'slideDown', 'newspaper', 'fall', 'threeFallH', 'threeFallV', 'threeSign', 'superScale', 'threeSlit', 'threeRotateBottom', 'threeRotateLeft'];



    const [state, setState] = useState({
        visible: true,
        effect: 'fade',
    })
    function showComponent() {
        setState({
            ...state,
            visible: !state.visible,
        });
        ChangeVisible()
    }

    function handleChange(value) {
        setState({
            ...state,
            effect: value,
        });
    }

    return (<>
        <Form layout={formLayout} style={{ background: '#fff' }}>
            <Column.Group  >
                <Column size={3} offset={7} style={{ textAlign: 'end' }}>
                    <CrearProyecto visible={visible}/>
                </Column>
            </Column.Group>
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

                {visible && <Button type="primary" onClick={showComponent}>
                    Ver Resultados
                </Button>}
                {!visible && children}

                <div>
                    <div style={{ height: '60px' }}>
                        <Animate showProp="visible" transitionName={state.effect} transitionAppear>
                            <AwesomeComponent visible={state.visible} />
                        </Animate>
                    </div>
                    <div style={{ padding: '10px 0px' }}>
                        <Select style={{ width: '200px' }} placeholder="切换动画效果" value={state.effect}>
                            {effects.map(item => <Option key={item}>{item}</Option>)}
                        </Select>
                        <Button type="outline" onClick={showComponent} style={{ marginLeft: '10px' }}>显示/隐藏</Button>
                    </div>
                </div>
            </Form>
        </Form>
    </>)
}

function AwesomeComponent(props) {
    return (
        <div style={{ display: props.visible ? 'inline-block' : 'none' }} className="awesome-component-wrap bg-primary-color">
            动画展示区域
      </div>
    );

}