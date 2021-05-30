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
import Button from '@material-ui/core/Button';
import {conTypeMap} from '../../variables/formatter';
import { useSelector, useDispatch } from "react-redux";
import {initCommuAction, changePageAction, loadCommuAction } from '../../store/actions/RoadMapAction';
import CommnunitySearch from './CommnunitySearch';
import {postsAction, getPosts} from '../../modules/post';

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
    paging:{
        display:'flex',
        alignItems: 'center'
    },
    pager:{
        margin: '10px auto'
    },
    field:{
        width: '100px',
        margin: '10px'
    },
    searchForm:{
        display: 'flex',
        justifyContent: 'center'
    },
    button:{
        width: '100px',
        height: '30px'
    }
}));


const CommnunityRead = ({
    mode
}) =>{
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(0);
    //const [comments, setComments] = useState([]);
    //const posts = useSelector(state => state)
    const commentPerPage = 10
    const pageVisited = pageNumber * commentPerPage; //???
    useEffect(() =>{
        dispatch(postsAction(getPosts))
    },[]);

    //console.log(comments.posts)
    // useEffect(()=>{
    //     fetch(getContextPath() + 'list')
    //     .then(resp => { return resp.json() })
    //     .then(resp => {
    //         dispatch(initCommuAction(resp));
    //     })
    //   }, []);

    // const loadComment = (commId) =>{
    //     dispatch(changePageAction('read'))
    //     dispatch(loadCommuAction(commId))
    // };

    const comments = posts.posts.data || [];
    console.log(comments)
    
    const commentPage = comments.slice(pageVisited, pageVisited + commentPerPage)
    .map((comment)=>{
        return (
            <TableRow key={comment.commuNum}>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} component="th" scope="row">
                    {comment.title}
                </TableCell>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} align="center">{comment.content}</TableCell>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} align="center">{conTypeMap[comment.contype]}</TableCell>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} align="center">{comment.writer}</TableCell>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} align="center">{comment.regDate}</TableCell>
                <TableCell onDoubleClick={()=> loadComment(comment.commuNum)} align="center">{comment.modifyDate}</TableCell>
            </TableRow>
        )
    });

    const pageCount = Math.ceil(comments.length / commentPerPage);

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
                        <TableCell align="center">내용</TableCell>
                        <TableCell align="center">타입</TableCell>
                        <TableCell align="center">작성자</TableCell>
                        <TableCell align="center">등록일</TableCell>
                        <TableCell align="center">수정일</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {comments ? commentPage : <div></div>}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.paging}>
                <Pagination className={classes.pager} 
                    defaultPage={1} 
                    count={pageCount || 0}
                    variant="outlined" color="primary"
                    onChange={changePage}
                />
                <Button className={classes.button} onClick={()=> dispatch(changePageAction('create'))} variant="contained" color="primary">등록</Button>
            </div>
            <CommnunitySearch/>
        </div>
    )
}

export default CommnunityRead;