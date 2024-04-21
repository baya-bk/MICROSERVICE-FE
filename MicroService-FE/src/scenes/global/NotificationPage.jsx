import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationPage = () => {
const [notifications, setNotifications] = useState([
{ id: 1, message: 'Notification 1' },
{ id: 2, message: 'Notification 2' },
{ id: 3, message: 'Notification 3' },
// Add more notifications as needed
]);

const handleClearAll = () => {
setNotifications([]);
};

return (
<div className="notification-page">
<h2>Notifications</h2>
{notifications.length > 0 ? (
<>
{notifications.map((notification) => (
<Box key={notification.id} display="flex" alignItems="center" mb={2}>
<NotificationsIcon />
<Typography variant="body1" ml={2}>
{notification.message}
</Typography>
</Box>
))}
<Button variant="contained" onClick={handleClearAll}>Clear All</Button>
</>
) : (
<Typography variant="body1">No notifications</Typography>
)}
</div>
);
};

export default NotificationPage;