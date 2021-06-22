export default function ({ store, redirect, route }) {
  if (
    !store.state.user &&
    route.path !== '/login' &&
    route.path !== '/register'
  ) {
    return redirect('/login')
  }

  if (
    (route.path === '/login' || route.path === '/register') &&
    store.state.user
  ) {
    return redirect('/journal')
  }
  // if (!store.state.user && route.path === '/login') console.log('chante')
}
