/**
 * 用户类型
 */
type UserType = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: number;
    email?: string;
    tags?: string[];
    userStatus?: number;
    createTime?: Date;
    userRole?: number;
};