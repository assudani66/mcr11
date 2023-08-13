import React from 'react'

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = ({ children, className, ...props }: buttonProps) => {
    return (
        <button className={`bg-slate-800 text-white px-4 py-2 rounded  ${className}`} {...props}>{children}</button>
    )
}

export default Button