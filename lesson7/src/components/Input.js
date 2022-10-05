export default function Input({value, onChange, label}) {
    return (
        <label>
            {label}
            <input  type="number" value={value} onChange={(event) => onChange(event.target.value)}/>
        </label>
    );
}