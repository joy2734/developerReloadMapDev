//electron app config
const {
    app,
    BrowserWindow,
    Menu,
    MenuItem,
    Tray,
    Notification
} = require('electron');
const { is, setContentSecurityPolicy } = require('electron-util');
const config = require('./config');

//가비치 콜렉션 피하기 위해 윈도우 변수 선언
let window;

function createWindow() {
    window = new BrowserWindow({
        width: 900,
        height: 800,
        webPreferences:{
            nodeIntegration: false //false 시 외부사이트에서 접근시 발생 위험을 피한다.
        }
    });

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
        //Html 파일 불러오기
        //빌드시사용
        //window.loadURL(config.PRODUCTION_WEB_URL);
    }
    //파일띄우기
    window.loadFile('./public/index.html');

    showNotification();

    tray = new Tray('C:\\springtool\\sts-4.9.0.RELEASE\\workspace\\DevMapProject\\src\\main\\js\\src\\assets\\images\\sprayTalk.png')
    const contextMenu = Menu.buildFromTemplate([
        {label: "version", click: function(){ console.log("1111") }},
        {label: "acknow"},
        {label: "Item3"},
        {label: "종료", click: function(){ app.quit() }},
    ])

    tray.setToolTip("tooltip");
    tray.setContextMenu(contextMenu);

    window.on('show', () => {
        tray.setHighlightMode('always')
    });

    window.on('hide', () => {
        tray.setHighlightMode('never')
    });

    //윈도우 닫히면 윈도우 객체 초기화
    window.on('closed', ()=>{
        window = null;
    });
}

// custom menu
// window 창 상단 메뉴설정

const menu = new Menu()
menu.append(new MenuItem({
  label: 'Electron',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('Electron rocks!') }
  }]
}))

Menu.setApplicationMenu(menu)

// Notification 설정
function showNotification () {
    const notification = {
      title: 'DevMap Application',
      body: 'DevMap Application 실행되었습니다.'
    }
    new Notification(notification).show()
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

app.setUserTasks([]);
//일렉트론이 준비되면 app 윈도우 생성
app.on('ready', createWindow);