import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `PG by Sajedul - ${title}`
    }, [title])
}
export default useTitle;