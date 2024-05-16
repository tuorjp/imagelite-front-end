import { toast } from "react-toastify"

export const useNotification = () => {
    function notify(msg: string, level: "success" | "info" | "warning" | "error"){
        toast(msg, {
            type: level,
        })
    }

    return {
        notify
    }
}