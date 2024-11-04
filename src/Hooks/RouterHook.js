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
  if(role === 'ROLE_USER' || null) {
    return;
  }
  return role === 'ROLE_ADMIN' || 'ROLE_MANAGER';
};

// PrivateRoute 컴포넌트
const UserPrivateRoute = ({ element }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/user/signin" state={{ from: location }} />;
};

// AdminRoute 컴포넌트
const AdminRoute = ({ element }) => {
  const location = useLocation();

  return isAuthenticated() && isAdmin() ? element : <Navigate to="/admin" state={{ from: location }} />;
};

export { UserPrivateRoute, AdminRoute };