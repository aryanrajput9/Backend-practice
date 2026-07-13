import React, { useEffect } from 'react'
import { Outlet } from 'react-router';
import { useAdminHook } from '../features/admin/hook/adimHook';

function Dashboardlayout() {

    const { handleCurrentAdmin } = useAdminHook();


    useEffect(() => {
        handleCurrentAdmin()
    }, [])

    return (
        <Outlet />
    )
}

export default Dashboardlayout
