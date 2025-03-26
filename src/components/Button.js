
export const Button = ({className, text, Icon}) =>{

    return (
        <div className={className}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <Icon className="absolute z-10 -top-9 -right-2 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-secondary-default group-hover:text-white transition-colors relative z-10 duration-300" />
            <p className="text-xl font-bold text-secondary-default group-hover:text-white relative z-10 duration-300">{text}</p>
        </div>
    )
}
