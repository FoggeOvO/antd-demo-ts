import { ProCard, ProForm, ProFormDatePicker, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components'
import { Avatar, Button, Divider, Drawer, Space, Tag } from 'antd'
import React, { FC,useState } from 'react'


//描述信息，固定得信息，无法修改


interface propsItem {
  open: boolean
  onClose: () => void
  info?: HrmDataTpye
}


interface HrmDataTpye {
  _id: string;
  gender: string;
  hiredate: string;
  lastname: string;
  level: string;
  workcode: string;
  position: string;
  depid: number;
  title: string;
}


const DrawerDetail: FC<propsItem> = (props) => {


  //打开抽屉，显示详细信息
  const { open, onClose, info } = props
  const [edit,setEdit] = useState(true)
  const readControl = ()=>{
    setEdit(!edit)
  }

  console.log(props)

  return (
    <>
      <Drawer
        title={'详细信息'}
        placement="right"
        size={'large'}
        onClose={onClose}
        style={{ backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={readControl}>编辑</Button>
          </Space>
        }
      >

        <ProCard
          title="基本信息"
          extra="extra"
          tooltip="不可修改"
          style={{ maxWidth: '100%' }}
          gutter={8}
          boxShadow
          bodyStyle={{ display: 'flex' }}
        >
          <div id='card-main' style={{ display: 'flex', flexDirection: 'column' }}>
            <div id='card-head' style={{ marginBottom: '15px' }}><Avatar
              style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }}
              size="large"
              gap={4}>
              {info?.title}
            </Avatar></div>
            <div id='card-body' style={{ display: 'flex' }}>
              <Tag style={{ marginRight: '15px' }}>{info?.gender}</Tag>
              <Tag style={{ marginRight: '15px' }}>{info?.workcode}</Tag>
              <Tag style={{ marginRight: '15px' }}>{info?.position}</Tag>
              <Tag style={{ marginRight: '15px' }}>{info?.level}</Tag>
            </div>
          </div>
        </ProCard>


        <Divider />
        <ProCard
          title="其他信息"
          extra="extra"
          tooltip="可编辑"
          style={{ maxWidth: '100%' }}
          gutter={8}
          boxShadow
          bodyStyle={{ display: 'flex' }}
        >
          <div id='card-main' style={{ display: 'flex', flexDirection: 'column' }}>
            <div id='card-head' style={{ marginBottom: '15px' }}></div>
            <div id='card-body' style={{ display: 'flex' }}>
              <ProForm readonly={edit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormText width="md" name='national' label="国籍"  />
                  </div>

                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormDatePicker label="入职日期" name="hiredate" />
                  </div>

                  <div style={{ width: '25%' }}>
                    <ProFormDatePicker label="转正日期" name="actConfData" />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否技术岗" name="isTech" valueEnum={{ 1: '是', 2: '否' }}  />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否享有餐补" name="mealAllance" valueEnum={{ 1: '是', 2: '否' }}  />
                  </div>
                  <div style={{ width: '25%' }}>
                    <ProFormSelect label="是否享有房补" name="houseAllance" valueEnum={{ 1: '是', 2: '否' }} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="所属薪资组" name="salGroup" valueEnum={{ 1: '是', 2: '否' }} />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否华人" name="isCN" valueEnum={{ 1: '是', 2: '否' }} />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否转正" name="isConf" valueEnum={{ 1: '是', 2: '否' }} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '100%' }}>
                    <ProFormText label="费用分摊部门" name="costcenter" />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <ProFormTextArea width="md" name="remark" label="备注" readonly={false}></ProFormTextArea>
                </div>


              </ProForm>
            </div>
          </div>
        </ProCard>

      </Drawer>

    </>
  )
}

export default DrawerDetail