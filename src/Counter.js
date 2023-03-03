import React , { useState }from 'react';



function Counter() {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        console.log('+1');
        // setNumber(number + 1);
        setNumber(preNumber => preNumber + 1);
    }
    const onDecrease = () => {
        console.log('-1');
        // setNumber(number - 1);
        setNumber(preNumber => preNumber -1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default React.memo(Counter);

// 동적인 값을 state라고 한다. 리액트에는 useState라는 함수가 있다. 이것을 사용하면 컴포넌트에서 상태를 관리할 수 있다.
// 함수형으로 파라미터를 넘겨주면 상태값 변경을 배치로 처리한다. 10번째줄 11번째줄 차이