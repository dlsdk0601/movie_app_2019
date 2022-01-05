import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />  
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  );
}//Route는 두가지 prop을 가진다. 하나는 보여줄 스크린 값을, 하나는 실행하는 명령./ 내가 path로 가면 About이라는 component를 보여줘.
//url뒤에/about으로 끝나면 두 컴포넌트 같이 랜더링 한다. exact={true} 이걸 쓰면 url 끝에 /만 있을때 실행하겠다는 의미
//네비게이션은 라우터 안에서만 작동함. 컴포넌트를 hashrouter 밖에 놔두면 작동 안함

export default App;