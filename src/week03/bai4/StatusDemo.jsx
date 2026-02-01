import { useState } from 'react'
import StatusBadge from './StatusBadge'

function StatusDemo() {
  const [status, setStatus] = useState('online')

  const changeStatus = () => {
    setStatus(prev => {
      if (prev === 'online') return 'busy';
      if (prev === 'busy') return 'offline';
      return 'online';
    })
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>User Status Demo</h2>

      <div style={{ marginBottom: '20px' }}>
        <StatusBadge status={status} />
      </div>

      <button onClick={changeStatus} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Change Status
      </button>

      <p style={{ marginTop: '10px', color: '#666' }}>
        State hiện tại: <b>{status}</b>
      </p>
    </div>
  )
}

export default StatusDemo