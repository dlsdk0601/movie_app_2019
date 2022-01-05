import React from "react";
// import PropTypes from "prop-types"; //속성값이 맞는지 확인하는 거, 노드로 npm i prop-types라고 쳐서 다운 받아야함
//노드로 다운 했는데 계속 오류뜸, 뭔가 이상함
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";



class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {  //async = 자바스크립트에게 이 함수는 비동기라고 선언하는 것임
        const {
        data: { 
            data: {movies}
        }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //await 스크립트가 뭘 기다릴까 라는 질문에 await 뒤에 axios가 다 될때 까지 기다리라는 의미
        this.setState({movies, isLoading: false})    //movies(state안의 movies):movies(가져온 API안의 movies)
    }
    componentDidMount(){
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;  //스크립트처럼 변수에 대입
        return (
        <section className="container">
            {isLoading 
            ? (
                <div className="loader">
                <span className="loader__text">Loading...</span>
                </div>
            ) : (
            <div className="movies">
                {movies.map(movie => (
                    <Movie 
                    key={movie.id} // 경고창에 유일한 키를 가져야 한다고 나와서, 키를 입력한다. 우리는 json파일에서 아이디를 알수 있으니 아이디를 넣는다 
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                ))}
            </div>
            )}
        </section>
        );
    }
}


export default Home;




















// class App extends React.Component{ App 이름은 밑에 export default App에서 App이랑 똑같이 
  // state = {
  //   count: 0
  // };  state는 object이고 component안에 data을 넣을 공간, 이 data는 계속 변한다
  // plus = () => {
  //   this.setState(current => ({count: current.count + 1}));  //minus함수안에 적은것 보다 이게 더 깔끔
  // };
  // minus = () => {
  //   this.setState({count: this.state.count - 1});
  // };
  // render(){
  //   return (
  //     <div>
  //       <h2>The number is: {this.state.count}</h2> 
  //       <button onClick={this.plus}>plus</button>
  //       <button onClick={this.minus}>minus</button>
  //     </div>
  //     );
  // }

  //클래스 리액트는 return을 가지지 않는다. 
  //함수가 아니라 클래스라서.
  //그래서 Calss는 render 메소드를 가지고있다

  //componentDidMount(){}  컴포넌트가 랜더링 한 후 실행
  //componentDidUpdate(){} 컴포넌트가 업데이트(지금은 애드나 마이너스 버튼 클릭시)되면 실행
  //componentWillUnmount(){} 컴포넌트가 삭제되면(예를 들어 다른 페이지로 넘어갈때) 실행
// }










//음식 예제 
// function Food({name, where, rating}){
//   return <div>
//     <h2>I like {name}</h2>
//     <h4>{rating} / 5</h4>
//     <h2>That's from {where}</h2>
//   </div>
// }

// Food.propTypes = {  //확인하고 싶은 prop이 있는 오브젝트.propTypes <=얘는 무조건 propsTypes라고 적어야함
//   name: PropTypes.string.isRequired,
//   where: PropTypes.string.isRequired,
//   rating: PropTypes.number
//   //이런식으로 적어서 해당 porp가 맞는지 확인한다. 콘솔창에 오류 뜨면 prop이 잘못된거 
// };

// const foodILik = [
//   {
//     name: "kimchi", from: "korea", rating: 5
//   },
//   {
//     name: "ramen", from: "japan", rating: 4.9
//   },
//   {
//     name: "samgyeobsal", from: "america", rating: 4.8
//   },
//   {
//     name: "chukumi", from: "korea", rating: 4.7
//   }
// ];

// function App() {
//   return (
//     <div> 
//       {foodILik.map(dish => (
//       <Food 
//         key={dish.id} 
//         name={dish.name} 
//         where={dish.from} 
//         rating={dish.rating} 
//       />
//       ))}
//     </div>
//     );
// }


