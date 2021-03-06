import React from 'react'
import { Button as AntdButton, ButtonProps} from 'antd';
interface Props extends ButtonProps {
    placement?: string;
    variant: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({variant, ...props}: Props) => {

    const getButtonStyle = () => {
        switch(variant) {
            case 'primary':
                return 'text-white bg-black';
            case 'secondary':
                return 'text-black border-black bg-white'
            case 'tertiary':
                return 'border-white bg-transparent text-white';
        }
    }
    return (
        <AntdButton {...props} className={`${getButtonStyle()} rounded ${props.className}`} />
    )
}

export default Button
