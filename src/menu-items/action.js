// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBasket, IconAffiliate } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBasket,
    IconAffiliate
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const action = {
    id: 'actions',
    title: '操作',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'operator',
            title: '操作端',
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'control-list',
                    title: '控制列表',
                    type: 'item',
                    url: '/control-list',
                    breadcrumbs: false
                },
                {
                    id: 'operation-history',
                    title: '操作历史',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'my-supplementary-record',
                    title: '我的补单记录',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'on-hook',
            title: '挂机端',
            type: 'collapse',
            icon: icons.IconAffiliate,
            children: [
                {
                    id: 'device-management',
                    title: '设备管理',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'operation-record',
                    title: '操作记录',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                },
                {
                    id: 'my-advance-payment-record',
                    title: '我的垫付记录',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default action;
