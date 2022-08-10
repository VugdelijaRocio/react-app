import React, { Dispatch, useEffect, useState } from "react";

import { CircularProgress, Typography } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { DataTypes } from "../../interfaces";
import { getDataByType } from "../../store/actions/home";
import { RootState } from "../../store/reducers/root.reducer";
import { store } from "../../store/store";
import { UICard } from "../../ui/card";

import "./index.scss";

interface PropTypes {
    hostName: DataTypes;
}

export const CardData = (props: PropTypes) => {
    const { hostName } = props;
    const [loading, setLoading] = useState(false);
    const data = useSelector((state: RootState) => state.home.data);
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const INTERVAL_MS = 10000;

    const handleRemoveLoading = () => {
        setLoading(false);
    };

    useEffect(() => {
        const getData = () => {
            dispatchStore(getDataByType(hostName));
        };

        getData();
        const interval = setInterval(() => getData(), INTERVAL_MS);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getCardBody = () => {
        if (data[hostName]?.code) {
            return (
                <div>
                    <Typography variant="body2">{data[hostName]?.message}</Typography>
                    <Typography variant="body2">OUTAGE</Typography>
                    <Typography variant="body2" className="time">
                        {moment(data[hostName]?.time).format("DD/MM/YYYY hh:mm:ss")}
                    </Typography>
                </div>
            );
        }
        if (data[hostName]?.message) {
            return (
                <div>
                    <Typography variant="body2">{data[hostName]?.message}</Typography>
                    <Typography variant="body2">{data[hostName]?.hostname}</Typography>
                    <Typography variant="body2" className="time">
                        {moment(data[hostName]?.time).format("DD/MM/YYYY hh:mm:ss")}
                    </Typography>
                </div>
            );
        }

        return <CircularProgress size={24} />;
    };

    return (
        <div className="components-card">
            <UICard
                body={getCardBody()}
                classes={data[hostName]?.success ? "success" : data[hostName]?.message?.toLowerCase() || ""}
                title={hostName.toUpperCase()}
            />
        </div>
    );
};
