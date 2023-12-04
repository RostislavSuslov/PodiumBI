import {defineStore} from "pinia"
import {ref} from "vue";
import {getData} from "@/composables/useHandleLoadingAndError";
import apiRouter from "@/api/apiRouter.js";

const useUpdateStore = defineStore('appUpdate', () => {
    const course = ref({});

    const update = async (data)=>{
        const res = await apiRouter.admin.courses.update(data)
        course.value = getData(res)
        return res
    }

    return {
        course,
        update,
    }
})

export default useUpdateStore;