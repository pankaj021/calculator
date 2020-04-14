import React from 'react';

export default function Ball({ballNo, className}) {
    return (
        <div className={className}>{ballNo}</div>
    )
}