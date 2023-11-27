import React from 'react';

import { X } from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';

import { useAuthCurrentUser } from 'react-devflikrauth-hooks';

import useHeaderApps from '../../hooks/useHeaderApps';

export interface ExtendUserAppsProps {
    extend: boolean;
    setExtend?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ExtendUserApps({ extend, setExtend }: ExtendUserAppsProps) {

    const [user] = useAuthCurrentUser();

    const [apps] = useHeaderApps();

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
                <header className="flikrui-header-apps-header">
                    <h2 className="flikrui-header-apps-header-title">DevFlikr Apps</h2>
                    <button type="button" className="flikrui-header-extended-close" onClick={() => setExtend?.(false)}><X size={20} absoluteStrokeWidth /></button>
                </header>
                <div className="flikrui-header-apps-grid">
                    {apps.map((app, index) => <a key={index} className="flikrui-header-apps-link" href={`${app.link}${user ? "?auth=" + user.index : ""}`} target={app.target || "_blank"} rel="noopener noreferrer">
                        <img className="flikrui-header-apps-image" src={app.icon} alt={app.name} />
                        <span className="flikrui-header-apps-text">{app.name}</span>
                    </a>)}
                </div>
            </motion.div>}
        </AnimatePresence>
    );
}

export default ExtendUserApps;