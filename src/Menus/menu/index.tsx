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
      keypath: '/dep',
      module:'02',
      label:'组织结构',
      children:[
        {
          key:'/dep/info',
          keypath: '/dep/info',
          label:'部门信息',
        },
        {
          key:'/dep/chg',
          keypath: '/dep/chg',
          label:'变动信息',
        },
      ]
    },
    {
      key:'03',
      keypath: '/att',
      module:'03',
      label:'考勤管理',
      children:[
        {
          key:'/att/res',
          keypath: '/att/res',
          label:'结果数据',
        },
        {
          key:'/att/imp',
          keypath: '/hrm',
          label:'信息导入',
        },
      ]
    },
    {
      key:'04',
      keypath: '/sal',
      module:'03',
      label:'薪酬管理',
      children:[
        {
          key:'/sal/base',
          keypath: '/sal/base',
          label:'薪资基础',
        },
        {
          key:'/sal/res',
          keypath: '/sal/res',
          label:'薪资计算',
        },
      ]
    }
  ]

export default left