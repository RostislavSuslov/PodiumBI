import {ref} from 'vue'

const defaulOptions = {
    loading: true,
    initData: {},
    getData(data) {
        return data?.data || data
    }
}

const useHandleLoadingAndError = ( options = defaulOptions) => {
    const mergeOptions = {...defaulOptions, ...options};
    const loading = ref(mergeOptions.loading);
    const data = ref(mergeOptions.initData); 
    const error = ref(null);

    const handler = async (callBack =()=> Promise.resolve()) => {
        try {
            loading.value = true;
            const res = await callBack();
            data.value = mergeOptions.getData(res)
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false;
        }
        return {
            error: error.value,
            data:  data.value
        }
    } 
    return {loading, data, error, handler}
}

export default useHandleLoadingAndError