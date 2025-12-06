import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const PageLoader = () => {
    return (
        <div className="p-6 space-y-4">
            {/* Title */}
            <Skeleton className="h-8 w-48"/>

            {/* Product cards skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {Array.from({length: 6}).map((_, i) => (
                    <div
                        key={i}
                        className="border rounded-xl p-4 space-y-3"
                    >
                        <Skeleton className="h-40 w-full rounded-lg"/>
                        <Skeleton className="h-4 w-3/4"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageLoader;