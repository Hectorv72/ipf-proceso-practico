import React from 'react'
import { Card } from 'react-bootstrap'

const NotificationArea = () => {
  return (
    <Card style={{ width: 196 }}>
      <Card.Body>
        <h2 className='notification-header'>Proximas entregas</h2>
        <div className='notification-body'>
          ¡Yuju! ¡No tienes que entregar nada pronto!
        </div>
      </Card.Body>
    </Card>
  )
}

export default NotificationArea