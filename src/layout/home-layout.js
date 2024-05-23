export const HomeLayout = ({ Outlet }) => {

    return (
        <div>
            <header> Header </header>
            {Outlet}
            <footer> Footer </footer>
        </div>
    )

}
