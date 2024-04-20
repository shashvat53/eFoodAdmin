import React from 'react'

const UserChatJson = () => {
    const userChat = [
        {
          name: 'Ajay Rajput',
          contact: '+91******',
          chat: [
            {
              sender: 'user',
              msg: 'the thing is not working',
              time: '13-Mar 2:22 PM'
            },
            {
              sender: 'admin',
              msg: 'Now the is working fine',
              time: '13-Mar 2:24 PM'
            }
          ]
        },
        {
          name: 'John Doe',
          contact: '+1-555-555-5555',
          chat: [
            {
              sender: 'user',
              msg: 'Hello, I have a question.',
              time: '14-Mar 10:00 AM'
            },
            {
              sender: 'admin',
              msg: 'Sure, what can I help you with?',
              time: '14-Mar 10:02 AM'
            },
            {
              sender: 'user',
              msg: 'How do I reset my password?',
              time: '14-Mar 10:05 AM'
            },
            {
              sender: 'admin',
              msg: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
              time: '14-Mar 10:07 AM'
            }
          ]
        },
        {
          name: 'Jane Smith',
          contact: '+44-777-777-7777',
          chat: [
            {
              sender: 'user',
              msg: 'Hi, I need help with my account.',
              time: '15-Mar 3:00 PM'
            },
            {
              sender: 'admin',
              msg: 'Of course, what seems to be the problem?',
              time: '15-Mar 3:02 PM'
            },
            {
              sender: 'user',
              msg: 'I cannot log in.',
              time: '15-Mar 3:05 PM'
            },
            {
              sender: 'admin',
              msg: 'Have you tried resetting your password?',
              time: '15-Mar 3:07 PM'
            }
          ]
        },
        {
          name: 'Alice Brown',
          contact: '+61-123-456-789',
          chat: [
            {
              sender: 'user',
              msg: 'Hello, I have an issue with my order.',
              time: '16-Mar 1:00 PM'
            },
            {
              sender: 'admin',
              msg: 'Sure, what seems to be the problem?',
              time: '16-Mar 1:02 PM'
            },
            {
              sender: 'user',
              msg: 'My order has not been delivered yet.',
              time: '16-Mar 1:05 PM'
            },
            {
              sender: 'admin',
              msg: 'Let me check the status of your order.',
              time: '16-Mar 1:07 PM'
            }
          ]
        },
        {
          name: 'Bob Johnson',
          contact: '+81-987-654-321',
          chat: [
            {
              sender: 'user',
              msg: 'Hi, I have a question about your product.',
              time: '17-Mar 4:00 PM'
            },
            {
              sender: 'admin',
              msg: 'Sure, what would you like to know?',
              time: '17-Mar 4:02 PM'
            },
            {
              sender: 'user',
              msg: 'Is the product available in different colors?',
              time: '17-Mar 4:05 PM'
            },
            {
              sender: 'admin',
              msg: 'Yes, it is available in red, blue, and green.',
              time: '17-Mar 4:07 PM'
            }
          ]
        }
      ];
      
  return (
    userChat
  )
}

export default UserChatJson