import items from '../../interfaces/items'

const left:items[] = [
    {
      key:'01',
      label:'基础信息',
      children:[
        {
          key:'/index/hrm/info',
          label:'人员信息',
        },
        {
          key:'0102',
          label:'变动日志',
        },
        {
          key:'0103',
          label:'调薪记录',
        }
        
      ]
    },
    {
      key:'02',
      label:'组织结构',
      children:[
        {
          key:'0201',
          label:'部门信息',
        },
        {
          key:'0203',
          label:'变动信息',
        },
      ]
    },
    {
      key:'03',
      label:'考勤计算',
      children:[
        {
          key:'0301',
          label:'结果数据',
        },
        {
          key:'0302',
          label:'信息导入',
        },
      ]
    }
  ]

export default left