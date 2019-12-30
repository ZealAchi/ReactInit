import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { Column, Section } from 'rbx'
import { Form } from 'antd';
import Card from '@material-ui/core/Card';
import { InputAntd as Input, InputSitio as InputZ } from '../../../../Components/Input';

export default Form.create({ name: 'FormRegister' })(FormRegister);

function FormRegister(props) {
    const [sate, setState] = useState({
        Nombre: '',
        Correo: '',
        Telefono: '',
        Contraseña: '',
        TryContraseña: '',
        sitioWeb: '',
        typoUser: ''

    })
    const { tipo } = props
    const { getFieldDecorator } = props.form;

    return (
        <>

            <Section>
                <Box component="span" display="block" p={1} m={2}>
                    <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
                        
                        <Column >
                            <Card>
                                <Box fontSize={28} css={{ height: 'auto' }}>
                                    <Form layout='horizontal' >
                                        <Box fontSize={24}>
                                            {tipo}
                                        </Box>

                                        <Box m={2} css={{ textAlign: 'justify' }}>
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input 
                                                getFieldDecorator={getFieldDecorator}
                                                label="email"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'} />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Correo"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Telefono"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Contraseña"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <InputZ
                                                getFieldDecorator={getFieldDecorator}
                                                label="sitioWeb"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />

                                        </Box>
                                    </Form>
                                </Box>
                            </Card>

                        </Column>
                    </Column.Group>
                </Box>
            </Section>

        </>
    )
}

