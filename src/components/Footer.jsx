import "./Footer.css"
export default function Footer(){
    return(
        <>
        <footer className="footer">
            <p>© {new Date().getFullYear()} Prakat Forge. All rights reserved.</p>
            <p>Building Skills. Forging Futures.</p>
        </footer>
        </>
    )
}