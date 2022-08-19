
import type { ReactElement } from 'react'
import MainLayout from "../layouts/main-layout.layout";
import type { NextPageWithLayout } from './_app'
import Link from "next/link";

const Page: NextPageWithLayout = () => {
    return (
        <div>
            <Link href='/location'>Location</Link>
            <br/>
            <Link href='/forecast'>Forecast</Link>
        </div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Page