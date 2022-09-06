import { createApp } from 'vue'
import { createRouter, createWebHistory}from 'vue-router'
import App from './App.vue'

import MovieTitlePage from './components/MovieTitlePage.vue'
import MovieListPage from './components/MovieListPage.vue'

const routes = [
    { name:'home', path: '/', component: MovieTitlePage },
    { 
        path: '/movie', 
        component: MovieListPage,
        children: [
            {name:'title', path: ':movieId?', component: MovieListPage}
        ]
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$movieList = [
    {
        name : '육사오(6/45)',
        premiere : '2022.08.24',
        Genre : '코미디',
        grade : 7.99,
        cast : '고경표, 이이경, 음문석, 박세완, 이순원, 곽동연',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220824_252%2F1661324514413czYBf_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=68&os=18441658&qvt=0&query=%EC%9C%A1%EC%82%AC%EC%98%A4(6%2F45)',
        plot : '우연히 1등 당첨 로또를 주운 말년 병장 ‘천우’. 심장이 터질듯한 설렘도 잠시, 순간의 실수로 바람을 타고 군사분계선을 넘어간 로또. 바사삭 부서진 멘탈을 부여잡고…기필코 다시 찾아야 한다! 우연히 남쪽에서 넘어온 1등 당첨 로또를 주운 북한 병사 ‘용호’. 이거이 남조선 인민의 고혈을 쥐어 짜내는 육사오라는 종이쪼가리란 말인가? 근데 무려 당첨금이 57억이라고?! 당첨금을 눈앞에서 놓칠 위기에 처한 ‘천우’와 북에선 한낱 종이쪼가리일 뿐일 로또를 당첨금으로 바꿔야 하는 ‘용호’. 여기에 예상치 못한 멤버들(?)까지 합류하고 57억을 사수하기 위한 3:3팀이 결성되는데… 주운 자 VS 또 주운 자 아슬아슬 선 넘는 지분 협상이 시작된다!'
    },
    {
        name : '헌트',
        premiere : '2022.08.10',
        Genre : '액션',
        grade : 8.51,
        cast : '이정재, 정우성, 전혜진, 허성태, 고윤정, 김종수',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220805_227%2F1659685387586PIORG_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%ED%97%8C%ED%8A%B8&oquery=%EC%9C%A1%EC%82%AC%EC%98%A4%286%2F45%29&tqi=hxOB3dprvxZsseOWNRZssssstBR-378952&acq=gjsxm&acr=2&qdt=0',
        plot : '[조직 내 숨어든 스파이를 색출하라! ‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는 조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다. 스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자 날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고 조사에 박차를 가한다. 찾아내지 못하면 스파이로 지목이 될 위기의 상황, 서로를 향해 맹렬한 추적을 펼치던 ‘박평호’와 ‘김정도’는 감춰진 실체에 다가서게 되고, 마침내 ‘대한민국 1호 암살 작전’이라는 거대한 사건과 직면하게 되는데…… 하나의 목표, 두 개의 총구 의심과 경계 속 두 남자의 신념을 건 작전이 시작된다'
    },
    {
        name : '한산: 용의 출현',
        premiere : '2022.07.27',
        Genre : '액션',
        grade : 8.58,
        cast : '박해일, 변요한, 안성기, 손현주, 김성규, 김성균',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220727_209%2F1658912961873lVd2W_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%95%9C%EC%82%B0%3A+%EC%9A%A9%EC%9D%98%EC%B6%9C%ED%98%84&oquery=%ED%95%9C%EC%82%B0+%EC%9A%A9%EC%9D%98%EC%B6%9C%ED%98%84&tqi=hxOEcsprvTVsslLBdesssssssqK-309135',
        plot : '1592년 4월, 조선은 임진왜란 발발 후 단 15일 만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다. 조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도 조선을 구하기 위해 전술을 고민하며 출전을 준비한다. 하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고, 거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데… 왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고, 이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.'
    },
    {
        name : '리미트',
        premiere : '2022.08.31',
        Genre : '범죄',
        grade : 7.30,
        cast : '이정현, 문정희, 진서연, 박명훈, 최덕문, 박경혜',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220804_13%2F1659589405941IYFOS_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%A6%AC%EB%AF%B8%ED%8A%B8&oquery=%ED%95%9C%EC%82%B0%3A+%EC%9A%A9%EC%9D%98%EC%B6%9C%ED%98%84&tqi=hxOE4sprvOsssahPQ%2FGssssssBK-295335',
        plot : '아동 연쇄 유괴사건 발생으로 수사를 위해 피해자 엄마 대역을 맡게 된 경찰 ‘소은’(이정현) 사건의 실마리가 잡히지 않아 수사에 난항을 겪고 있는 도중 ‘소은’은 누군가로부터 의문의 전화 한 통을 받는다. 그리고, 수화기 너머 들려오는 익숙한 목소리 범인은 대역이 아닌 ‘소은’과의 협상을 요구하는데… 유괴사건의 골든타임 48시간 타깃이 된 그녀의 강렬한 추격이 시작된다!'
    },
    {
        name : '탑건: 매버릭',
        premiere : '2022.06.22',
        Genre : '액션',
        grade : 9.60,
        cast : '톰 크루즈, 마일즈 텔러, 제니퍼 코넬리, 존 햄',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220509_176%2F1652081912471yhg3N_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%ED%83%91%EA%B1%B4%3A+%EB%A7%A4%EB%B2%84%EB%A6%AD&oquery=%EB%A6%AC%EB%AF%B8%ED%8A%B8&tqi=hxOELsprvN8sscGlcGwssssstys-228208&acq=%ED%83%91%EA%B1%B4%3A+&acr=1&qdt=0',
        plot : '최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…'
    },
    {
        name : '놉',
        premiere : '2022.08.17',
        Genre : '미스터리',
        grade : 7.38,
        cast : '다니엘 칼루야, 케케 파머, 스티븐 연, 마이클 원콧',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220729_1%2F1659070685587fXfeh_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%86%89&oquery=%ED%83%91%EA%B1%B4%3A+%EB%A7%A4%EB%B2%84%EB%A6%AD&tqi=hxOETsprvTVsslhxG2Kssssstqd-502094',
        plot : '거대하고, 주목받길 원하고, 미쳤다. 나쁜 기적이라는 것도 있을까?'
    },
    {
        name : '헤어질 결심',
        premiere : '2022.06.29',
        Genre : '멜로/로맨스',
        grade : 8.95,
        cast : '박해일, 탕 웨이, 이정현, 박용우, 고경표, 김신영',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220607_129%2F16545872892918GA4h_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%97%A4%EC%96%B4%EC%A7%88+%EA%B2%B0%EC%8B%AC&oquery=%EB%86%89&tqi=hxOEjlprvmZss6AmoJwssssstQd-253972',
        plot : "산 정상에서 추락한 한 남자의 변사 사건. 담당 형사 '해준'(박해일)은 사망자의 아내 '서래'(탕웨이)와 마주하게 된다. '산에 가서 안 오면 걱정했어요, 마침내 죽을까 봐.' 남편의 죽음 앞에서 특별한 동요를 보이지 않는 '서래'. 경찰은 보통의 유가족과는 다른 '서래'를 용의선상에 올린다. '해준'은 사건 당일의 알리바이 탐문과 신문, 잠복수사를 통해 '서래'를 알아가면서 그녀에 대한 관심이 점점 커져가는 것을 느낀다. 한편, 좀처럼 속을 짐작하기 어려운 '서래'는 상대가 자신을 의심한다는 것을 알면서도 조금의 망설임도 없이 '해준'을 대하는데…. 진심을 숨기는 용의자 용의자에게 의심과 관심을 동시에 느끼는 형사 그들의 <헤어질 결심>"
    },
    {
        name : '비상선언',
        premiere : '2022.08.03',
        Genre : '드라마',
        grade : 6.48,
        cast : '송강호, 이병헌, 전도연, 김남길, 임시완, 김소진',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220718_224%2F1658121739465fgRof_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%B9%84%EC%83%81%EC%84%A0%EC%96%B8&oquery=%ED%97%A4%EC%96%B4%EC%A7%88+%EA%B2%B0%EC%8B%AC&tqi=hxOEPsprvh8ssETxlmlssssstaZ-443606',
        plot : '베테랑 형사 팀장 인호(송강호)는 비행기 테러 예고 영상 제보를 받고 사건을 수사하던 중 용의자가 실제로 KI501 항공편에 타고 있음을 파악한다. 딸의 치료를 위해 비행 공포증임에도 불구하고 하와이로 떠나기로 한 재혁(이병헌)은 주변을 맴돌며 위협적인 말을 하는 낯선 이가 신경 쓰인다. 인천에서 하와이로 이륙한 KI501 항공편에서 원인불명의 사망자가 나오고, 비행기 안은 물론 지상까지 혼란과 두려움의 현장으로 뒤바뀐다. 이 소식을 들은 국토부 장관 숙희(전도연)는 대테러센터를 구성하고 비행기를 착륙시킬 방법을 찾기 위해 긴급회의를 소집하는데…'
    },
    {
        name : '시맨틱 에러: 더 무비',
        premiere : '2022.08.31',
        Genre : '멜로/로맨스',
        grade : 9.65,
        cast : '박서함, 박재찬, 송지오, 김노진, 김원기, 최수견',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220727_288%2F1658911236576PrgKi_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EC%8B%9C%EB%A7%A8%ED%8B%B1+%EC%97%90%EB%9F%AC%3A+%EB%8D%94+%EB%AC%B4%EB%B9%84&oquery=%EB%B9%84%EC%83%81%EC%84%A0%EC%96%B8&tqi=hxOEBlprvh8ssEnjtCdssssssiN-186854&acq=%EC%8B%9C%EB%A7%A8%ED%8B%B1+%EC%97%90%EB%9F%AC%3A+%EB%8D%94+%EB%AC%B4%EB%B9%84&acr=1&qdt=0',
        plot : "컴공과 '아싸' 추상우의 완벽하게 짜인 일상에 에러처럼 나타난 안하무인 디자인과 '인싸' 장재영, 극과 극 청춘들의 캠퍼스 로맨스가 스크린으로 펼쳐진다!"
    },
    {
        name : '모가디슈',
        premiere : '2021.07.28',
        Genre : '액션',
        grade : 8.67,
        cast : '김윤석, 조인성, 허준호, 구교환, 김소진, 정만식',
        img : 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20210820_122%2F1629448997924YXUCv_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
        src : 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%AA%A8%EA%B0%80%EB%94%94%EC%8A%88&oquery=%EC%8B%9C%EB%A7%A8%ED%8B%B1+%EC%97%90%EB%9F%AC%3A+%EB%8D%94+%EB%AC%B4%EB%B9%84&tqi=hxOEqdprvmsssK%2B22JKssssstAZ-409133',
        plot : '내전으로 고립된 낯선 도시, 모가디슈 지금부터 우리의 목표는 오로지 생존이다! 대한민국이 UN가입을 위해 동분서주하던 시기 1991년 소말리아의 수도 모가디슈에서는 일촉즉발의 내전이 일어난다. 통신마저 끊긴 그 곳에 고립된 대한민국 대사관의 직원과 가족들은 총알과 포탄이 빗발치는 가운데, 살아남기 위해 하루하루를 버텨낸다. 그러던 어느 날 밤, 북한 대사관의 일행들이 도움을 요청하며 문을 두드리는데… 목표는 하나, 모가디슈에서 탈출해야 한다!'
    },
]