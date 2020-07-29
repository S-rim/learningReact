import React from 'react';

const MyComponent = ({name, children}) => {
    return (
    <div>
        <h1>안녕, 이것은 {name}입니다.</h1>
        <p>children 값은 {children}</p>
    </div>
    )
}

MyComponent.defaultProps = {
    name : '기본 이름'
}

export default MyComponent;

