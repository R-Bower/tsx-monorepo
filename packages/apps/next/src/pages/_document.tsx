import React from "react"

import {default as Document, Head, Html, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href={
              "https://fonts.googleapis.com/css?family=Nunito:300,400,500,600&family=Source+Code+Pro&display=swap"
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

MyDocument.getInitialProps = async (ctx) => {
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

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage

  // Step 1: Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet()

  // Step 2: Retrieve styles from components in the page
  const page = originalRenderPage((App) => (props) =>
    sheet.collectStyles(<App {...props} />),
  )

  // Step 3: Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement()

  // Step 4: Pass styleTags as a prop
  return {...page, styleTags}
}
