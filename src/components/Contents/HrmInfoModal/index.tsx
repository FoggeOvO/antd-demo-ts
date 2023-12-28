import { ModalForm, ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import {  Divider, Form, message } from 'antd'
import React, { FC } from 'react'
import {post} from '../../../utils/request'
import { HrmDataTpye } from '../../../interfaces/HrmDataTpye';

interface propsItem {
  open: boolean
  handleOk: () => void
  handleCancel: () => void
  depids:number[]
}

const HrmInfoModal: FC<propsItem> = (props) => {
  //用于新增数据时
  const { open, handleOk, handleCancel,depids } = props

  const [form] = Form.useForm<HrmDataTpye>();
  const depid = depids[0]

  const defaultData:HrmDataTpye = {
    gender: "",
    type:"user",
    hiredate: "",
    lastname: "",
    level: "",
    workcode: "",
    position: "",
    depid: depid,
    title: "",
    national:"",
    actConfData:"",
    costcenter:"",
    houseAllance:null,
    isCN:null,
    isConf:null,
    isTech:null,
    mealAllance:null,
    salGroup:null,
    remark:"",
  }

  return (
    <ModalForm<HrmDataTpye>
      title="基本信息填写"
      open={open}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: handleCancel,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        const infos:HrmDataTpye[] = [{...defaultData,...values  as HrmDataTpye,"username":values.lastname}]
        console.log(infos)
        await post('/api/user/createUser',infos)
        .then(data => {
          message.success('提交成功');
          handleOk();
        })
        .catch(err => console.log(err))
        return true;
      }}
    >
       <Divider />

      <ProForm.Group>
        <ProFormText
          width="md"
          name="lastname"
          label="英文名"
          tooltip="最长为 24 位"
        />

        <ProFormText
          width="md"
          name="workcode"
          label="工号"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="gender"
          label="性别"
        />
        <ProFormDatePicker name="hireDate" label="入职日期" />
      </ProForm.Group>
      <ProForm.Group>
      <ProFormText
          width="md"
          name="position"
          label="岗位"
        />
        <ProFormSelect
          width="xs"
          name="isTech"
          label="是否技术岗"
          valueEnum={{ 1: '是', 2: '否' }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="level" label="职级" />
    </ModalForm>
  )
}


export default HrmInfoModal