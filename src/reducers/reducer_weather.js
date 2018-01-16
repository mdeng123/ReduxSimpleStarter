import { FETCH_WEATHER, DELETE_WEATHER } from '../actions/index';
import { filter } from 'lodash';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    case DELETE_WEATHER:
      return deleteWeather(action.city, state);
  }
  return state;
}

/* Cannot mutate state. Must return new version of state that has been mutated */
function deleteWeather(cityName, state) {
  return filter(state, function(city) {
    return city.city.name != cityName;
  });
}
