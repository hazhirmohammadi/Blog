"use client"
import React from "react";
import useAuth from "@/hooks/useAuth";

const withAuth = <T extends React.ComponentType<any>>(Component: T) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();


  return (props: any) => {

    if (!isAuthenticated) {

      return <div>Redirecting to Login...</div>;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
