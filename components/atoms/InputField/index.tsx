import { FC, forwardRef } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";
import HeadText from "../HeaderText";

interface Iprops {
    name: string;
    width?: number;
    value?: string | number;
    labelText?: string;
    onChange?: (e?: any) => void;
    onWheel?: () => void;
    className?: string;
    type: "text" | "password" | "email" | "tel" | "number";
    status?: "success" | "error" | "warning";
    state?: string;
    req?: boolean;
    placeholder: string
}

type Ref = HTMLInputElement | any;

const InputField: FC<Iprops> = forwardRef<Ref, Iprops>((
    {
        name, value, labelText, onChange, onWheel, className, req, type, status, state, placeholder, width
    }, ref) => {
    return (
        <div className={clsx(styles.input)}>
            {labelText && (
                <label htmlFor={name} className={clsx(styles.input_label)}>
                    {labelText}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={name}
                style={{ width: `${width}%` }}
                ref={ref}
                value={value}
                className={clsx(
                    className,
                    state === "success"
                        ? styles.input_success
                        : state === "error"
                            ? styles.input_error
                            : state === "warning"
                                ? styles.input_warning
                                : "",
                    styles.input_field
                )}
                placeholder={placeholder}
                onChange={onChange}
                onWheel={onWheel}
                required={req}
            />
            {status && (
                <HeadText
                    level={5}
                    children={status}
                    className={clsx(styles.input_status)}
                />
            )}
        </div>
    )
})

export default InputField;