import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/index",
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [{
                path: "/index",
                name: "index",
                component: () =>
                    import ("../views/index.vue"),
                meta: {
                    title: "首页",
                    parentpath: "/index",

                },
            },
            {
                path: "/goods",
                name: "goods",
                redirect: "/goods/index",
                component: () =>
                    import ("../views/goods.vue"),
                meta: {
                    title: "商品",
                    parentpath: "/goods",
                },
                children: [{
                        path: "/goods/index",
                        name: "goodsindex",
                        component: () =>
                            import ("../views/goods/goodsindex.vue"),
                        meta: {
                            title: "商品首页",
                            parentpath: "/goods",
                        },
                    },
                    {
                        path: "/goods/admin/create",
                        name: "",
                        component: () =>
                            import ("../views/goods/goodscreate.vue"),
                        meta: {
                            title: "新增商品",
                            parentpath: "/goods",
                        },
                    },
                    {
                        path: "/goods/admin/list",
                        name: "",
                        component: () =>
                            import ("../views/goods/goodslist.vue"),
                        meta: {
                            title: "商品列表",
                            parentpath: "/goods",
                        },
                    },
                ],
            },
            {
                path: "/order",
                name: "order",
                redirect: "/order/index",
                component: () =>
                    import ("../views/order.vue"),
                meta: {
                    title: "订单",
                    parentpath: "/order",
                },
                children: [{
                    path: "/order/index",
                    name: "orderindex",
                    component: () =>
                        import ("../views/order/orderindex.vue"),
                    meta: {
                        title: "订单首页",
                        parentpath: "/order",
                    },
                }, ],
            },
            {
                path: "/marketing",
                name: "marketing",
                redirect: "/marketing/index",
                component: () =>
                    import ("../views/marketing.vue"),
                meta: {
                    title: "营销",
                    parentpath: "/marketing",
                },
                children: [{
                    path: "/marketing/index",
                    name: "marketingindex",
                    component: () =>
                        import ("../views/marketing/marketingindex.vue"),
                    meta: {
                        title: "营销首页",
                        parentpath: "/marketing",
                    },
                }, ],
            },
            {
                path: "/member",
                name: "member",
                redirect: "/member/index",
                component: () =>
                    import ("../views/member.vue"),
                meta: {
                    title: "会员",
                    parentpath: "/member",
                },
                children: [{
                    path: "/member/index",
                    name: "memberindex",
                    component: () =>
                        import ("../views/member/memberindex.vue"),
                    meta: {
                        title: "会员首页",
                        parentpath: "/member",
                    },
                }, ],
            },
            {
                path: "/system",
                name: "system",
                redirect: "/system/index",
                component: () =>
                    import ("../views/system.vue"),
                meta: {
                    title: "系统",
                    parentpath: "/system",
                },
                children: [{
                    path: "/system/index",
                    name: "systemindex",
                    component: () =>
                        import ("../views/system/systemindex.vue"),
                    meta: {
                        title: "系统首页",
                        parentpath: "/system",
                    },
                }, ],
            },
            {
                path: "/setting",
                name: "setting",
                redirect: "/setting/index",
                component: () =>
                    import ("../views/setting.vue"),
                meta: {
                    title: "设置",
                    parentpath: "/setting",
                },
                children: [{
                    path: "/setting/index",
                    name: "settingindex",
                    component: () =>
                        import ("../views/setting/settingindex.vue"),
                    meta: {
                        title: "系统首页",
                        parentpath: "/settings",
                    },
                }, ],
            },
        ],
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;