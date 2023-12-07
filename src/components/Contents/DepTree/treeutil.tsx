export interface SourceData {
    depname: string;
    parent: number | null;
    depid: number;
}

export interface TargetData {
    title: string;
    key: number;
    children?: TargetData[];
}


export const convertTree = (data: SourceData[], parentId: number | null = null): TargetData[] => {
    const result: TargetData[] = [];

    for (const item of data) {
        if (item.parent === parentId) {
            const newItem: TargetData = {
                title: item.depname,
                key: item.depid,
            };

            const children = convertTree(data, item.depid);
            if (children.length > 0) {
                newItem.children = children;
            }

            result.push(newItem);
        }
    }

    return result;
}


export const getChildrenKey = (data: SourceData[],depId:React.Key):React.Key[]=>{
    const result:React.Key[] = []
    for(const item of data){
        if(item.parent === depId){
            const num = item.depid; // 使用 item.depid 替代 item.parent
            result.push(num);

            // 递归获取子元素并连接结果
            result.push(...getChildrenKey(data, item.depid));
        }
    }
    return result;
}


