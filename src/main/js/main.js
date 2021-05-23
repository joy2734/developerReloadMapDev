//electron app config
const {app, BrowserWindow} = require('electron');
const { is, setContentSecurityPolicy } = require('electron-util');
const config = require('./config');

//가비치 콜렉션 피하기 위해 윈도우 변수 선언
let window;

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: false //false 시 외부사이트에서 접근시 발생 위험을 피한다.
        }
    });

    //Html 파일 불러오기
    //빌드시사용
    //window.loadFile('./public/index.html');

    //개발자도구여는 옵션.
    if(is.development){
        //node 서버 + webpack dev 다음 구동
        window.webContents.openDevTools();
        window.loadURL(config.LOCAL_WEB_URL);
    }else{
        setContentSecurityPolicy(`
        default-src 'none';
        script-src 'self';
        img-src 'self' https://www.gravator.com;
        style-src 'self' 'unsafe-inline';
        font-src 'self';
        connect-src 'self' ${config.PRODUCTION_WEB_URL};
        base-uri 'none';
        form-action 'none';
        frame-ancestors 'none';
        `);
        window.loadURL(config.PRODUCTION_WEB_URL);
    }

    //윈도우 닫히면 윈도우 객체 초기화
    window.on('closed', ()=>{
        window = null;
    });

}

//Mac OS
//모든 윈도우가 닫혀 있으면 나가기
app.on('window-all-closed', ()=>{
    // 맥OS의 경우 사용자가 명시적으로 애플리케이션을 나가면 종료
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', ()=>{
    // 맥OS의 경우 독(dock)에서 아이콘을 클릭하면 윈도우 재생성
    if(window === null)
        createWindow();
});

//일렉트론이 준비되면 app 윈도우 생성
app.on('ready', createWindow);