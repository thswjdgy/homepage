const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin(){
    loginBox.innerHTML = `
        <div class="welcome-container">
            <h2>환영합니다! 🎉</h2>
            <div class="user-info">
                <p><strong>${id}</strong> 님</p>
                <p>로그인에 성공하셨습니다</p>
            </div>
            <div class="menu-grid">
                <div class="menu-item">
                    <div class="menu-icon">📊</div>
                    <h3>대시보드</h3>
                    <p>통계 및 현황</p>
                </div>
                <div class="menu-item">
                    <div class="menu-icon">👤</div>
                    <h3>마이페이지</h3>
                    <p>회원정보 관리</p>
                </div>
                <div class="menu-item">
                    <div class="menu-icon">⚙️</div>
                    <h3>설정</h3>
                    <p>환경설정</p>
                </div>
                <div class="menu-item">
                    <div class="menu-icon">📝</div>
                    <h3>공지사항</h3>
                    <p>새로운 소식</p>
                </div>
            </div>
            <button class="btn logout-btn" onclick="logout();">로그아웃</button>
        </div>
    `;
}

function logout() {
    location.reload();
}

window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    loginBox=document.getElementById("login_box");
}