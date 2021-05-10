import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import testJson from '../../public/data/comList.json'

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        justifyContent: 'center',
        flexDirection:'column',
        borderTop: '1px solid #eaeaea',
        margin: '10px 200px'
    },
    grid: {
        minWidth: 650
    },
    pager:{
        margin: '10px auto'
    }
}));


const CommunityLayout = ({

}) =>{
    const classes = useStyles();
    const [comment, setComment] = useState(testJson);
    const [pageNumber, setPageNumber] = useState(0);

    const commentsPerPage = 10
    const pageVisited = pageNumber * commentsPerPage; //???
    const pageTotalNum = comment.length;
    
    const commentsPage = comment.slice(pageVisited, pageVisited + commentsPerPage)
    .map((comment)=>{
        return (
            <TableRow key={comment.id}>
                <TableCell component="th" scope="row">
                    {comment.name}
                </TableCell>
                <TableCell align="right">{comment.surname}</TableCell>
                <TableCell align="right">{comment.birthYear}</TableCell>
                <TableCell align="right">{comment.birthCity}</TableCell>
            </TableRow>
        )
    });

    const pageCount = Math.ceil(comment.length / commentsPerPage);

    const changePage = (evt, pageNum) => {
        setPageNumber(pageNum-1)
    };

    return(
        <div className={classes.container}>
            <TableContainer component={Paper}>
                <Table className={classes.grid} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>이름</TableCell>
                        <TableCell align="right">내용</TableCell>
                        <TableCell align="right">출생년도</TableCell>
                        <TableCell align="right">출생도시</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {commentsPage}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination className={classes.pager} 
                defaultPage={1} 
                count={pageTotalNum} 
                count={pageCount}
                variant="outlined" color="primary"
                onChange={changePage}
            />
        </div>
    )
}

export default CommunityLayout;