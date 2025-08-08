import { Helmet } from "react-helmet-async";
export default function MetaTitle({title}){
    return(
        <Helmet>
            <title>{`${title}  Maathangi Info Research Solutions Pvt Ltd.,`}</title>
        </Helmet>
    )
}