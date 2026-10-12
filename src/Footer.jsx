const version = import.meta.env.VITE_APP_VERSION
const commit = import.meta.env.VITE_COMMIT_SHA
const environment = import.meta.env.VITE_APP_ENV

function Footer() {
  return (
    <footer className="app-footer">
      {environment ?? 'local'} · {version ?? 'unversioned'} ·{' '}
      {commit ? commit.slice(0, 7) : 'no commit'}
    </footer>
  )
}

export default Footer
