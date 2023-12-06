import {FC} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import {SourceData,TargetData,convertTree} from './treeutil'

const treeData: SourceData[] =  [
  { "depname": "总部", "parent": null, "depid": 0 },
  { "depname": "SSC", "parent": 0, "depid": 1 },
  { "depname": "人事部", "parent": 2, "depid": 2 },
  { "depname": "OA组", "parent": 2, "depid": 3 },
  { "depname": "HRBP", "parent": 2, "depid": 4 },
  { "depname": "签证组", "parent": 2, "depid": 5 },
  { "depname": "薪酬组", "parent": 2, "depid": 6 },
]

 const dd =  convertTree(treeData)
  console.log(dd)


const DepTree:FC = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      return (
        <Tree style={{backgroundImage:'linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)'}}
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={['0-0-0']}
          onSelect={onSelect}
     
        />
      );
}
export default DepTree 