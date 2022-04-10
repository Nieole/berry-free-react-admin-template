// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: '控制端',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login',
                    title: 'Login',
                    type: 'item',
                    url: '/login',
                    target: false
                },
                {
                    id: 'register',
                    title: 'Register',
                    type: 'item',
                    url: '/register',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
