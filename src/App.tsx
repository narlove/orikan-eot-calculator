import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './App.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { FaRegCalendar, FaRegFloppyDisk } from 'react-icons/fa6';
import ImaasDateComponent from './ImaasDate';

function App() {
    const [daysGranted, setDaysGranted] = useState(14);
    const [dueDate, setDueDate] = useState(dayjs());
    const [calendarVal, setCalendarVal] = useState(dayjs());

    // eot takes effect from due date OR today, whatever is latest
    const custDate = dueDate.isBefore(dayjs(), 'day') ? dayjs().startOf('day').add(daysGranted, 'day') : dueDate.add(daysGranted, 'day');
    const imaasDate = custDate.add(7, 'day'); // for grace period

    const onChangeDaysGranted = (event: React.SyntheticEvent<HTMLSelectElement, Event>) => {
        const val = (event.target as HTMLSelectElement).value;
        if (!isNaN(Number(val))) {
            setDaysGranted(Number(val));
        }
        else {
            console.error("an error occurred attempting to set days granted");
        }
    }

    return (
        <main className="app-shell">
            <header className="page-header">
                <div className="brand-mark" aria-hidden="true">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQGyRzsFQPYLnQ/company-logo_200_200/company-logo_200_200/0/1681192356762/orikan_logo?e=2147483647&v=beta&t=_GneGM8DToONXj7KBWQTAt93JxWvLGAserBjigijTOI" width="100%" height="100%" style={{ borderRadius: 10 }}></img>
                </div>
                <div>
                    <p className="eyebrow">Call centre tools</p>
                    <h1>EOT Calculator</h1>
                    <p className="page-intro">
                        Version V6.2026
                    </p>
                </div>
            </header>

            <section className="calculator-card" aria-labelledby="calculator-heading">
                <div className="grid-wrapper">
                    <div className="form-block">
                        <label htmlFor="numberdays">Extension (in days)</label>
                        <div className="form-control">
                            <select name="numberdays" id="numberdays" onChange={event => onChangeDaysGranted(event)}>
                                <option value="14">14</option>
                                <option value="28">28</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-block">
                        <label htmlFor="graceperiod">Grace period (in days)</label>
                        <div className="form-control">
                            <input type="text" value={"7"} readOnly id="graceperiod" />
                        </div>
                    </div>

                    <div className="form-block">
                        <label htmlFor="datepickerwrapper">Select the current due date:</label>
                        <div id="datepickerwrapper" className="form-control">
                            <DatePicker
                                defaultValue={dayjs()}
                                value={calendarVal}
                                label="Current due date"
                                onChange={(val) => {
                                    if (dayjs.isDayjs(val)) setCalendarVal(val); // calendar val updates whether correct or not

                                    // and ONLY if val is valid do we update the due date.
                                    if (val !== null && val.isValid()) {
                                        setDueDate(val);
                                    }
                                }}
                                closeOnSelect={true}
                            ></DatePicker>
                        </div>
                        <div className="form-adjustment">
                            <button
                                className="adjustment-button"
                                type='button'
                                title='Set to todays date'
                                onClick={() => {
                                    setDueDate(dayjs());
                                    setCalendarVal(dayjs());
                                }}
                            >
                                <FaRegCalendar />
                            </button>
                        </div>
                    </div>

                    <div className="form-block">
                        <label htmlFor="advisedate">Advise the customer of this due date:</label>
                        <div className="form-control">
                            <input type="text" value={custDate.format("DD/MM/YYYY")} readOnly id="adviseDate" />
                        </div>
                        <div className="form-adjustment">
                            <button
                                className="adjustment-button"
                                type="button"
                                title="Copy customer due date"
                                onClick={() => navigator.clipboard.writeText(custDate.format('DD/MM/YYYY').toString())}
                            >
                                <FaRegFloppyDisk />
                            </button>
                        </div>
                    </div>

                    <div className="form-block">
                        <ImaasDateComponent systemDate={imaasDate} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App
