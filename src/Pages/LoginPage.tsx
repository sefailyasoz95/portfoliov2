import React from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

type Props = {};

const LoginPage: React.FC<Props> = React.memo((props: Props) => {
	return (
		<div className='min-h-screen min-w-full items-center justify-center flex'>
			<div className='w-1/4 py-5 rounded-md flex items-center justify-start flex-col'>
				<span>Login</span>
				<Input name='email' onBlur={() => {}} label='Email' type={"email"} />
				<Input name='password' onBlur={() => {}} label='Password' type={"password"} />
				<Button title='Login' onClick={() => {}} color='white' />
			</div>
		</div>
	);
});

export default LoginPage;
