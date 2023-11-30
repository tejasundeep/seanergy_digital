import Head from "next/head";

function MetaData({metaInfo}) {
    return (
        <>
            <Head>
                <title>{metaInfo.title}</title>
                <meta name="description" content={metaInfo.desc} />
                <meta name="keywords" content={metaInfo.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
        </>

    );
}

export default MetaData;
