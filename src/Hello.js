import React from 'react';

function Hello(props) { // props 하는법
    return <div style={ {color: props.color }}>hi {props.name}</div>
}

Hello.defaultProps = { // props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면..
    name: 'zzzz'
}

export default Hello; // 컴포넌트를 내보내겠다는 의미. 이렇게 해주면 다른 컴포넌트에서도 불러와 사용가능.

// react 컴포넌트 만들때에는 import~ 를 통하여 리액트를 불러와야한다.
// 리액트 컴포넌트에선 XML 형식의 값을 반환해줄 수 있는데 이를 JSX 라고 한다.


