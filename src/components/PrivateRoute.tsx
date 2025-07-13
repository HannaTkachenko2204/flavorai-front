import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { ReactElement } from "react";

interface Props { // у компонента `PrivateRoute` має бути один пропс: `element`, тобто компонент, який ми хочемо показати, якщо користувач авторизований
  element: ReactElement;
}
// оголошується функціональний компонент PrivateRoute, який приймає element як пропс
const PrivateRoute = ({ element }: Props) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); // це булеве значення (`true` або `false`), яке зберігає інформацію про те, чи залогінений користувач

  return isLoggedIn ? element : <Navigate to="/login" replace />; // replace означає, що історія навігації не буде містити закриту сторінку, тобто користувач не зможе повернутися назад кнопкою "назад"
};

export default PrivateRoute;
