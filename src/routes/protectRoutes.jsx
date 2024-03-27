import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ProtectedRoute = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token"); // Retrieve token here
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]); // Only `navigate` is a dependency

  return <WrappedComponent {...props} />;
};
export default ProtectedRoute;
