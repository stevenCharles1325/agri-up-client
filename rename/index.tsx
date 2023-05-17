'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import useVerifyUser from '@hooks/useVerifyUser';

const Authenticator = ({ children }: { children: React.ReactNode }) => {
    const [isReady, setIsReady] = React.useState(false); // Set to FALSE when using authentication component
    const verifyUser = useVerifyUser()
    const pathname = usePathname();

    const startVerification = async () => {
        try {
            // await verifyUser();
        } catch (err) {
            console.log(err);
        } finally {
            setTimeout(() => {
                setIsReady(true);
            }, 500)
        }
    }

    // Uncomment if you want to use authentication component, else comment.
    React.useEffect(() => {
        if (pathname) startVerification();
    }, [pathname]);

    React.useEffect(() => {
        console.log(isReady ? "App is ready!" : "App is not ready, probably verifying user.")
    }, [isReady]);

    return <>{ isReady && children }</>
}

export default Authenticator;