function Button({children, className}) {
    return (
        <button type="submit" className={`bg-red-500 px-10 py-3 text-white rounded capitalize ${className}`}>{children}</button>
    )
}

export default Button
