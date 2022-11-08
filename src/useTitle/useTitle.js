import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PG by Sajedul`
    }, [title])
}
export default useTitle;