type InputProps = {
    placeholder?: string
    type: string
    icon?: React.ReactNode
    label?: string
    iconColor?: string
}

export default function Input({ placeholder, type, icon, iconColor, label }: InputProps) {

    return (
        <div className="">
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-white dark:text-white">{label}</label>
            <div className="relative mb-4 shadow">
                <div className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ${iconColor ? `text-${iconColor}` : ''}`}>
                    {icon}
                </div>
                <input
                 type={type} 
                 required
                 id="input-group-1"
                 className="bg-gray-500 border border-gray-500 text-gray-100 text-sm active:border-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-700 block w-full ps-12 p-6"
                 placeholder={placeholder}/>
            </div>
        </div>
    )
}
