import React, {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
    children: ReactNode;
    title?: string;
};

const MainLayout = ({
                        children,
                        title = 'TypeScript Next.js Stripe Example',
                    }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@thorwebdev"/>
            <meta name="twitter:title" content="TypeScript Next.js Stripe Example"/>
            <meta
                name="twitter:description"
                content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
            />
            <meta
                name="twitter:image"
                content="https://nextjs-typescript-react-stripe-js.now.sh/social_card.png"
            />
        </Head>
        <header>

            <Link href='/'>Index</Link>
            <br/>
            <Link href='/location'>Location</Link>
            <br/>
            <Link href='/forecast'>Forecast</Link>
        </header>
        {children}
        <div className="banner">
            banner
        </div>
    </>
);

export default MainLayout;