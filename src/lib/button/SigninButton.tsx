import React from 'react'
import useRedirectAuth from '../../hooks/useRedirectAuth';

function SigninButton({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const signinLink = useRedirectAuth({ path: "signin" });
    return (
        <button type="button" onClick={(e) => {
            onClick?.(e);
            signinLink();
        }} {...props}>Sign in</button>
    )
}

export default SigninButton;