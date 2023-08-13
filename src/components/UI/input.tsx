import React from 'react'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextInput = ({ className }: inputProps) => {
    return <input className={`bg-white border text-white px-4 py-2  ${className}`} />

}

export default TextInput