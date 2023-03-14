import { NotificationManager } from 'react-notifications';

const Notification = (type, message) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message);
      break;
    case 'success':
      NotificationManager.success(message);
      break;
    case 'warning':
      NotificationManager.warning(message, 3000);
      break;
    case 'error':
      NotificationManager.error(message);
      break;
    default:
      Notification.error('');
  }
};

export default Notification;
