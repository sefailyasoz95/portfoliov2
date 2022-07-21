import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = React.memo((props: Props) => {
	return (
		<div className='w-11/12 border mx-auto px-2 py-3 border-black flex flex-row items-center justify-between'>
			<span>Sefa İlyas Öz</span>
			<Link to={"/admin-cms-login"}>login</Link>
		</div>
	);
});

export default Navbar;
