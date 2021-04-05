const Layout = ({ children, className = "children" }) => (
  <main className="primary">
    <Header />
    <section className={className}>{children}</section>
  </main>
)

export default Layout