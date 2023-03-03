import React, { useState, useRef } from 'react'


function InputSample2() {
    const [inputs, setInputs] = useState( {
        name: '',
        nickname: '',
    });

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

    const nameInput = useRef(); // ref사용

    const onChange = e => {
        const {value, name} = e.target; // 우선 e.target에서 name과 value 추출
        setInputs({
            ...inputs, // 기존 input 객체 복사한뒤
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();

    };

    return (
        <div>
            <input name="name" placeholder='name' onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickname" placeholder='nickname' onChange={onChange} value={nickname}></input>
            <button onClick={onReset}>reset</button>
            <div>
                <b>value: </b>
                {name} ({nickname})
            </div>
        </div>

    );
}

export default React.memo(InputSample2);

// input 의 개수가 여러개가 됐을때는 , 단순히 useState를 여러번 사용하고 onChange도 여러개 만들어서 구현할 수 있다.
// 더 좋은 방법은 input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는것이다.
// useState에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 한다.

// 리액트 상태에서 객체를 수정해야할 때에는 직접 수정하면 안된다. 대신에 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용해야한다.(spread문법 사용)


// 불변성을 지켜줘야만 리액트 컴포넌트에서 상태가 업데이트가 됐을을 감지하고 이에 따라 필요한 리렌더링이 진행된다.

// 추가적으로 불변성을 지켜줘야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있다.


// useRef
// 리액트를 사용하는 프로젝트에서도 가끔 DOM 을 직접 선택해야하는 상황이 발생할 때가 존재한다. 그럴때 ref 사용
// 함수형 컴포넌트에서 ref를 사용할 때에는 useRef 라는 Hook함수를 사용한다.
// 클래스형 컴포넌트에서는 콜백함수를 사용하거나 React.createRef라는 함수를 사용한다.


// reset버튼 누르면 포커스가 초기화 버튼에 그대로 남는다. 한번 초기화를 누르면 input에 포커스가 잡히도록 useRef 사용

// useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 선택하고 싶은 DOM에 ref 값으로 설정해줘야 한다. 
// 그러면 Ref 객체의 .current 값은 원하는 DOM을 가르키게 된다.