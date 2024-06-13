const Button = ({ children, width = "100%", type }: { children: React.ReactNode, width?: string, type: string }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200" style={{ width }} type={type as any}>{children}</button>
    )
}
export default Button