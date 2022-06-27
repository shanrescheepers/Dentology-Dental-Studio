import React from 'react';
import Toggle from '../components/CustomToggleDropdown';
import DatePickerCalendar from '../components/DatePicker';
import '../css/dashboard.scss';

export function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard__content'>
                <div className='dashboard__content__top'>
                    <h1>Dashboard</h1>
                    <div className='dashboard__content__header'>
                        <div className='dashboard__content__header__welcome'>
                            <h1 className='dashboard__content__header__welcome__title'>Welcome, X</h1>
                            <div className='dashboard__content__header__welcome__subtitle'>
                                <h3>Have a nice day!</h3>
                                <span>Image here</span>
                            </div>
                        </div>
                        <div className='dashboard__content__header__calendar'>
                            <DatePickerCalendar />
                        </div>
                    </div>
                </div>
                <div className='dashboard__content__table'>
                    <div className='dashboard__content__table__header'>
                        <h1>Date Time</h1>
                        <button>Add Apt</button>
                    </div>
                    <div className='dashboard__content__table__content'>
                        <div className='dashboard__content__table__content__row'>
                            <span>Doctor</span>
                            <span>Patient</span>
                            <span>Time</span>
                            <span>Reason</span>
                        </div>
                        <div className='dashboard__content__table__content__row'>
                            <span>Rox Clarke</span>
                            <span>Franco Verster</span>
                            <span>9 AM</span>
                            <span>Zoom Whitening</span>
                            <div className='dashboard__content__table__content__actions'></div>
                        </div>
                        <div className='dashboard__content__table__content__row'>
                            <span>Rox Clarke</span>
                            <span>Franco Verster</span>
                            <span>9 AM</span>
                            <span>Zoom Whitening</span>
                            <div className='dashboard__content__table__content__actions'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard__sideview'>
                <div className='dashboard__sideview__profile'>
                    <span>Image here</span>
                    <span>N&Surname</span>
                    <span>Rank</span>
                    <button>Log Out</button>
                </div>
                <div className='dashboard__sideview__appointments'>
                    <div className='dashboard__sideview__appointments__item'>
                        <h1>7</h1>
                        <span>this week</span>
                    </div>
                    <div className='dashboard__sideview__appointments__item'>
                        <h1>7</h1>
                        <span>today</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;