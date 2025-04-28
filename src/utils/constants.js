export const BrowseLeftLogo = 'https://dosmioss.com/admin/img/logo.png';
export const NetflixLogo = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const BrowseRightLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEXRSTlMAFC85CUIhS4NadpOkaPPnxJy2bA4AAAEhSURBVHgBjc5LbgMhEEXRW1+g6bLN/jcbN+pEsTLJmaHLk4p/En0zdf6ySAdwDeVTNkRJtDd1aR9rS9oYHGLzbKMI+WjVK7h49VnYT82kqgS1t4QaJsEtuD6rOYCE0MaUxmZYb5j8PkBGyj28dkk8ns/na0A4NT0AJAEC2tr6foABmPuBOsRax3iuJQR0VACFJNjRrvlAkkRyRz/MvqO+56By6B3Txndsr7UKyZy5oznddMfLYyVGVKYAKdTEIN7h8VgvCOoQ42IcM83v5QtUfDaCS+Bx0txVwwRSKTNJLm7kMQhlM4VeNDZUOM6G2wZ6Tjfh1px5TmXLcQ5S+dGENvvM0tHPWajyixlipWefw5KWfJBmDukgFvzhGqEWpvzPFytwCiPLZUEvAAAAAElFTkSuQmCC';
export const MainBGImage = 'https://img.freepik.com/premium-vector/farmer-horse-plowing-field-sunrise_218660-244.jpg?w=1380';
export const BrowseHeaderImage = 'https://play-lh.googleusercontent.com/dJZpl4Ab_JRW9fRh3AFa4z4pQfqnqN1wmdwmfTvRMfUp8eDNSecTI0OXO_d6RcD7Qzk=w480-h960-rw'
export const AILogo = 'https://cdn.vectorstock.com/i/500p/33/66/artificial-intelligence-icon-sign-logo-vector-49693366.jpg';
export const movieImage = 'https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg';
export const gptImage = 'https://static.vecteezy.com/system/resources/previews/021/495/993/non_2x/chatgpt-openai-logo-icon-free-png.png';

export const getOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTIyYzY2MmY0YTc1YmQ4M2E5YWY2OWNmMGYzNjUyYiIsIm5iZiI6MTc0NDg3NTgzMC44OCwic3ViIjoiNjgwMGIxMzYyYzg1ZTc5NjYzOTk1ZDg2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.utqRzBYMgYzLDUKu0e8LeuKcGVjvRARcQvUJDEKHV94'
  }
  };

  
export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English" },
  {identifier:"hindi", name:"Hindi" },
  {identifier:"telugu", name:"Telugu" },
  {identifier:"hebrew", name:"Hebrew" },
  {identifier:"china", name:"China" },

]


export const language = {
  en : {
    signIn: "Sign In",
    signUp: "Sign up",
    emailId: "Email Address",
    password: "Enter Password",
    cpassword: "Confirm Password",
    username: "Name",
    emailIdorPhone:"Email Address/ Phone Number",
    newtoNetflixmsg:"New to Netflix? Sign up now.",
    alreadyUserMsg:"Already a member. Sign In",
    welcome:"Welcome",
    shopCompare:"Shop Compare",
    movies: "Movies",
    promptMsg:'Enter the prompt here...',
    submit:"Submit"

  },
  telugu: {
    signIn: "సైన్ ఇన్",
    signUp: "సైన్ అప్",
    emailId: "ఇమెయిల్ చిరునామా",
    password: "పాస్వర్డ్ నమోదు చేయండి",
    cpassword: "పాస్వర్డ్ నిర్ధారించండి",
    username: "పేరు",
    emailIdorPhone: "ఇమెయిల్ చిరునామా/ఫోన్ నంబర్",
    newtoNetflixmsg: "నెట్‌ఫ్లిక్స్‌కు కొత్తదా? ఇప్పుడే సైన్ అప్ చేయండి.",
    alreadyUserMsg: "ఇప్పటికే సభ్యుడా? సైన్ ఇన్ చేయండి",
    welcome: "స్వాగతం",
    shopCompare: "షాప్ కంపేర్",
    movies: "మూవీస్",
    promptMsg: "ఇక్కడ ప్రాంప్ట్ నమోదు చేయండి..." ,
    submit: "సబ్మిట్ చేయండి"
  },
  hindi: {
    signIn: "साइन इन करें",
    signUp: "साइन अप करें",
    emailId: "ईमेल पता",
    password: "पासवर्ड दर्ज करें",
    cpassword: "पासवर्ड की पुष्टि करें",
    username: "नाम",
    emailIdorPhone: "ईमेल पता/फोन नंबर",
    newtoNetflixmsg: "नेटफ्लिक्स पर नए हैं? अभी साइन अप करें।",
    alreadyUserMsg: "पहले से सदस्य हैं? साइन इन करें।",
    welcome: "स्वागत है",
    shopCompare: "शॉप कंपेयर",
    movies: "मूवीज़",
    promptMsg: "यहाँ संकेत दर्ज करें..." ,
    submit: "जमा करें"
  },
hebrew:{
  signIn: "התחבר",
  signUp: "הרשמה",
  emailId: "כתובת אימייל",
  password: "הזן סיסמה",
  cpassword: "אשר סיסמה",
  username: "שם",
  emailIdorPhone: "כתובת אימייל/מספר טלפון",
  newtoNetflixmsg: "חדש ב-Netflix? הירשם עכשיו.",
  alreadyUserMsg: "כבר רשום? התחבר",
  welcome: "ברוך הבא",
  shopCompare: "שופ קומפר",
  movies: "מוביז",
  promptMsg: "הזן את ההנחיה כאן...",
  submit: "שלח"
},
china: {
  signIn: "登录",
  signUp: "注册",
  emailId: "电子邮件地址",
  password: "输入密码",
  cpassword: "确认密码",
  username: "姓名",
  emailIdorPhone: "电子邮件地址/电话号码",
  newtoNetflixmsg: "新来 Netflix？立即注册。",
  alreadyUserMsg: "已经是会员？请登录",
  welcome: "欢迎",
  shopCompare: "购物比较 (gòu wù bǐ jiào)", 
  movies: "电影 (diàn yǐng)",
  promptMsg: "在这里输入提示..." ,
  submit: "提交" 
}    
  
}