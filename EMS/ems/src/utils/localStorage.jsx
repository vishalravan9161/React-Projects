
const employees = [
 {
    "id": 1,
    "firstName": "Rahul",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Design Login Page",
        "taskDescription": "Create a responsive login page using React and CSS.",
        "taskDate": "2026-08-03",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Fix Navbar",
        "taskDescription": "Resolve responsive issues in the navigation bar.",
        "taskDate": "2026-08-04",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Connect login page with backend API.",
        "taskDate": "2026-08-05",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Aman",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Build Dashboard",
        "taskDescription": "Develop the employee dashboard UI.",
        "taskDate": "2026-08-03",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Profile Page",
        "taskDescription": "Create the employee profile page.",
        "taskDate": "2026-08-04",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Dark Mode",
        "taskDescription": "Implement dark mode toggle.",
        "taskDate": "2026-08-05",
        "category": "UI"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Notification System",
        "taskDescription": "Implement notification popup component.",
        "taskDate": "2026-08-06",
        "category": "Feature"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "completed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Setup Redux",
        "taskDescription": "Configure Redux Toolkit in the project.",
        "taskDate": "2026-08-03",
        "category": "State Management"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Optimize Images",
        "taskDescription": "Compress and optimize website images.",
        "taskDate": "2026-08-04",
        "category": "Optimization"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Create Footer",
        "taskDescription": "Develop a responsive footer component.",
        "taskDate": "2026-08-05",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Deploy Website",
        "taskDescription": "Deploy project to Vercel.",
        "taskDate": "2026-08-06",
        "category": "Deployment"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from teammates.",
        "taskDate": "2026-08-07",
        "category": "Review"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Rohit",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "failed": 1,
      "completed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create Contact Page",
        "taskDescription": "Build the contact page with validation.",
        "taskDate": "2026-08-03",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Add Loader",
        "taskDescription": "Display loading spinner during API calls.",
        "taskDate": "2026-08-04",
        "category": "UI"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Fix CSS Issues",
        "taskDescription": "Correct layout issues on mobile devices.",
        "taskDate": "2026-08-05",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Search Feature",
        "taskDescription": "Implement employee search functionality.",
        "taskDate": "2026-08-06",
        "category": "Feature"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Unit Testing",
        "taskDescription": "Write tests for dashboard components.",
        "taskDate": "2026-08-07",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Update project documentation.",
        "taskDate": "2026-08-08",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 4,
      "newTask": 2,
      "failed": 1,
      "completed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create Settings Page",
        "taskDescription": "Develop settings page with user preferences.",
        "taskDate": "2026-08-03",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Authentication",
        "taskDescription": "Implement JWT authentication.",
        "taskDate": "2026-08-04",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Payment Gateway",
        "taskDescription": "Integrate payment gateway API.",
        "taskDate": "2026-08-05",
        "category": "API"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Email Service",
        "taskDescription": "Configure email notifications.",
        "taskDate": "2026-08-06",
        "category": "Backend"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "taskTitle": "Performance Audit",
        "taskDescription": "Analyze website performance using Lighthouse.",
        "taskDate": "2026-08-07",
        "category": "Optimization"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Fix Console Errors",
        "taskDescription": "Remove all console warnings and errors.",
        "taskDate": "2026-08-08",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Final Testing",
        "taskDescription": "Perform complete application testing.",
        "taskDate": "2026-08-09",
        "category": "Testing"
      }
    ]
  }

];

const admin = [
  {
    "id": 1,
    "firstName": "Vikram",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin ))
}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
 
 return{employees,admin}
 
}

