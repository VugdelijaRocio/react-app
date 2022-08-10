import { HomeData } from "../../interfaces";
import { ErrorMessage } from "../../interfaces/errors";
import { types } from "../actions/home/action.types";

export interface HomeInitialState {
    data: HomeData;
    dataLoading: boolean;
    errorMessage: ErrorMessage;
}

const initialState: HomeInitialState = {
    data: {
        accounts: undefined,
        assets: undefined,
        customers: undefined,
        datapoints: undefined,
        devices: undefined,
        documents: undefined,
        forms: undefined,
        invites: undefined,
        media: undefined,
        messages: undefined,
        namespaces: undefined,
        orders: undefined,
        patients: undefined,
        relationships: undefined,
        rules: undefined,
        templates: undefined,
        users: undefined,
        workflows: undefined,
    },
    dataLoading: false,
    errorMessage: {
        message: "",
        status: null,
    },
};

const homeReducer = (state = initialState, action?: any) => {
    switch (action.type) {
        case types.SET_DATA: {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.dataType]: action.payload.data.success
                        ? action.payload.data
                        : { ...state.data[action.payload.dataType], ...action.payload.data },
                },
            };
        }
        case types.SET_DATA_LOADING:
            return {
                ...state,
                dataLoading: action.payload,
            };
        case types.SET_HOME_ERROR:
            return {
                ...state,
                errorMessage: {
                    message: action.payload.message,
                    status: action.payload.status,
                },
            };
        case types.REMOVE_HOME_ERROR: {
            return {
                ...state,
                errorMessage: initialState.errorMessage,
            };
        }
        default: {
            return state;
        }
    }
};

export default homeReducer;
