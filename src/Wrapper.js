import React from 'react';


function Wrapper( {children}) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style = {style}>
            {children}
        </div>
    )
}

export default React.memo(Wrapper);

// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을때는 props.children 