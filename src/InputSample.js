import React ,{ useState }from 'react';



function InputSample() {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value)
    }

    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>reset</button>
            <div>
                <b>value: {text} </b>
            </div>
        </div>
    );
}

export default React.memo(InputSample);

// input에 입력하는 값이 하단에 나오고, 초기화 버튼을 누르면 input 값이 비워지도록함.
// useSate를 사용하여 input에 onChange 이벤트아용
// 이벤트에 등록하는 함수에서 이벤트 객체 e 를 파라미터로 받아와서 사용할 수 있는데 이 객체의 e.tartget은 이벤트가 발생한 DOM인 input DOM을 가리킨다.
// 이 DOM의 value 값, 즉 e.target.value를 조회하면 현재 input에 입력한 값을 확인 가능하다.


// input을 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요 그래야만 상태가 바뀌었을때 input의 내용도 업데이트된다.
