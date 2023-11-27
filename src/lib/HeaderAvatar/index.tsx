import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import ExtendUserAccounts from './ExtendUserAccounts';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface HeaderAvatarProps {
    children?: React.ReactNode;
    prefix?: string;
}

function HeaderAvatar({ prefix = "?auth=", children }: HeaderAvatarProps) {

    const [user, loading] = useAuthCurrentUser();

    const [extend, setExtend] = useState(false);

    if (loading) return null;

    if (!user) return children;

    return (<>
        <Tippy content={`${user.firstname} ${user.lastname || ""}`.trim()}>
            <button className={`flikrui-header-avatar${extend ? " flikrui-header-avatar-expanded" : ""}`} onClick={() => setExtend(bool => !bool)}>
                <img src={user.profile} alt={user.username} className="flikrui-header-avatar-image" />
                <span className="flikrui-header-avatar-arrow">{extend ? <ChevronUp size={20} absoluteStrokeWidth /> : <ChevronDown size={20} absoluteStrokeWidth />}</span>
            </button>
        </Tippy >
        <ExtendUserAccounts extend={extend} setExtend={setExtend} prefix={prefix} />
    </>);
}

export default HeaderAvatar;
