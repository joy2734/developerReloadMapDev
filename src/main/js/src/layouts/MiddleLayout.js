import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeReviewCard from '../components/Card/RecipeReviewCard';
import frontPage from "../assets/images/frontPage.png"
import backendPage from "../assets/images/backendPage.png"
import devOpPage from "../assets/images/devOpPage.png";
import ReactPage from "../assets/images/ReactPage.png";
import VuePage from "../assets/images/VuePage.png";
import AndroidPage from "../assets/images/AndroidPage.png";

const useStyles = makeStyles((theme) => ({
    detailInfo:{
        borderTop: '1px solid #eaeaea',
        backgroundColor: '#eae7e7',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailInfoWrap:{
        maxWidth: '980px'
    }
}));


const MiddleLayout = ({

}) =>{
    const classes = useStyles();
    const [contents, setContent] = useState({});

    useEffect(()=>{
        fetch(getContextPath()+'../../data/contentList.json')
        .then(resp => { return resp.json() })
        .then(resp => {
           setContent(resp)
        })
    }, []);

    return (
        <div>
            <div className={classes.detailInfo}>
                <div className={classes.detailInfoWrap} >
                    <RecipeReviewCard className={classes.front} title="FrontEnd" image={frontPage} content={contents.frontend}>
                        사용자(user)의 화면에 나타나는 웹 화면을 프론트엔드(Front-End) 영역.<br/><br/>
                    </RecipeReviewCard>
                    <RecipeReviewCard title="BackEnd" image={backendPage} color='#6c93f5' content={contents.backend}>
                        백엔드(Back-End)는 눈에 보이지 않는 서버에서 작용하는 영역.<br/><br/>
                    </RecipeReviewCard>
                    <RecipeReviewCard title="DevOp" image={devOpPage} color="#02d35f" content={contents.devOp}>
                        DevOp는 애플리케이션과 서비스를 빠른 속도로 제공할 수 있도록 조직의 역량을 향상시키는 문화철학, 방식 및 조합입니다. 
                    </RecipeReviewCard>
                    <RecipeReviewCard title="React" image={ReactPage} color="#7ddfff" content={contents.react} >
                        사용자 인터페이스를 만들기 위한 JavaScript 라이브러리.<br/><br/><br/>
                    </RecipeReviewCard>
                    <RecipeReviewCard title="Vue" image={VuePage}  color="#673ab7" content={contents.vue} >
                        Vue(/vjuː/ 로 발음, view 와 발음이 같습니다.)는 사용자 인터페이스를 만들기 위한 프로그레시브 프레임워크 입니다.<br/><br/>
                    </RecipeReviewCard>
                    <RecipeReviewCard title="Android" image={AndroidPage} color="#ff7d98" content={contents.android}>
                        안드로이드는 구글에 의해 개발되고 있으며 최신 변경사항과 업데이트가 출시되는 소스 코드는 안드로이드 오픈 소스 프로젝트에서 이용이 가능하다
                    </RecipeReviewCard>
                </div>
            </div>
        </div>
    )
}


export default MiddleLayout;