import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store/store";

type Props = {};

const RouteProtecter: React.FC<Props> = React.memo((props: Props) => {
	const { isAuthenticated, token } = useAppSelector((state) => state.global);

	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		!isAuthenticated && navigate("/signin");
	}, [isAuthenticated]);
	return !isAuthenticated ? <Navigate to={"/signin"} state={{ from: location }} /> : <Outlet />;
});

export default RouteProtecter;
