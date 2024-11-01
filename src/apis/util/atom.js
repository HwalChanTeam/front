import { atom } from "recoil";

export const selectedItemsAtom = atom({
    key: 'selectedItemsAtom', // 유일한 키
    default: [], // 기본값
});

export const productOrderAtom = atom({
    key: 'productOrderAtom', // 유일한 키
    default: null // 기본값
});