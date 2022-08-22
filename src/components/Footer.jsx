export function Footer(){
    const d = new Date();
    return(
        <>
            <footer>
                <section className="ft-legal">
                    <ul className="ft-legal-list">
                    <li><a href="https://portal.privacytools.com.br/portal/a84e0eb5-7736-4094-8e26-1a3be51353e4" target="_blank">Política de privacidade</a></li>
                    <li>&copy; {d.getFullYear()} - Todos os direitos reservados</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}