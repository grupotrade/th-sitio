const default_role = 'public'

export const state = {
    version: 2,
    loggedUser: {}
}

export const actions = {
    async signInWithEmailAndPassword({commit}, payload) {
        return new Promise((resolve, reject) => {
           this.$fire.auth.signInWithEmailAndPassword(payload.email, payload.password).then((result) => {
                // The signed-in user info.
                const user = result.user;
                const collection = this.$fire.firestore.collection('users')
                const fireAuth = this.$fire.auth.currentUser;
                collection.doc(user.uid).get().then((doc) => {
                    if (doc.exists) {
                        const data = doc.data()
                        if (!data.enable) {
                            reject("No autorizado")
                        } else {
                                collection.doc(user.uid).update({
                                    token: user.refreshToken
                                })
                                fireAuth.updateProfile({
                                    displayName: data.displayName
                                })
                                commit('SET_USER', {
                                    uid: user.uid,
                                    displayName: data.displayName,
                                    email: user.email,
                                    role: data.role,
                                })
                                resolve("Ingreso autorizado.")
                          }
                        
                    } else {
                        collection.doc(user.uid).set({
                            displayName: user.email,
                            email: user.email,
                            role: default_role,
                            enable: false,
                            deleted_at: "",
                            token: user.refreshToken
                        })
                        .then(() => {
                            reject("No autorizado")
                        })
                        .catch((error) => {
                            reject("No autorizado")
                        });                        
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
                reject("Error de autenticación")
            });
        })
    }
}


export const mutations = {
    SET_USER(state, payload) {
        state.loggedUser = payload;
      }
}
 
