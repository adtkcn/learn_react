var React = require('react');
import ReactDOM from 'react-dom';
import { setInterval } from 'core-js/library/web/timers';

function Xh_1(props){
  function handleClick(e){
    // 阻止默认行为必须e.preventDefault();,e已经做过兼容
    e.preventDefault();
    console.log('click');
  }

  return <a href="https://adtk.cn" onClick={handleClick}>{props.x} </a>;
}
class Xh extends React.Component {
  constructor(props) {
    super(props);//传递 props 到基础构造函数
    // 构造函数是唯一能够初始化 this.state 的地方。
    // 应当使用 setState()更新状态
    this.state = { 
      date: props.date 
    };
    // this.stop = this.stop.bind(this);//给函数绑定this
  }
  componentDidMount() {//组件输出到 DOM 后会执行
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {//组件被从DOM中移除
    clearInterval(this.timerID);
  }
  tick() {//自定义
    this.setState({
      date:Date.now()
    });
  }
  stop(data,e){//e在所有参数后面
    clearInterval(this.timerID);
    // 类的方法默认是不会绑定 this,undefined
    console.log(data);
  }
  render() {

    // <h1 onClick={(e)=>this.stop(e)}>存在性能问题,每次渲染的时候都会创建一个不同的回调函数
    return <h1 onClick={this.stop.bind(this,1)}>
      Hello, {this.state.date}!
      <Xh_1 x={this.state.date}></Xh_1>
      </h1>;
  }
}

ReactDOM.render(
  <div>
    <Xh date="1"></Xh>
    <Xh date="1"></Xh>
    <Xh date="1"></Xh>
  </div>
  ,
  document.getElementById('main')
);