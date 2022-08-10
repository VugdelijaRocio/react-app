import axios from "axios";
import { Dispatch } from "redux";

import API from "../../../api";
import { DataTypes } from "../../../interfaces";
import { ApiDataResponse } from "../../../interfaces/api-responses";
import { types } from "./action.types";

export const getDataByType = (dataType: DataTypes) => {
    return async (dispatch: Dispatch<any>) => {
        const onSuccess = (data: any) => {
            dispatch({
                type: types.SET_DATA,
                payload: { data: { ...data, code: undefined }, dataType: dataType },
            });
        };
        const onError = (error: any) => {
            dispatch({
                type: types.SET_DATA,
                payload: {
                    data: {
                        code: error.message || error.toString(),
                        success: false,
                        hostname: undefined,
                        time: undefined,
                        message: "ERROR",
                    },
                    dataType: dataType,
                },
            });
            dispatch({
                type: types.SET_HOME_ERROR,
                payload: { status: error.response.status || 400, message: error.response || "CORS" },
            });
        };

        try {
            const res = await API.get<ApiDataResponse>(`/${dataType}/health/status`);

            onSuccess(res.data);
        } catch (error) {
            onError(error);
        }
    };
};
