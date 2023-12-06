export interface SourceData {
    depname: string;
    parent: number | null;
    depid: number;
}

export interface TargetData {
    depname: string;
    depid: number;
    children?: TargetData[];
}


export const convertTree = (data: SourceData[], parentId: number | null = null): TargetData[] => {
    const result: TargetData[] = [];

    for (const item of data) {
        if (item.parent === parentId) {
            const newItem: TargetData = {
                depname: item.depname,
                depid: item.depid,
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

