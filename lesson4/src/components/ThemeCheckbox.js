import { useState } from "react";

export const ThemeCheckbox = ({name}) => {
    const [checked, setChecked] = useState(false);

    const onChange = (event) => {
        setChecked(event.target.checked);
        if(event.target.checked) {
            document.querySelector(':root').style.setProperty('--background', '#000');
            document.querySelector(':root').style.setProperty('--text-color', '#FFF');
            document.querySelector(':root').style.setProperty('--h1-color', 'magenta');
        } else {
            document.querySelector(':root').style.setProperty('--background', '#FFF');
            document.querySelector(':root').style.setProperty('--text-color', '#000');
            document.querySelector(':root').style.setProperty('--h1-color', 'red');
        }
    }

    return (
        <div>
            <input type='checkbox' checked={checked} onChange={onChange} />: Enable dark mode
            <br />
            Hey, {name} the theme is: {checked ? 'dark' : 'light'}
        </div>
    );
}