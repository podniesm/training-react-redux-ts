import * as React from "react";
import {FormEventHandler} from "react";

export interface ISelectInputOption {
    value: string;
    text: string;
}

interface ISelectInputProps {
    name: string;
    label: string;
    onChange: FormEventHandler,
    defaultOption: string;
    value: string,
    options: ISelectInputOption[]
    error?: string
}

const SelectInput: React.StatelessComponent<ISelectInputProps> =
    ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {
                        options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default SelectInput;