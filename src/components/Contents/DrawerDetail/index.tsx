import { ProCard, ProForm, ProFormDatePicker, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components'
import { Avatar, Button, Divider, Drawer, Space, Tag, message } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { HrmDataTpye } from '../../../interfaces/HrmDataTpye'
import { get, put } from '../../../utils/request'
//描述信息，固定得信息，无法修改


interface propsItem {
  open: boolean
  onClose: () => void
  info?: HrmDataTpye
}


const DrawerDetail: FC<propsItem> = (props) => {


  //打开抽屉，显示详细信息
  const { open, onClose, info } = props
  const [edit, setEdit] = useState(true)
  const readControl = () => {
    setEdit(!edit)
  }

  // console.log(props)

  const editData = async (formdata: Record<string, any>) => {
    const newData = { ...formdata, _id: info?._id }
    await put('/api/user/updateUserById', newData)
      .then((res) => {
        message.success('提交成功')
      })
      .catch((err) => {
        message.error('提交失败')
        console.log(err)
      })
  }

  const [formData, setFormData] = useState<HrmDataTpye | null>(null)

  const [detail, setDetail] = useState<HrmDataTpye | null>(null)

  // useEffect(() => {
  //   makeSyncGetRequest('/api/user/getUserById', { "_id": info?._id }).then((res)=>{setFormData(res.data) })
  // }, [info?._id]);

  // useEffect(() => {
  //   if (detail) {
  //     setFormData(prevDetail => (
  //       {
  //         ...prevDetail, ...detail
  //       }));
  //   }
  //   console.log('当前formData:',formData)
  // }, [detail]);

  
  useEffect(() => {
    console.log('@_id is', info?._id)
    const fetchData = async () => {
      try {
        // 发起异步请求
        
        const response = await get('/api/user/getUserById', { "_id": info?._id });  // 替换成你的实际接口地址
        const newData = response.data;
        // 在获取到数据后更新组件的状态
         setDetail(newData)
        console.log('newdata is ', newData);
        console.log('@@detail is ', detail)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  // 执行异步请求

    // 如果有需要，在组件卸载时执行清理工作
    return () => {
      // 取消请求或其他清理工作
      console.log('组件已卸载')
    };
  }, [info?._id]);

  

  return (
    <>
      <Drawer
        title={'详细信息'}
        placement="right"
        size={'large'}
        onClose={onClose}
        destroyOnClose={true}
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
              <ProForm disabled={edit} style={{ display: 'flex', flexDirection: 'column' }} onFinish={editData}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormText width="md" name='national' label="国籍" initialValue={detail?.national} />
                  </div>

                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormDatePicker label="入职日期" name="hiredate" initialValue={info?.hiredate} />
                  </div>

                  <div style={{ width: '25%' }}>
                    <ProFormDatePicker label="转正日期" name="actConfData" initialValue={info?.actConfData} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否技术岗" name="isTech" valueEnum={{ 1: '是', 2: '否' }} initialValue={info?.isTech + ""} />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否享有餐补" name="mealAllance" valueEnum={{ 1: '是', 2: '否' }} initialValue={info?.mealAllance + ""} />
                  </div>
                  <div style={{ width: '25%' }}>
                    <ProFormSelect label="是否享有房补" name="houseAllance" valueEnum={{ 1: '是', 2: '否' }} initialValue={info?.houseAllance + ""} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="所属薪资组" name="salGroup" valueEnum={{ 1: 'PH', 2: 'TW' }} initialValue={info?.salGroup + ""} />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否华人" name="isCN" valueEnum={{ 1: '是', 2: '否' }} initialValue={info?.isCN + ""} />
                  </div>
                  <div style={{ width: '25%', marginRight: '10%' }}>
                    <ProFormSelect label="是否转正" name="isConf" valueEnum={{ 1: '是', 2: '否' }} initialValue={info?.isConf + ""} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: '100%' }}>
                    <ProFormText label="费用分摊部门" name="costcenter" initialValue={info?.costcenter} />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <ProFormTextArea width="md" name="remark" label="备注" readonly={false} initialValue={info?.remark}></ProFormTextArea>
                </div>
              </ProForm>
            </div>
          </div>
        </ProCard>
      </Drawer >

    </>
  )
}

export default DrawerDetail