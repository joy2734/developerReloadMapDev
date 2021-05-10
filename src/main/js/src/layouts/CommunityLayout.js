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
    const [comment, setComment] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const commentsPerPage = 10
    const pageVisited = pageNumber * commentsPerPage; //???
    const pageTotalNum = comment.length;
    
    useEffect(()=>{
        fetch('http://localhost:8080/list')
        .then(resp => { return resp.json() })
        .then(resp => setComment(resp))
      }, []);

    const commentsPage = comment.slice(pageVisited, pageVisited + commentsPerPage)
    .map((comment)=>{
        return (
            <TableRow key={comment.commuNum}>
                <TableCell component="th" scope="row">
                    {comment.title}
                </TableCell>
                <TableCell align="right">{comment.content}</TableCell>
                <TableCell align="right">{comment.contype}</TableCell>
                <TableCell align="right">{comment.writer}</TableCell>
                <TableCell align="right">{comment.regDate}</TableCell>
                <TableCell align="right">{comment.modifyDate}</TableCell>
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
                        <TableCell>제목</TableCell>
                        <TableCell align="right">내용</TableCell>
                        <TableCell align="right">타입</TableCell>
                        <TableCell align="right">작성자</TableCell>
                        <TableCell align="right">등록일</TableCell>
                        <TableCell align="right">수정일</TableCell>
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