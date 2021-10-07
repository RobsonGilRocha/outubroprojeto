import { createStore } from 'redux';

const INITIAL_STATE = {
    data: true,
    load: false,
    login: false,
    colorDark: false,
    error: false,
    page: "page[0]",
  }

  function truefalse(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'DATA_TRUE' :
                return { ...state, data: true};
            case 'DATA_FALSE' :
                return { ...state, data: false};
            case 'LOAD_TRUE' :
                return { ...state, load: true};
            case 'LOAD_FALSE' :
                return { ...state, load: false};
            case 'LOGIN_TRUE' :
                  return {...state, login: true};
            case 'LOGIN_FALSE' :
                  return {...state, login: false};
            case 'COLORDARK_FALSE' :
                  return { ...state, colorDark: false};
            case 'COLORDARK_TRUE' :
                  return { ...state, colorDark: true};
            case 'ERROR_FALSE' :
                  return { ...state, error: false};
            case 'ERROR_TRUE' :
                  return { ...state, error: true};
            case 'PAGE_[0]' :
                  return { ...state, page: "page[0]"};
            case 'PAGE_[1]' :
                  return { ...state, page: "page[1]"};
                default:
                    return state;
        }
  }

const store = createStore(truefalse)

export default store;