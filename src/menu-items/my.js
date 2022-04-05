// assets
import { IconBrandChrome, IconHelp, IconGhost } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconGhost };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const my = {
    id: 'sample-docs-roadmap',
    title: '我的信息',
    type: 'group',
    children: [
        {
            id: 'help-page',
            title: '帮助信息',
            type: 'item',
            url: '/help-page',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        {
            id: 'my-page',
            title: '我的信息',
            type: 'item',
            url: '/my-page',
            icon: icons.IconGhost,
            breadcrumbs: true
        },
        {
            id: 'home',
            title: '个人信息',
            type: 'item',
            url: '/home',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default my;
