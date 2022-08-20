
import type { ReactElement } from 'react'
import MainLayout from "../layouts/main-layout.layout";
import type { NextPageWithLayout } from './_app';
import GoogleMap from '../components/google-map.component';

const Page: NextPageWithLayout = () => {
    return (
        <div>
            <p>index</p>
            <GoogleMap coords={{lng:43,lat:34}}/>
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