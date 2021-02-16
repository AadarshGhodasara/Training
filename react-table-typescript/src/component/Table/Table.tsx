import { useMemo, useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {fetchData} from '../redux/action';

import {useTable, useGlobalFilter, usePagination} from 'react-table';
import './Table.css';
export default function Table() {
    const countOfData = 500;
    const [limit,setLimit] = useState(10);
    const lastPageIndex = Math.ceil(countOfData/limit);
    const [pageIndex,setPageIndex] = useState(1);
    const [rangeStart,setRangeStart] = useState(0);
    const dispatch = useDispatch();
    const DATA = useSelector((state: any) => state.reducer.data);
        console.log('IN table file *->',DATA);
    const columns = useMemo(()=>COLUMN,[]);
    const data = useMemo(()=>DATA,[DATA]);
    const tableInstance = useTable(
        {
            columns,
            data,
        },useGlobalFilter,usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        setGlobalFilter,
        rows,
    }:any = tableInstance;
        const {globalFilter} = state;

    return (
        <div>
            <div className='global-filter'>
            <GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
            </div>
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map((headerGroup:any)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column:any)=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                        </tr>
                    ))

                    }
                </thead>
                <tbody {...getTableBodyProps}>
                    {rows.map((row:any)=>{
                        prepareRow(row);
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell:any)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })

                                }
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
            <div className='btn-tag'>
            <span>
                Page :{' '}
                <strong>
                    {pageIndex} of {lastPageIndex}
                </strong>
            </span>
            
            <button className='btn btn-primary previous-next-btn' onClick={()=>{
                                const newRange = rangeStart-limit;
                                setRangeStart(newRange);
                                dispatch(fetchData(limit,newRange));
                                setPageIndex(pageIndex-1);
            }} disabled={pageIndex===1} >Previous</button>
            <button className='btn btn-primary previous-next-btn' onClick={()=>{
                const newRange = rangeStart+limit;
                setRangeStart(newRange);
                dispatch(fetchData(limit,newRange));
                setPageIndex(pageIndex+1);
            }} disabled={pageIndex===lastPageIndex}  >Next</button><br />
            <select 
                value={limit} 
                onChange={(e)=>{
                        const value = e.currentTarget.value;
                        setLimit(Number(value));
                        dispatch(fetchData(value,0));
                        setPageIndex(1);setRangeStart(0);                        
                    }}
                className='select-css'>
                {
                     [10,15,20,25].map(pagesize =>(
                         <option key={pagesize} value={pagesize}>
                            Show {pagesize} Row 
                         </option>
                     ))   
                }
            </select>
            </div>
            
        </div>
    )
}

const COLUMN = [
    {
        Header : 'Id',
        accessor:'id'
    },
    {
        Header : 'User Name',
        accessor:'name'
    },
    {
        Header : 'User Email',
        accessor:'email'
    },
    {
        Header : 'Comments',
        accessor:'body'
    },
]

const GlobalFilter = ({filter,setGlobalFilter}:any) => {
    return(
        <span>
            Search : {' '}
            <input value={filter || ''} onChange={(e) => setGlobalFilter(e.target.value)} />
            
        </span>
    )

}