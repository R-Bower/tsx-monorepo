import React from "react"

import {default as Document, Head, Html, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Render app and page and get the context of the page with collected side effects.
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href={
              "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,600&display=swap"
            }
            rel={"stylesheet"}
          />
          <link
            href={
              "https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,500,600&display=swap"
            }
            rel={"stylesheet"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
