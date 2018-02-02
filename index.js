var React = require('react');
import ReactDOM from 'react-dom';

function Welcome(props) {
    // props.name=1;
    return <h2>Hello, {props.name}</h2>;
}
function Welcome1(props) {
    return <div>
        <Welcome name={props.name.x}></Welcome>
        <Welcome name={props.name.h}></Welcome>
    </div>;
}

// 组件名称必须以大写字母开头
// 组件的返回值只能有一个根元素
ReactDOM.render(
    <Welcome1 name={{ x: 'x', h: 'h' }}></Welcome1>
    ,
    document.getElementById('main')
);

ReactDOM.render(
    <h2 className="a1">
        <a href="./main.html">main</a>
    </h2>,
    document.getElementById('main2')
);