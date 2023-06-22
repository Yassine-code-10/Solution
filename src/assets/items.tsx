import { v4 as uuidv4 } from 'uuid';

export enum InputType {TEXT = 'text', LIST = 'list', CHECKBOX = 'checkbox'};

export const sides= ['left', 'right']

export const inputs = [
    {
        id: uuidv4(),
        type: InputType.TEXT,
        value: '',
        side: 'left'
    },
    {
        id: uuidv4(),
        type: InputType.LIST,
        value: '',
        side: 'right'
    },
    {
        id: uuidv4(),
        type: InputType.CHECKBOX,
        checked: false,
        side: 'left'
    },
    {
        id: uuidv4(),
        type: InputType.TEXT,
        value: '',
        side: 'right'
    },
    {
        id: uuidv4(),
        type: InputType.CHECKBOX,
        checked: false,
        side: 'left'
    },
    {
        id: uuidv4(),
        type: InputType.LIST,
        value: '',
        side: 'right'
    },
];