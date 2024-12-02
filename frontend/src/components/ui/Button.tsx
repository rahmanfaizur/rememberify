import { ReactElement } from "react";

type Variants = "primary" | "secondary"
interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement; //react element means a react component!
    endIcon?: ReactElement;
    onClick: () => void;
 
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm": "py-1 px-2 font-light",
    "md": "py-2 px-4 font-light",
    "lg": "py-4 px-6"
}

const defaultStyles = "rounded-md flex"
export const Button = (props: ButtonProps) => {
    //props.variant, props.onClick....
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        <div className="flex">
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon}
        </div>
    </button>
}