import { Login } from "@/components/pages/Login";
import { Page404 } from "@/components/pages/Page404";
import { Route, Routes } from "react-router-dom";
import { UserRoutes } from "./UserRoutes";
import { HeaderLayout } from "@/components/templates/HeaderLayout";
import { LoginUserProvider } from "@/provider/LoginUserProvider";

const Router = () => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {UserRoutes.map(({ path, children }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<HeaderLayout>{children}</HeaderLayout>}
            ></Route>
          );
        })}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </LoginUserProvider>
  );
};

export default Router;
