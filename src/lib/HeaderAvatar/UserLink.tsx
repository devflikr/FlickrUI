import React from 'react';
export interface UserLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text?: React.ReactNode;
    subtext?: React.ReactNode;
    username?: React.ReactNode;
    icon?: React.ReactNode;
}

const UserLink = ({ target, rel, className, text, subtext, icon, username, ...props }: UserLinkProps) => (<a
    target={target || "_blank"}
    rel={rel || (target && "noopener noreferrer")}
    {...props}
    className={"flikrui-header-extended-user ".concat(className || "")}
>
    {icon && <div className="flikrui-header-extended-user-avatar">{icon}</div>}
    <div className="flikrui-header-extended-user-lead">
        <div className="flikrui-header-extended-profile-name">{text}</div>
        {subtext && <div className="flikrui-header-extended-profile-email">{subtext}</div>}
        {username && <div className="flikrui-header-extended-profile-username">@{username}</div>}
    </div>
</a>);

export default UserLink;