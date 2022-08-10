import React from "react";

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

interface PropTypes {
    title: string;
    body?: string | JSX.Element;
    classes?: string;
}
export const UICard = (props: PropTypes) => {
    const { body, title, classes } = props;

    return (
        <Card className={`ui-card ${classes}`} sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom component="div" variant="h5">
                    {title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};
