//To have global style implemented across all pages
import "../styles/globals.css"

export default function App({Component, pageProps}){
    return <Component {...pageProps}/>
}