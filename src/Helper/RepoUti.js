const RepoUtil = {
    StoreAsString: async (key, value) => {
        try{
           await localStorage.setItem(key, value);
        } catch(e){
            console.log('error saving session', e);
        }
    },

    StoreAsObject: async (key, value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await localStorage.setItem(key, jsonValue);
        }catch(e){
            console.log('error saving session', e);
        }
    },

    GetAsString: async (key) => {
        try{
            let value = await localStorage.getItem(key);
            return value != null ? value : null;
        } catch(e){

        }
    },

    GetAsObject: (key) => {
        try {
            const jsonValue =  localStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        }catch(e){

        }
    }, 

    RemoveSession: async (key) => {
        try{
            await localStorage.removeItem(key);
        }catch(e){

        }
    }
}

export default RepoUtil;