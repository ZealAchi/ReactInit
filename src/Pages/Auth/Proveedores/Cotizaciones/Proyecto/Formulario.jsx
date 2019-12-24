import React, { useState } from 'react'

import { Button } from 'uxcore';
import { Form } from 'uxcore'
import { Select } from 'antd';
import { Box } from '@material-ui/core';
import { Column, Hero } from 'rbx';
import { Uploader } from 'uxcore';

const { Option } = Select;

export default function Prueba() {
  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField,
    SelectFormField,
    Validators,
  } = Form;
  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })
  function handleModeChange(values, name) {
    console.log(values[name]);
    setState({
      mode: values[name] === 'true',
    });
  }
  function handleSubmit() {
    console.log('asd');
  }
  function handleChange(fileList) {
    setState({
      fileList,
    });
  }
  const tips = <span className="tips">Limitado a 0.5M <em>（formatos admitidos：.doc; .docx; .xls; .xlsx）</em></span>;

  return (
    <Hero color="light" style={{
      paddingTop: '51px',
      marginBottom: '1rem',
      backgroundColor: ' #ecf0f1',
      borderRadius: '0.3rem',
      paddingRight: '2rem',
      paddingLeft: '14px',
      marginRight: 'auto',
      marginLeft: 'auto',
    }} >
      <Column.Group>
        <Box m={1} css={{ padding: 5  }}>
            <Column >
              <div className="demo-validator">
                <Form className="form-select" jsxvalues={{ mode: 'Selecciona un tipo de Proyecto' }} jsxonChange={handleModeChange}>
                  <SelectFormField jsxdata={{ tipo1: 'residencial', tipo2: 'comercial', tipo3: 'industrial', tipo4: 'obras publicas', tipo5: 'industrial' }} jsxname="mode" jsxlabel="Tipo de Proyecto" showSearch={false} />
                </Form>
                <Form className="demo-basic-form" instantValidate={state.mode}>
                  <Input
                    jsxname="theme"
                    jsxlabel="Nombre del proyecto"
                    required
                    jsxplaceholder="Ingresa el nombre del Proyecto"
                    jsxrules={[
                      { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                      { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
                    ]}
                  />
                  <Input
                    jsxname="location"
                    jsxlabel="Lugar"
                    required
                    jsxplaceholder="Ingresa la Ubicación de Entrega"
                    jsxrules={[
                      { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                    ]}
                  />
                </Form>
                <div >
                  <h2>Suba una Imagen</h2>
                  <Uploader
                    style={{ padding: 10 }}
                    multiple={false}
                    isOnlyImg={false}
                    tips={tips}
                    fileList={state.fileList}
                    onChange={handleChange}
                    name="file"
                    url="http://eternalsky.me:8122/file/upload"
                    locale="en"
                  />
                </div>

                <br />
                Condiciones de pago  - % Anticipo - % Contraentrega - % Crédito por ___ días
<br />
                - Materiales/lotes ( se permite agregar varios) - Categoría  - Nombre del material/lote
 <br />

                - Fecha límite  - Cantidad  - Unidad de medida - Fichas técnicas ( adjunta) - opción de agregar planos
 <br />
                <OtherFormField>
                  <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={handleSubmit}>Crear proyecto</Button>
                </OtherFormField>

              </div>
            </Column>
            <Column>
            </Column>

        </Box>
      </Column.Group></Hero>)
}