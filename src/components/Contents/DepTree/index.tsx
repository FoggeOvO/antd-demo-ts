import { FC, useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { TreeProps } from 'antd/es/tree';
import { getDept } from '../../../api/dataapi'
import { SourceData, convertTree, getChildrenKey } from './treeutil'


const DepTree: FC = () => {

  const [deptData, setdeptData] = useState<SourceData[]>([])


  useEffect(() => {
      getDept()
      .then(data => setdeptData(data))
      .catch(err => {return err})
  }, [])


  const treeData = convertTree(deptData)


  const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
    //这里的selectedKeys参数为一个数组，但实际只会加入当前选择的节点，所以可以直接获取第0个元素
    const depid = selectedKeys[0]
    const childrenDep = getChildrenKey(deptData, depid)
    const selectDep = [depid, ...childrenDep]

    PubSub.publish('depInfo', selectDep)
  };


  return (
    <div style={{ height: 'auto' }}>
      {treeData.length > 0 && <Tree style={{ backgroundImage: 'linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)', height: '100%' }}
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0', '1', '2']}
        onSelect={onSelect}
        treeData={treeData}
        rootStyle={{ height: '100%' }}
      />}
    </div>

  );
}
export default DepTree 