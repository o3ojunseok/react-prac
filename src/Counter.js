import React , {  useReducer }from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}


function Counter() {
    // const [number, setNumber] = useState(0)
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        console.log('+1');
        // setNumber(number + 1);
        // setNumber(preNumber => preNumber + 1);
        dispatch({ type: 'INCREMENT'})
    }
    const onDecrease = () => {
        console.log('-1');
        // setNumber(number - 1);
        // setNumber(preNumber => preNumber -1);
        dispatch({ type: 'DECREMENT'})

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


// useReducer -> 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
// 상태업데이트 로직을 컴포넌트 바깥에 작성할 수도 있고, 다른 파일 작성 후 불러와서 사용도 가능.
// reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수.
// useState vs useReducer
// 컴포넌트에서 관리하는 값이 딱 하나고, 그 값이 단순한 숫자, 문자열 또는 boolean 값이라면 useState
// 하지만 컴포넌트에서 관리하는 값이 여러개가 되어 상태의 구조가 복잡해진다면, useReducer로 관리하는게 편해질 수 있다. 



// useState -> useReducer로 변환
// reducer 함수에서 새로운 상태를 업데이트 할 때에는 불변성을 지켜줘야하기 떄문에 spread...


// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     });
//   }, []);

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;
