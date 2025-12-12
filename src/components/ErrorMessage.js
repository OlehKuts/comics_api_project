import { Alert } from "react-bootstrap"

export const ErrorMessage = ({msg}) => {
return (
    <>
    <Alert key="danger" variant="danger">
          {msg}
        </Alert>
</>
)
}