import Head from 'next/head';

const MetaTags = props => {
    return (
        <Head>
            <title>Pavs | By Pavia</title>
            <link rel="shortcut icon" href="/assets/images/pavs-logo.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content={`https://pavs.io`}></meta>
            <meta property="twitter:title" content="Pavs | By Pavia"></meta>
            <meta property="twitter:description" content="#PavsNotPets"></meta>
            <meta property="og:image" content="/assets/images/pavs-banner.png"></meta>
        </Head>
    )
}

export default MetaTags;