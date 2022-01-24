import { DataGrid, zhCN } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const data = [
    { id: 1, deviceType: 'Hello', col2: 'World' },
    { id: 2, deviceType: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, deviceType: 'MUI', col2: 'is Amazing' },
    { id: 4, deviceType: 'Hello', col2: 'World' },
    { id: 5, deviceType: 'DataGridPro', col2: 'is Awesome' },
    { id: 6, deviceType: 'MUI', col2: 'is Amazing' },
    { id: 7, deviceType: 'Hello', col2: 'World' },
    { id: 8, deviceType: 'DataGridPro', col2: 'is Awesome' },
    { id: 9, deviceType: 'MUI', col2: 'is Amazing' },
    { id: 10, deviceType: 'Hello', col2: 'World' },
    { id: 11, deviceType: 'DataGridPro', col2: 'is Awesome' },
    { id: 12, deviceType: 'MUI', col2: 'is Amazing' },
    { id: 13, deviceType: 'Hello', col2: 'World' }
];

const columns = [
    { field: 'id', headerName: '序号', width: 150 },
    { field: 'deviceType', headerName: '设备类型', width: 150, editable: true },
    { field: '1', headerName: '小号所属平台', width: 150 },
    { field: '2', headerName: '小号名称', width: 150 },
    { field: '3', headerName: '用户名称', width: 150 },
    { field: '4', headerName: '地理位置', width: 150 },
    { field: '5', headerName: '连接状态', width: 150 },
    { field: '6', headerName: '是否真实收货', width: 150 },
    { field: '7', headerName: '垫付金额额度', width: 150 },
    { field: '8', headerName: '当月完成订单数量', width: 150 },
    { field: '9', headerName: '当月完成订单金额', width: 150 },
    { field: '10', headerName: '当日完成订单数量', width: 150 },
    { field: '11', headerName: '当日完成订单金额', width: 150 },
    { field: '12', headerName: '最后使用时间', width: 150 },
    { field: '13', headerName: '最后操作', width: 150 },
    { field: '14', headerName: '小号标签', width: 150 }
];

const ControlList = () => {
    const [pageSize, setPageSize] = useState(5);
    const [rowsState, setRowsState] = useState({
        page: 0,
        pageSize: 5,
        rows: [],
        loading: false
    });

    useEffect(() => {
        let active = true;

        (async () => {
            setRowsState((prev) => ({ ...prev, loading: true }));
            // const newRows = await loadServerRows(
            //     rowsState.page,
            //     rowsState.pageSize,
            //     data.rows,
            // );

            if (!active) {
                return;
            }

            setRowsState((prev) => ({ ...prev, loading: false, rows: data }));
        })();

        return () => {
            active = false;
        };
    }, [rowsState.page, rowsState.pageSize, data.rows]);

    // <MainCard title="控制列表">
    // <Container maxWidth="sm">
    return (
        <DataGrid
            columns={columns}
            rows={data}
            rowsPerPageOptions={[5, 10]}
            pagination
            pageSize={pageSize}
            paginationMode="server"
            rowCount={data.length}
            onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
            onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
        />
    );
    // </Container>
    // </MainCard>
};

export default ControlList;
