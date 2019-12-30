import React, { useState  } from 'react'
import { Box } from '@material-ui/core'
import { Column, Section } from 'rbx'
// import { Form } from 'antd';
import Card from '@material-ui/core/Card';
// import { InputAntd as Input, InputSitio as InputZ } from '../../../../Components/Input';


import { Button } from 'uxcore';
import { Form } from 'uxcore';
import { Icon } from 'uxcore';
import { Tooltip } from 'uxcore';

// export default Form.create({ name: 'FormRegister' })(FormRegister);
const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField,
    SelectFormField,
    Validators,
  } = Form;
export default function FormRegister(props) {
    const [state, setState] = useState({
        Nombre: '',
        Correo: '',
        Telefono: '',
        Contraseña: '',
        TryContraseña: '',
        sitioWeb: '',
        typoUser: '',
        mode:true,
        // form:[]
    })
    
    const { tipo } = props
    // const { getFieldDecorator } = props.form;



    function  handleSubmit() {
        // console.log(form.getValues(true));

      }
    
      function handleModeChange(values, name) {
        console.log(values[name]);
        setState({...state,
          mode: values[name] === 'true',
        });
      }
      
    return (
        <>

            <Section>
                <Box component="span" display="block" p={1} m={2}>
                    <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
                        <Column >
                            <Card>
                                <Box fontSize={28} css={{ height: 'auto' }}>
                                <div className="demo-validator">
        <Form className="form-select" jsxvalues={{ mode: 'true' }} jsxonChange={handleModeChange}>
          <SelectFormField jsxdata={{ true: '实时校验', false: '非实时校验' }} jsxname="mode" jsxlabel="校验模式" showSearch={false} />
        </Form>
        <Form className="demo-basic-form" instantValidate={state.mode}>
          <Input
            jsxname="theme"
            jsxlabel="主题"
            required
            jsxtips="这是一个提示"
            jsxplaceholder="请输入主题"
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
              { validator(value) { return value.length <= 3; }, errMsg: '不能超过3个字' },
            ]}
          />
          <Input
            jsxname="location"
            jsxlabel="地点"
            required
            jsxplaceholder="请输入地点"
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
            ]}
          />
          <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
          <TextArea
            jsxname="content"
            jsxlabel="内容"
            required
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
            ]}
          />
          <OtherFormField>
            <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={handleSubmit}>确定</Button>
          </OtherFormField>
        </Form>
      </div>

                                    {/* <Form layout='horizontal' >
                                        <Box fontSize={24}>
                                            {tipo}
                                        </Box>

                                        <Box m={2} css={{ textAlign: 'justify' }}>
                                            {/* <Input
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
                                    </Form> */}
                                </Box>
                            </Card>

                        </Column>
                    </Column.Group>
                </Box>
            </Section>

        </>
    )
}

