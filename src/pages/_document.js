import Document, { Head, Html, NextScript, Main } from "next/document";

class MyDocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta charset="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;