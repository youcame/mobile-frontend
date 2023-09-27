import UserType from "./user";

type TeamType = {
    id: number,
    description: string,
    expireTime: Date,
    maxNum: number,
    name: string,
    password?: string,
    status: number,
    createTime: Date,
    updateTime: Date,
    createUser?: UserType
}

export default TeamType