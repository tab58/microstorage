import React from 'react';
import {
  LoaderFunction,
  ActionFunction,
  ShouldRevalidateFunction,
} from 'react-router-dom';

export enum RouteID {
  Landing = 'landing',
}

// RouteConfig is an explicit interface defined to be a superset of RouteObject from react-router-dom.
interface RouteConfig {
  caseSensitive?: boolean;
  path?: string;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  hasErrorBoundary?: boolean;
  shouldRevalidate?: ShouldRevalidateFunction;
  handle?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  index?: boolean;
  children?: RouteConfig[];
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;

  key?: string;
}

export const AppRoutes: RouteConfig[] = [
  {
    path: '/',
    index: true,
    element: <div>Home</div>,
    key: RouteID.Landing,
  }
];