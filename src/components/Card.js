"use client"

const Card = (props) =>{
    return (
        <div className="w-full h-full bg-secondary-foreground flex-col gap-y-3 ">
            {props.children}
        </div>
    )
}

export default Card;