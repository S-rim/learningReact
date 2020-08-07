import React from 'react';
import'./TodoListItem.scss'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from 'react-icons/md';

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className="TodoListItem">
            <div className="cn('checkbox', {checked})}">
                {checked ? <MdCheckBox></MdCheckBox> : <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};

export default TodoListItem;