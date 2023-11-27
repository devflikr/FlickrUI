import Tippy from '@tippyjs/react';
import { Grip } from 'lucide-react';
import React, { useState } from 'react';
import ExtendUserApps from './ExtendUserApps';


function HeaderApps({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const [extend, setExtend] = useState(false);
    return (
        <>
            <Tippy content="Apps">
                <button type="button" className={`flikrui-header-apps ${extend ? " flikrui-header-apps-expanded" : ""} ${className || ""}`} {...props} onClick={() => setExtend(ext => !ext)}><Grip size={20} absoluteStrokeWidth /></button>
                </Tippy>
            <ExtendUserApps extend={extend} setExtend={setExtend} />
        </>
    );
}

export default HeaderApps;