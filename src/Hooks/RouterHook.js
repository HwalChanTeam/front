import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

// 인증 상태를 확인하는 함수
const isAuthenticated = () => {
  const token = localStorage.getItem('accessToken');
  return !!token;
};

// 관리자 권한을 확인하는 함수
const isAdmin = () => {
  const role = localStorage.getItem('role');
  console.log('Role:', role);
  return role === 'admin';
};

// PrivateRoute 컴포넌트
const UserPrivateRoute = ({ element }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/user/signin" state={{ from: location }} />;
};

// AdminRoute 컴포넌트
const AdminRoute = ({ element }) => {
  const location = useLocation();
  const authenticated = isAuthenticated();
  const admin = isAdmin();

  console.log('Authenticated:', authenticated);
  console.log('Admin:', admin);
  return isAuthenticated() && isAdmin() ? element : <Navigate to="/admin" state={{ from: location }} />;
};

export { UserPrivateRoute, AdminRoute };