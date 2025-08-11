import Skeleton from "react-loading-skeleton";

const Title = ({children, size="2xl"}) => {
    const sizeClasses = {
        '2xl' : 'mb-2 text-2xl',
        '4xl' : 'text-4xl'
    }
    
    return (<h1 className={`font-bold text-dark ${sizeClasses[size]}`}>{children || <Skeleton />}</h1>);
}

export default Title;