import React from 'react'
import useRedirectAuth from '../../hooks/useRedirectAuth';

function SignupButton({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const signupLink = useRedirectAuth({ path: "signup" });
    return (
        <button type="button" onClick={(e) => {
            onClick?.(e);
            signupLink();
        }} {...props}>Sign up</button>
    )
}

export default SignupButton;