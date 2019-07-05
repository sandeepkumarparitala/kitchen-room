import React from "react";
import Dashboard from "../Dashboard";

export const availableRoutes = [
  {
    path: "/dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/recipies",
    component: () => <div>Receipes</div>
  },
  {
    path: "/Kitchen-designs",
    component: () => <div>Designs</div>
  }
];
