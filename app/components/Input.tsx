type Props = { label: string, type: string, name: string }
const Input = ({ label, type, name }: Props) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                type={type}
                id={name}
                name={name}
                required
            />
        </div>
    )
}
export default Input