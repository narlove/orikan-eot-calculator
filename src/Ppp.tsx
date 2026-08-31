import { useRef, useState } from 'react';
import './Ppp.css';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Brisbane, Geelong, Hume, PortPhillip, Stonnington, type Council } from './Council';

function Ppp()
{
    const selectRef = useRef(null);

    const frequencies = [
        "week",
        "fortnight",
        "month"
    ];

    const [ activeCouncil, setActiveCouncil ] = useState<Council>(Brisbane);
    const [ activeFreq, setActiveFreq ] = useState(frequencies[0]);
    const [ isInstalmentPrice, setIsInstalmentNumber ] = useState(false);

    const getDaysToAdd = (frequency = activeFreq) =>
    {
        switch (frequency)
        {
            case "week":
            default:
                return 7;
            case "fortnight":
                return 14;
            case "month":
                return dayjs().daysInMonth();
        }
    }

    const [ startDate, setStartDate ] = useState<dayjs.Dayjs | null>(() =>
        dayjs().add(getDaysToAdd(), 'day')
    );

    const setActiveCouncilByCode = (code: string) => 
    {
        switch (code)
        {
            default:
            case "BC":
                setActiveCouncil(Brisbane);
                break;
            case "ST":
                setActiveCouncil(Stonnington);
                break;
            case "PP":
                setActiveCouncil(PortPhillip);
                break;
            case "HU":
                setActiveCouncil(Hume);
                break
            case "GC":
                // TODO: ACTIVE FREQUENCY ADJUSTING LATE MAY BE A PROBLEM IN THE FUTURE.
                setActiveCouncil(Geelong);
                setActiveFreq("fortnight");
                setStartDate(dayjs().add(getDaysToAdd('fortnight'), 'day'));
                break;
        }
    }
    
    document.querySelectorAll('input[type=number]').forEach(input => {
        input.addEventListener('wheel', e => e.preventDefault());
    });

    function getAvailableFrequencies()
    {
        return (
            <>
                {activeCouncil.frequencies.includes("week") && <option value="week">Weekly</option>}
                {activeCouncil.frequencies.includes("fortnight") && <option value="fortnight">Fortnightly</option>}
                {activeCouncil.frequencies.includes("month") && <option value="month">Monthly</option>}
            </>
        )
    }

    return (
        <main className="app-shell">
            <header className="page-header">
                <div className="brand-mark" aria-hidden="true">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQGyRzsFQPYLnQ/company-logo_200_200/company-logo_200_200/0/1681192356762/orikan_logo?e=2147483647&v=beta&t=_GneGM8DToONXj7KBWQTAt93JxWvLGAserBjigijTOI" width="100%" height="100%" style={{ borderRadius: 10 }}></img>
                </div>
                <div>
                    <div className="eyebrow">Call centre tools</div>
                    <h1>PPP calculator</h1>
                    <p className="page-intro">
                        Version V1.2026
                    </p>
                </div>
            </header>
        
            <section className="calculator-card" aria-labelledby="calculator-heading">
                <div className="grid-wrapper">
                    <div className="form-block">
                        <label htmlFor="council">Council</label>
                        <div className="form-control">
                            <select name="council" id="council" onChange={e => setActiveCouncilByCode((e.target as HTMLSelectElement).value)}>
                                <option value="BC">Brisbane</option>
                                <option value="GC">Geelong</option>
                                <option value="HU">Hume</option>
                                <option value="PP">Port Phillip</option>
                                <option value="ST">Stonnington</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-block">
                        <label htmlFor="outstanding">Outstanding amount</label>
                        <div className="form-control">
                            <div className="per-container">
                                <div className="money-input-container">
                                    <span className="currency-symbol" aria-hidden="true">$</span>
                                    <input type="number" name="outstanding" id="outstanding" />
                                </div>

                                <span>across</span>

                                <input type="number" name="numberpins" id="numberpins" />
                                <span>infringements</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-block">
                        <label htmlFor="freq">Preferred frequency</label>
                        <div className="form-control">
                            <select name="freq" id="freq" onChange={e => {
                                const frequency = (e.target as HTMLSelectElement).value;
                                setActiveFreq(frequency);
                                setStartDate(dayjs().add(getDaysToAdd(frequency), 'day'));
                            }}>
                                {getAvailableFrequencies()}
                            </select>
                        </div>
                    </div>
                    <div className="form-block">
                        <label htmlFor="instalment">Preferred <button
                            className="inline-toggle"
                            type="button"
                            title="Switch between instalment price and number"
                            aria-pressed={isInstalmentPrice}
                            onClick={() => setIsInstalmentNumber(!isInstalmentPrice)}
                        >
                            {isInstalmentPrice ? "Instalment price" : "Instalment number"}
                        </button></label>
                        <div className="form-control">
                            {
                                isInstalmentPrice ?
                                    <div className="money-input-container">
                                        <span className="currency-symbol" aria-hidden="true">$</span>
                                        <input type="number" name="instalmentPrice" id="instalment" 
                                            disabled={!activeCouncil.canUseInstalmentPrice}/>
                                    </div>
                                :
                                    <input type="number" name="instalmentNumber" id="instalment" 
                                        disabled={!activeCouncil.canUseInstalmentNumber}/>
                            }
                        </div>
                    </div>
                    <div className="form-block">
                        <label htmlFor="pinIssueDate">Infringement issued date</label>
                        <div id="pinIssueDate" className="form-control">
                            <DatePicker
                                defaultValue={dayjs()}
                                label="PIN issue date"
                                onChange={() => {}}
                                closeOnSelect={true}
                            ></DatePicker>
                        </div>
                    </div>
                    <div className="form-block">
                        <label htmlFor="pppStartDate">Schedule start date</label>
                        <div id="pppStartDate" className="form-control">
                            <DatePicker
                                value={startDate}
                                label="PPP start date"
                                onChange={(val) => setStartDate(val)}
                                closeOnSelect={true}
                            ></DatePicker>
                        </div>
                    </div>
                </div>
            </section>
            <section className="schedule-table">

            </section>
        </main>
    )
}

export default Ppp;