import {FC} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';

const treeData: DataNode[] = [
    {
      title: '总部',
      key: '0-0',
      children: [
        {
          title: 'SSC',
          key: '0-0-0',
          children: [
            {
              title: '人事部',
              key: '0-0-0-0',
            },
            {
              title: '行政部',
              key: '0-0-0-1',
            },
            {
              title: '财务部',
              key: '0-0-0-2',
            },
          ],
        },
        {
          title: 'HQ',
          key: '0-0-1',
          children: [
            {
              title: 'HQA',
              key: '0-0-1-0',
            },
          ],
        },
        {
          title: 'HQB',
          key: '0-0-2',
          children: [
            {
              title: '运营部',
              key: '0-0-2-0',
            },
            {
              title: '研发部',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
  ];

  


const DepTree:FC = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      return (
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={['0-0-0']}
          onSelect={onSelect}
          treeData={treeData}
        />
      );
}
export default DepTree 