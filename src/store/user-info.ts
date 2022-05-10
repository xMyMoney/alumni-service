import { defineStore } from "pinia";
import {Alumni} from "@api/alumni";

export const useStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: "userInfo",
    // state: 返回对象的函数
    state: ():Alumni=>({
        id: undefined,
        avatar: undefined,
        username: undefined,
        password:undefined,
        gender: undefined,
        birthday: undefined,
        address: undefined,
        phone: undefined,
        company: undefined,
        jor :undefined,
        stuId: undefined,
        education: undefined,
        academy: undefined,
        major: undefined,
        beginYear: undefined,
        endYear: undefined,
        star: undefined,
        status: undefined,
        loginTime: undefined,
    }),
    getters: {
        userInfo(state: Alumni): Alumni {
            return { ...state };
        },
    },
    actions:{
        setInfo(info:Partial<Alumni>) {
            this.$patch(info)
        }
    },

});

