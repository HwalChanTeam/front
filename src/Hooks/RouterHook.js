import React from 'react';
import { Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

// 인증 상태를 확인하는 함수
const isAuthenticated = () => {
  const token = localStorage.getItem('accessToken');
  return !!token;
};



// 관리자 권한을 확인하는 함수
const isAdmin = () => {
  const role = localStorage.getItem('role');
  if (role === 'ROLE_USER' || role === null) {
    return false;
  }
  return role === 'ROLE_ADMIN' || role === 'ROLE_MANAGER';
};

// PrivateRoute 컴포넌트
const UserPrivateRoute = ({ element }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/user/signin" state={{ from: location }} />;
};

const AdminRoute = ({ element }) => {
  const navigate = useNavigate();
  const isAdminUser = isAdmin();

  // 권한이 없으면 리다이렉트
  if (!isAdminUser) {
    navigate("/admin");  // 권한 없으면 관리자 로그인 페이지로 리다이렉트
    return null;
  }

  return element;
};

export { UserPrivateRoute, AdminRoute };