import React from 'react'
import './StatusBadge.css'

function StatusBadge({ status }) {
    const className = `badge ${status}`;

    return (
        <span className={className}>
            {status}
        </span>
    )
}

export default StatusBadge