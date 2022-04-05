// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '首页',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: '首页',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
