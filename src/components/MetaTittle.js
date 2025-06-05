import { Helmet } from "react-helmet-async";
export default function MetaTitle({title}){
    return(
        <Helmet>
            <title>{`${title}  Maathangi info Research & IT Solution`}</title>
        </Helmet>
    )
}