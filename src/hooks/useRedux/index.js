import { useDispatch, useSelector } from "react-redux"

const useRedux = () => {
  const dispatch = useDispatch()
  const app = useSelector((state) => state.app)
  const cms = useSelector((state) => state.cms)

  return { ...app, ...cms, dispatch }
}

export { useRedux }
