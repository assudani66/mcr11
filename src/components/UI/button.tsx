import React from 'react'

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = ({ children, className }: buttonProps) => {
    return (
        <button className={`bg-slate-800 text-white px-4 py-2 rounded  ${className}`}>{children}</button>
    )
}

export default Button