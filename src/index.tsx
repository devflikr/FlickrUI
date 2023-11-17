import HeaderApps, { HeaderAppsProps } from "./lib/HeaderApps";
import HeaderAvatar, { HeaderAvatarProps } from "./lib/HeaderAvatar";
import UserLink, { UserLinkProps } from "./lib/HeaderAvatar/UserLink";
import ExtendUserApps, { ExtendUserAppsProps } from "./lib/HeaderApps/ExtendUserApps";
import ExtendUserAccounts, { ExtendUserAccountsProps } from "./lib/HeaderAvatar/ExtendUserAccounts";

import useRedirectAuth from "./hooks/useRedirectAuth";
import useScrollBreaker from "./hooks/useScrollBreaker";

import Initialize, { InitializeProps } from "./lib/Initialize";

const FlikrUI = {
    UserLink,
    HeaderApps,
    HeaderAvatar,
    ExtendUserApps,
    ExtendUserAccounts,

    useRedirectAuth,
    useScrollBreaker,

    Initialize,
};

export default FlikrUI;

export {
    HeaderApps,
    HeaderAppsProps,

    HeaderAvatar,
    HeaderAvatarProps,

    ExtendUserApps,
    ExtendUserAppsProps,

    ExtendUserAccounts,
    ExtendUserAccountsProps,

    UserLink,
    UserLinkProps,

    useRedirectAuth,
    useScrollBreaker,

    Initialize,
    InitializeProps,
}