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
            <Box fontSize={16} bgcolor="text.secondary" color="background.paper" style={{ height: '10rem' }} p={2} m={1}>
                <Box fontSize={28}>
                    Registrate
                </Box>
            </Box>
            <Section>
                <Box component="span" display="block" style={{ margin: '-22px' }} p={1} m={1} bgcolor={`#3f51b5`}>
                    <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
                        <Column>
                            <ConoceBeneficios />
                        </Column><Column>
                            <Card>
                                <Box fontSize={28} css={{ height: '37.4rem' }}>
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
                                            <InputZ label="Nombre"
                                                                                            getFieldDecorator={getFieldDecorator}

                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'} />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
                                                placeholder="Ingresa el Nombre de la publicación"
                                                message={'El Nombre no puede ir  nulo'}
                                            />
                                            <Input
                                                getFieldDecorator={getFieldDecorator}
                                                label="Nombre"
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



function ConoceBeneficios() {
    return (
        <><Card>
            <Box fontSize={28}>
                Conoce los beneficios
        </Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>Los años de experiencia en el sector de la construcción por parte del equipo han llevado a crear esta nueva herramienta, CoSupplies.</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                CoSupplies nace como herramienta que facilita la comunicación entre compradores y proveedores, del sector de la construcción, de una manera sencilla y ágil a través de una plataforma que los pone en contacto, mostrando los proyectos demandados, por parte de los compradores y la cotización ofrecida a dichos proyectos por parte de los proveedores, realizando ofertas en precios, calidad y tiempos de envío.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Accede a la herramienta de subasta inversa proporcionadas por las empresas constructoras y compradoras.                        </Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Presenta tu cotización a los proyectos que mejor se adapten a tu oferta y consulta el estado de tu cotización.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Aumenta tu facturación.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                No gastes en buscar nuevos proyectos,ahorra en el departamento de ventas y encuéntralos todos en una plataforma.                        </Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Accede al mercado internacional.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Facilitamos el contacto con agentes aduanales.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Compradores serios filtrados oficialmente por el equipo CoSupplies.
</Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Se valorado por las empresas con las que trabajas para que todos sepan la calidad de tu servicio.
 </Box>
            <Box fontSize={16} css={{ textAlign: 'justify!important' }} m={1}>
                Accede a las licitaciones del gobierno.
</Box>
        </Card>

        </>
    )
}