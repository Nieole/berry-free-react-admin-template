// material-ui
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { zhCN, DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const columns = [
    { field: 'deviceType', headerName: '设备类型', width: 150 },
    { field: 'type', headerName: '小号所属平台', width: 150 },
    { field: 'accountName', headerName: '小号名称', width: 150 },
    { field: 'userName', headerName: '用户名称', width: 150 },
    { field: 'location', headerName: '地理位置', width: 150 },
    { field: 'used', headerName: '连接状态', width: 150 },
    {
        field: 'canReceipt',
        headerName: '是否真实收货',
        width: 150,
        valueGetter: (params) => {
            if (params.row.canReceipt) {
                return '是';
            }
            return '否';
        }
    },
    { field: 'advanceAmount', headerName: '垫付金额额度', width: 150 },
    { field: 'taskMonthCount', headerName: '当月完成订单数量', width: 150 },
    { field: 'taskMonthLumpSum', headerName: '当月完成订单金额', width: 150 },
    { field: 'taskTodayCount', headerName: '当日完成订单数量', width: 150 },
    { field: 'taskTodayLumpSum', headerName: '当日完成订单金额', width: 150 },
    {
        field: 'lastUsedAt',
        headerName: '最后使用时间',
        width: 150,
        renderCell: (params) => (
            <Button color="primary" variant="contained" size="small">
                {params.row.type}
            </Button>
        )
    },
    { field: 'lastOperationType', headerName: '最后操作', width: 150 },
    {
        field: 'tags',
        headerName: '小号标签',
        width: 150,
        valueGetter: (params) => params.row.type
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: '操作',
        width: 80,
        getActions: (params) => [<Button>1</Button>, <Button>2</Button>]
    }
];

const Home = () => {
    const [sortModel, setSortModel] = useState([
        {
            field: 'deviceType',
            sort: 'asc'
        }
    ]);

    const [loading, setLoading] = useState(false);

    const handleSortModelChange = (newModel) => {
        setSortModel(newModel);
    };

    const row = [
        { id: 1, deviceType: 'Hello', type: 'World', canReceipt: true },
        { id: 2, deviceType: 'DataGridPro', type: 'is Awesome', canReceipt: false },
        { id: 3, deviceType: 'MUI', type: 'is Amazing', canReceipt: true },
        { id: 4, deviceType: 'Hello', type: 'World', canReceipt: true },
        { id: 5, deviceType: 'DataGridPro', type: 'is Awesome', canReceipt: true },
        { id: 6, deviceType: 'MUI', type: 'is Amazing', canReceipt: true },
        { id: 7, deviceType: 'Hello', type: 'World', canReceipt: true },
        { id: 8, deviceType: 'DataGridPro', type: 'is Awesome', canReceipt: true },
        { id: 9, deviceType: 'MUI', type: 'is Amazing', canReceipt: true }
    ];

    const [rows, setRows] = useState(row);

    useEffect(() => {
        let active = true;
        (async () => {
            setLoading(true);
            const newRows = row;
            if (!active) {
                return;
            }
            setRows(newRows);
            setLoading(false);
        })();
        return () => {
            active = false;
        };
    });

    const theme = createTheme(
        {
            palette: {
                primary: { main: '#1976d2' }
            }
        },
        zhCN
    );

    return (
        <MainCard title="个人信息">
            <div style={{ height: '100%', display: 'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <ThemeProvider theme={theme}>
                        <DataGrid
                            autoHeight
                            sortingMode="server"
                            sortModel={sortModel}
                            onSortModelChange={handleSortModelChange}
                            loading={loading}
                            checkboxSelection
                            disableSelectionOnClick
                            components={{
                                Toolbar: GridToolbar
                            }}
                            rows={rows}
                            columns={columns}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </MainCard>
    );
};

export default Home;
