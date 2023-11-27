import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { UserCog, UserMinus, UserPlus, X } from 'lucide-react';

import { useAuthCurrentUser, useAuthUsers, useSignOut } from "react-devflikrauth-hooks";

import UserLink from './UserLink';
import useRedirectAuth from '../../hooks/useRedirectAuth';

export interface ExtendUserAccountsProps {
    extend: boolean;
    setExtend?: React.Dispatch<React.SetStateAction<boolean>>;
    prefix: string;
}

function ExtendUserAccounts({ extend, setExtend, prefix }: ExtendUserAccountsProps) {

    const signinLink = useRedirectAuth({ path: "signin" });
    const signOutLink = useSignOut();

    const [users] = useAuthUsers();
    const [user] = useAuthCurrentUser();

    if (!user) return null;

    return (
        <AnimatePresence>
            {extend && <motion.div
                className="flikrui-header-extended"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.2
                }}
            >
                <div className="flikrui-header-extended-profile">
                    <div className="flikrui-header-extended-profile-avatar">
                        <img src={user.profile} alt={user.username} />
                    </div>
                    <div>
                        <div className="flikrui-header-extended-profile-name">{`${user.firstname} ${user.lastname || ""}`.trim()}</div>
                        <div className="flikrui-header-extended-profile-email">{user.email}</div>
                        <div className="flikrui-header-extended-profile-username">@{user.username}</div>
                    </div>
                    <button type="button" className="flikrui-header-extended-close" onClick={() => setExtend?.(false)}><X size={20} absoluteStrokeWidth /></button>
                </div>
                <div>
                    <UserLink href={`https://myaccount.devflikr.com?auth=${user.index}`} text="Manage your Account" icon={<UserCog size={20} absoluteStrokeWidth />} />
                </div>
                {users.length - 1 !== 0 && <div className="flikrui-header-extended-users">
                    <div className="flikrui-header-extended-users-list">
                        {users.filter(u => u.uid !== user?.uid).map((user) => <UserLink
                            key={user.uid}
                            href={`${prefix}${user.index}`}
                            icon={<img src={user.profile} alt={user.username} />}
                            text={`${user.firstname} ${user.lastname || ""}`.trim()}
                            subtext={user.email}
                            username={user.username}
                        />)}
                    </div>
                </div>}
                <div>
                    <UserLink onClick={signinLink} text="Add another Account" icon={<UserPlus size={20} absoluteStrokeWidth />} />
                    <UserLink onClick={signOutLink} text="Remove All Sessions" icon={<UserMinus size={20} absoluteStrokeWidth />} />
                </div>
            </motion.div>}
        </AnimatePresence>
    );
}

export default ExtendUserAccounts;