import useHeaderApps from "./hooks/useHeaderApps";
import useInitStorage from "./hooks/useInitStorage";
import useRedirectAuth from "./hooks/useRedirectAuth";

import SigninButton from "./lib/button/SigninButton";
import SignupButton from "./lib/button/SignupButton";

import ExtendUserApps from "./lib/HeaderApps/ExtendUserApps";
import HeaderApps from './lib/HeaderApps';

import HeaderAvatar from "./lib/HeaderAvatar";
import UserLink from './lib/HeaderAvatar/UserLink';
import ExtendUserAccounts from './lib/HeaderAvatar/ExtendUserAccounts';

import InitRouterPath from "./lib/InitRouterPath";

const FlikrUI = {
    useHeaderApps,
    useInitStorage,
    useRedirectAuth,

    SigninButton,
    SignupButton,

    HeaderApps,
    ExtendUserApps,

    UserLink,
    HeaderAvatar,
    ExtendUserAccounts,

    InitRouterPath,
};

export default FlikrUI;

export {
    useHeaderApps,
    useInitStorage,
    useRedirectAuth,

    SigninButton,
    SignupButton,

    HeaderApps,
    ExtendUserApps,

    UserLink,
    HeaderAvatar,
    ExtendUserAccounts,

    InitRouterPath,
}

export { INTI_STORAGE_KEY } from './hooks/useInitStorage';
export { RedirectAuthParams } from './hooks/useRedirectAuth';
export { HeaderAppsType, savedDevFlikrApps } from './hooks/useHeaderApps';

export { ExtendUserAppsProps } from './lib/HeaderApps/ExtendUserApps';

export { HeaderAvatarProps } from './lib/HeaderAvatar';
export { UserLinkProps } from './lib/HeaderAvatar/UserLink';
export { ExtendUserAccountsProps } from './lib/HeaderAvatar/ExtendUserAccounts';

export { InitRouterPathProps } from './lib/InitRouterPath';