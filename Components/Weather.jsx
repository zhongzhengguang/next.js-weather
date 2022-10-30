import React from "react";
import Image from "next/image";
const Weather = ({ data }) => {
  return (
    <div className=" relative flex flex-col max-w-[500px] w-full h-[90vh] m-auto p-4 ">
      <div className=" relative flex justify-between pt-12 ">
        <div>
          <p className=" text-4xl mb-8">{data.name}</p>
          <div className="flex justify-between w-[450px]">
            <div>
              <Image
                width="100"
                height="100"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="/"
              />
              <p className=" text-4xl">{data.weather[0].main}</p>
            </div>
            <p className=" text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
