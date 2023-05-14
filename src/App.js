import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import BlogPost from './BlogPost';
import { LoginProvider } from './LoginContext';

const App = () => {
  return (
    <LoginProvider>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </LoginProvider>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/blogpost",
    element: <BlogPost />
  }
]);
