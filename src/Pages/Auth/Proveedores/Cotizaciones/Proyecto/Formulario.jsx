import React,{useState} from 'react'

import { Button } from 'uxcore';
import { Form } from 'uxcore';
import { Icon } from 'uxcore';
import { Tooltip } from 'uxcore';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



export default function Prueba() {
    const {
        InputFormField: Input,
        DateFormField: Date,
        TextAreaFormField: TextArea,
        OtherFormField,
        SelectFormField,
        Validators,
      } = Form;
      const [state,setState]=useState({
        mode:true
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
    return (<>

<div className="demo-validator">
        <Form className="form-select" jsxvalues={{ mode: 'true' }} jsxonChange={handleModeChange}>
          <SelectFormField jsxdata={{ true: '实时校验', false: '非实时校验' }} jsxname="mode" jsxlabel="校验模式" showSearch={false} />
        </Form>
        <Form  className="demo-basic-form" instantValidate={state.mode}>
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

        <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>,
      </div>
    </>)
}