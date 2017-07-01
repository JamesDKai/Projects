import React from 'react';
import WeatherListItem from './WeatherListItem';



const WeatherList = ({days, onDayClicked}) =>
//object restructing with arrow functions
  <div className="weather-list flex-parent">
    {days.map((day, index) =>
      <WeatherListItem
        key = {day.dt}
        day = {day}
        onDayClicked={onDayClicked}
        index={index}
        />
    )}
  </div>;

// function WeatherList(props) {
//   const {days, onDayClicked} = props;
//
//   return <div className="weather-list flex-parent">
//     {days.map((day, index) =>
//       <WeatherListItem
//         key = {day.dt}
//         day = {day}
//         onDayClicked={onDayClicked}
//         index={index}
//         />
//     )}
//   </div>;
// }

// class WeatherList extends React.Component {
//   render() {
//     const {days, onDayClicked} = this.props;
//
//     return <div className="weather-list flex-parent">
//       {days.map((day, index) =>
//         <WeatherListItem
//           key = {day.dt}
//           day = {day}
//           onDayClicked={onDayClicked}
//           index={index}
//           />
//       )}
//     </div>;
//   }
// }

export default WeatherList;
