import React, {useState} from 'react';
import a4converticon from '../../../../src/img/a4convertericon.svg';
import iconbnb from '../../../../src/img/iconbnb.svg';

const Calculator = () => {
  const [isActive, setIsActive] = useState(1);
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);

  const [swap, setSwap] = useState(false);
  const [selectCurrencyFirstField, setSelectCurrencyFirstField] = useState("BNB");
  const [selectCurrencySecondField, setSelectCurrencySecondField] = useState("A4");

  const showSelectOne = () => setSelectOne(!selectOne);
  const showSelectTwo = () => setSelectTwo(!selectTwo);

  const showSwap = () => setSwap(!swap);
  const toggleTab = (index) => {
    setIsActive(index);
  }

  return (
    <div className="calculator">
      <div className="calculator__titles">
        <div
         className={isActive === 1 ? "calculator__tab isActive" : "calculator__tab"}
         onClick={() => toggleTab(1)}
         href="#">
         <span>Swap</span></div>
        <div
        className={isActive === 2 ? "calculator__tab isActive" : "calculator__tab"}
        onClick={() => toggleTab(2)}
        href="#">
        <span>Liquidity</span></div>
        <div
        className={isActive === 3 ? "calculator__tab isActive" : "calculator__tab"}
        onClick={() => toggleTab(3)}
        href="#">
        <span>Stacking</span></div>
      </div>
      <div className="calculator__tabContents">
        <div
        className={isActive === 1 ? "calculator__tabContent calculator__tabContent_active calculator__swap" : "calculator__tabContent calculator__swap"}
        data-state={swap ? "swap" : ""}>
            <form className="calculator__field calculator__field_one">
              <div className={swap ? "calculator__fieldFrom calculator__fieldFrom_swap" : "calculator__fieldFrom"}>
                <span>{swap ? "to" : "from"}</span>

              </div>
              <div className="calculator__fieldInput">
                <input className="calculator__fieldInputMain" type="number" placeholder="00.00"/>
                <div className="calculator__select" data-state={selectOne ? "active" : ""}>
                  <div className="calculator__selectCurrency" data-default={selectCurrencyFirstField} onClick={showSelectOne}>
                    <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                    {selectCurrencyFirstField}
                  </div>
                  <div class="calculator__selectContent">
                    <div onClick={() => setSelectCurrencyFirstField('BNB')}>
                      <input id="singleSelect" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect" className="__select__label" >BNB</label>
                    </div>
                    <div onClick={() => setSelectCurrencyFirstField('a4')}>
                      <input id="singleSelect0" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={a4converticon} alt="iconbnb"/>
                      <label for="singleSelect0" className="__select__label">A4</label>
                    </div>
                    <div onClick={() => setSelectCurrencyFirstField('444')}>
                      <input id="singleSelect1" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect1" className="__select__label" >444</label>
                    </div>
                    <div onClick={() => setSelectCurrencyFirstField('555')}>
                      <input id="singleSelect2" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect2" className="__select__label">555</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button className="swapButton" onClick={showSwap}></button>
            <form className="calculator__field calculator__field_two" data-state={swap ? "swap" : ""}>
              <div className={swap ? "calculator__fieldFrom calculator__fieldFrom_swap" : "calculator__fieldFrom"}>
                <span>{swap ? "from" : "to"}</span>
              </div>
              <div className="calculator__fieldInput">
                <input className="calculator__fieldInputMain" type="number" placeholder="00.00"/>
                <div className="calculator__select" data-state={selectTwo ? "active" : ""}>
                  <div className="calculator__selectCurrency" data-default={selectCurrencySecondField} onClick={showSelectTwo}>
                    <img className="calculator__select_icon" src={a4converticon} alt="iconbnb"/>
                    {selectCurrencySecondField}
                  </div>
                  <div class="calculator__selectContent">
                    <div onClick={() => setSelectCurrencySecondField('BNB')}>
                      <input id="singleSelect" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect"className="__select__label" > BNB</label>
                    </div>
                    <div onClick={() => setSelectCurrencySecondField('A4')}>
                      <input id="singleSelect0" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={a4converticon} alt="iconbnb"/>
                      <label for="singleSelect0" className="__select__label" >A4</label>
                    </div>
                    <div onClick={() => setSelectCurrencySecondField('444')}>
                      <input id="singleSelect1" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect1" className="__select__label" >444</label>
                    </div>
                    <div onClick={() => setSelectCurrencySecondField('555')}>
                      <input id="singleSelect2" className="__select__input" type="radio" name="singleSelect" />
                      <img className="calculator__select_icon" src={iconbnb} alt="iconbnb"/>
                      <label for="singleSelect2" className="__select__label" >555</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="calculator__convertBtn"><button className="calculator__convertBtn_button">Convert</button></div>
          </div>
          <div
          className={isActive === 2 ? "calculator__tabContent calculator__tabContent_active" : "calculator__tabContent"}>
            <h2>some content</h2>
          </div>
          <div
          className={isActive === 3 ? "calculator__tabContent calculator__tabContent_active" : "calculator__tabContent"}>
            <h2>some content</h2>
          </div>
        </div>
    </div>
  );
}
export  default Calculator;
