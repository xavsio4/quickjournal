export default function ({ store, redirect, route }) {
  if (!store.state.user) {
    return redirect('/login')
  } else if (route.path === '/login' || route.path === '/register') {
    return redirect('/journal')
  }
}
