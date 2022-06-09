import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import service from '../../service'

const pageSize = 4

const AppPagination = ({ setData }) => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page')

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        console.log("Use Effect running");

        console.log();

        if (page !== 1) {
            const from = (page - 1) * pageSize
            const to = (page - 1) * pageSize + pageSize

            service.getData({ from, to })
                .then((response) => {
                    setPagination({ ...pagination, count: response.count })
                    setData(response.data)
                })

        } else {
            service.getData({ from: pagination.from, to: pagination.to })
                .then((response) => {
                    setPagination({ ...pagination, count: response.count })
                    setData(response.data)
                })
        }


    }, [pagination.from, pagination.to])

    const handlePageChange = (event, page) => {

        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize

        navigate({
            path: "/find-jobs",
            search: `page=${page}`
        })

        setPagination({ ...pagination, from: from, to: to })
        window.scrollTo(0, 0)
    }

    return (
        <Pagination
            variant="outlined"
            shape="rounded"
            page={+page}
            count={Math.ceil(pagination.count / pageSize)}
            onChange={handlePageChange} />
    )
}

export default AppPagination