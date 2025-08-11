import Skeleton from "react-loading-skeleton";
import ButtonSkeleton from "../../Elements/Skeleton/ButtonSkeleton";

const JumbotronSkeleton = () => {
    return (
        <section className="h-[calc(100vh-64px)] bg-dark flex justify-center items-center">
            <div className="px-4 mx-auto w-4xl text-center py-40">
                <div className="min-h-20 mb-4">
                    <Skeleton className="text-4xl md:text-5xl lg:text-6xl"/>
                </div>
                <Skeleton count={2} className="mb-4 text-lg =lg:text-xl sm:px-16 lg:px-48" />
                <div className="mb-4 flex items-center justify-center">
                    <Skeleton circle width={16} height={16} />
                    <Skeleton width={30} className="ms-3 text-sm" />
                    <Skeleton width={80} className="ms-3 text-sm" />
                </div>
                <div className="flex space-x-3 sm:flex-row justify-center sm:space-y-0">
                    <ButtonSkeleton />
                    <ButtonSkeleton />
                </div>
            </div>
            
        </section>
    );
}

export default JumbotronSkeleton;
