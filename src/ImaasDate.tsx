import { useState } from "react";
import dayjs from 'dayjs';
import './Eot.css';
import { FaRegFloppyDisk } from 'react-icons/fa6';

interface IProps
{
    systemDate: dayjs.Dayjs;
}

function ImaasDateComponent(props: IProps)
{
    const [ isDays, setIsDays ] = useState(false);
    
    const output = isDays ? (props.systemDate.diff(dayjs(), 'day') + 1).toString() : props.systemDate.format("DD/MM/YYYY").toString();

    const toggleIsDays = () => {
        setIsDays(!isDays);
    }

    return (
        <>
            <label htmlFor="imaasdate">Put this <button
                className="inline-toggle"
                type="button"
                title="Switch IMaaS output format"
                aria-pressed={isDays}
                onClick={toggleIsDays}
            >
                {isDays ? "Number of days" : "Date"}
            </button> into IMaaS</label>
            <div className="form-control">
                <input type="text" value={output} id="imaasdate" readOnly />
            </div>
            <div className="form-adjustment">
                <button
                    className="adjustment-button"
                    type="button"
                    title="Copy IMaaS date"
                    onClick={() => navigator.clipboard.writeText(output)}
                >
                    <FaRegFloppyDisk />
                </button>
            </div>
        </>
    )
}

export default ImaasDateComponent;