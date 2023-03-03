import React, { useEffect } from 'react';


function User ({user, onRemove, onToggle}) {
    useEffect (() => {
        console.log('on')
        console.log(user)
        // return () => {
        //     console.log('off')
        //     console.log(user)
        // }
    }, [user])
    return (
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(user.id)}
            >{user.username}</b>&nbsp;
            <span>({user.email})</span>
            <button onClick={ ()=> {
                onRemove(user.id)
            }}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {/* <div>
                <b>{users[0].username}</b>
                <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>({users[2].email})</span>
            </div> */}
            {users.map( (user) => {
              return  <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            })}
        </div>
    )
}

export default React.memo(UserList);

// 배열이 고정적이라면 상관없지만, 배열의 인덱스를 하나하나 조회해가면서 렌더링 하는 방법은 동적인 배열을 렌더링하지 못ㅎ나다.
// 동적인 배열을 렌더링해야할 떄는 JS 내장 함수 map()사용하자

// 리액트에서 배열을 렌더링 할때에는 key라는 props를 설정해야한다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정!!
// 만약 고유한 값이 없으면 map 함수를 사용 할때 설정하는 두번째 파라미터 index를 key로 사용하자

// 배열을 렌더링 할 때는 고유한 key 값이 있는것이 중요하며, 배열안에 중복되는 key가 있을 때에는 렌더링시 오류메세지가 나올거다.물론 업데이트도 안될거


// useEffect라는 Hook을 사용하여 컴포넌트가 마운트 됐을때, 언마운트 됐을 때, 업데이트 될때(특정 props가 바뀔떄) 특정 작업을 처리
// 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps) 넣는다.
// 배열을 비우게 되면, 컴포넌트가 처음 나타날 때에만 useEffect에 등록한 함수가 호출된다.
// useEffect에서는 함수를 변환할 수 있는데 이를 cleanup함수 라고 부른다. useEffect에 대한 뒷정리. deps가 비어있는 경우 컴포넌트가 사라질 때 호출
// useEffect 안에서 사용하는 상태나 props가 있다면, useEffectdml deps에 넣어줘야 한다. 
// 만약, useEffect 안에서 사용하는 상태나 props를 넣지않으면, useEffect에 등록한 함수가 실행 될 때 props/ 상태를 가리키지 않게 된다.

// 마운트 시에 하는 작업들
// props로 받은 값을 컴포넌트의 로컬 상태로 설정
// 외부 API 요청
// 라이브러리 사용
// setInterval 을 통한 반복작업 혹은 setTimeout을 통한 작업 예약

// 언마운트 시에 하는 작업
// setInterval, setTimeout을 사용하여 등록한 작업들 clear하기 (clearInterval, clearTimeout)
// 라이브러리 인스턴스 제거


// useEffect 안에서 사용하는 상태나 ,props가 있다면 useEffectdml deps에 넣어줘야한다. 그렇지 않으면 최신 props/상태를 가리키지 않는다.


