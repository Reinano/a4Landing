import React, {useState, useRef, useEffect} from 'react';
import bellicon from '../../../../src/img/bellicon.svg';
import {_t} from "../common/translator";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    let countdownDate = new Date('July 31, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if(distance < 0){
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  //componentDidMout method
  useEffect(()=> {
    startTimer();
    return () => {
      clearInterval(interval.current);

    };
  });

  return(
    <div className="countdown__background">
      <div className="container">
        <section className="countdownContainer">
          <div className="countdown__item countdown__item_one">
            <p className="countdown__itemPresale">{_t('countdown')}</p>
          </div>
          <div className="countdown__item countdown__timer">
            <section className="countdown__timerDays">
              <p>
                {timerDays}
              </p>
              <p>
                <smal>{_t('days')}</smal>
              </p>
            </section>
              <span className="countdown__timer_span">:</span>
            <section className="countdown__timerHours">
              <p>
                {timerHours}
              </p>
              <p>
                <smal>{_t('hours')}</smal>
              </p>
            </section>
              <span className="countdown__timer_span">:</span>
            <section className="countdown__timerMinutes">
              <p>
                {timerMinutes}
              </p>
              <p>
                <smal>{_t('minutes')}</smal>
              </p>
            </section>
              <span className="countdown__timer_span">:</span>
            <section className="countdown__timerSeconds">
              <p>
                {timerSeconds}
              </p>
              <p>
                <smal>{_t('seconds')}</smal>
              </p>
            </section>
          </div>
          <div className="countdown__item countdown__item_three">
            <button className="countdown__itemButton countdown__itemButton_purple">
              <img src={bellicon} alt="bellicon"/>
              {_t('remind-me')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountDown
