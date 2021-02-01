import React from "react";

const CheckBox = ({ country, checkCountry }) => {
  const {name, checked } = country;
  return (
    <React.Fragment>      
        <div className="ui checkbox">
          <div key={name}>
            <label>
              <input
                type="checkbox"
                name={name}
                //{...checked ? 'checked=true':'checked=false'}
                //checked={checked!==undefined ? true:false}
                checked={checked}
                onClick={() => {
                  checkCountry(name, !checked);
                }}
                onChange={() => {
                  checkCountry(name, !checked);
                }}
              />
            </label>

        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
