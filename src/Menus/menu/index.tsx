import items from '../../interfaces/items'

const left:items[] = [
  {
    key:'00',
    keypath: '/index/dashboard',
    module:'00',
    label:'管理桌面',  
    children:[
      {
        key:'/index/dashboard',
        keypath: '/index',
        label:'仪表盘', 
      }
    ]
  },
    {
      key:'01',
      keypath: '/hrm',
      module:'01',
      label:'基础信息',
      children:[
        {
          key:'/hrm/info',
          keypath: '/hrm',
          label:'人员信息',
        },
        {
          key:'/hrm/chg',
          keypath: '/hrm',
          label:'变动日志',
        },
        {
          key:'/hrm/sal',
          keypath: '/hrm',
          label:'调薪记录',
        }
        
      ]
    },
    {
      key:'02',
      keypath: '/hrm',
      module:'02',
      label:'组织结构',
      children:[
        {
          key:'0201',
          keypath: '/hrm',
          label:'部门信息',
        },
        {
          key:'0203',
          keypath: '/hrm',
          label:'变动信息',
        },
      ]
    },
    {
      key:'03',
      keypath: '/hrm',
      module:'03',
      label:'考勤计算',
      children:[
        {
          key:'0301',
          keypath: '/hrm',
          label:'结果数据',
        },
        {
          key:'0302',
          keypath: '/hrm',
          label:'信息导入',
        },
      ]
    }
  ]

export default left