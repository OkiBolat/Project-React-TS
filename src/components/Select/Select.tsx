import React, { useState } from 'react';
import styles from './Select.module.scss';

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const Select: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor='select'>Выбрать поле</label>
            <select id='select' value={selectedValue} onChange={handleChange}>
                <option value={selectedValue}>Выбрать</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {selectedValue && <p>Выбранное поле{selectedValue}</p>}
        </div>
    );
};

export default Select;
