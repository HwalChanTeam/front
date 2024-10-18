import { atom } from "recoil";

export const selectedItemsAtom = atom({
    key: 'selectedItemsAtom', // 유일한 키
    default: [], // 기본값
  });

  export const userIdAtom = atom({
    key: 'userIdAtom',
    default: null, // 로그인 시 userId가 저장될 것
  });