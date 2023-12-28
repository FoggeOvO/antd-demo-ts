export interface HrmDataTpye {
    _id?: string;
    username?:string;
    type?:string;
    gender: string;
    hiredate: string;
    lastname: string;
    level: string;
    workcode: string;
    position: string;
    depid: number | null;
    title: string;
    national:string;
    actConfData:string;
    costcenter:string;
    houseAllance:number | null;
    isCN:number | null;
    isConf:number | null;
    isTech:number | null;
    mealAllance:number | null;
    salGroup:number | null;
    remark:string;
  }