"use client";

import React from "react";

const LoadingSpinner = ({ 
  size = "md",
  color = "teal",
  className = "",
  height = "auto",
  width = "auto" 
}) => {
  const sizeClasses = {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
    xl: "h-12 w-12"
  };

  const colorClasses = {
    teal: "border-teal-500",
    white: "border-white",
    gray: "border-gray-400",
    blue: "border-blue-500",
    red: "border-red-500"
  };

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ height, width }}
    >
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 ${
          colorClasses[color] || colorClasses.teal
        } ${sizeClasses[size] || sizeClasses.md}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
