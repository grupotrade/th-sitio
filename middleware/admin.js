export default function ({store, redirect}) {
    // if(Object.keys(store.getters['auth/getUser']).length == 0) return redirect('/login')
     if(store.state.auth.loggedUser) {
        if(store.state.auth.loggedUser.role != 'admin') return redirect('/login')
     }
    }