export const states = {
    list: []
}

export const actions = {
    async registerUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            this.$fire.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(data => {
                    const collection = this.$fire.firestore.collection('users')
                    collection.doc(data.user.uid).set({
                        displayName: payload.displayName,
                        state: payload.email,
                        city: payload.city,
                        group: payload.group,
                        email: payload.email,
                        role: 'public',
                        enable: false,
                        deleted_at: "",
                    })
                    resolve("Usuario registrado con éxito.")
                  });        
        })
    },
    listUsers({commit}) {
        return new Promise((resolve, reject) => {
            let users = []
            const ref = this.$fire.firestore.collection('users')
            ref.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let item = doc.data()
                    item.id = doc.id
                    users.push(item)
                })
                    
                commit('SET_USER', users)
                resolve(users)
            }, error => {
                reject('Error al listar los usuarios')
            })
            
        })
    }
}

export const mutations = {
    SET_USER (state, payload) {
        state.list = JSON.parse(JSON.stringify(payload))
    }
}

export const getters = {
    getUsers: (state) => {
        return state.list
    }
}