import { FaBars } from "react-icons/fa";

export const menus = [
    {
        id: 1,
        name: "카테고리",
        icon: <FaBars />,
        subMenus: [
            {
                id: 1,
                name: "국.탕.찌개",
                path: "/user/category/1",
                subSideMenus: [],
            },
            {
                id: 2,
                name: "안주",
                path: "/user/category/2",
                subSideMenus: [],
            },
            {
                id: 3,
                name: "밀키트",
                path: "/user/category/3",
                subSideMenus: [
                    {
                        id: 1,
                        name: "냉동",
                        path: "/user/category/31"
                    },
                    {
                        id: 2,
                        name: "냉장",
                        path: "/user/category/32"
                    },
                ]
            },
            {
                id: 4,
                name: "간편식",
                path: "/user/category/4",
                subSideMenus: [],
            },
        ]
    },
    {
        id: 2,
        name: "신상품",
        path: "/user/newproduct",
        subMenus: [],
    },
    {
        id: 3,
        name: "인기 상품",
        path: "/user/best",
        subMenus: [],
    },
    {
        id: 4,
        name: "상품 후기",
        path: "/user/review",
        subMenus: [],
    },
];