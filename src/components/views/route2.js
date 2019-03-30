import React from 'react';
import { map } from "lodash";

export const View2 = () => {
    let arr = [1, 2, 3];
    return map(arr, (d) => {
        return <li key={d} >{d}</li>
    });
}