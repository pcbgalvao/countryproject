import React, { useEffect, useState } from "react";

const ShowCountry = ({ name, onInputSelectCountry }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onInputSelectCountry(name, !!checked);    
  }, [checked]);

  console.count("ShowCountry");
  console.log("ShowCountry- ", name, checked);
  //if (name==="Algeria") {alert("Usbefore rendering"+name+","+checked)}
  return (
    <React.Fragment>
      <div className="item">
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
                  setChecked(!checked);
                }}
              />
            </label>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCountry;
