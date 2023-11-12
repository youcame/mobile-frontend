import UserType from "./user";

type TeamType = {
    id: number,
    creatorId: number,
    description: string,
    expireTime: Date,
    teamNowNumber: number | 0,
    maxNum: number,
    name: string,
    password?: string,
    status: number,
    createTime: Date,
    updateTime: Date,
    createUser?: UserType,
    isInTeam: boolean | false
}

export default TeamType