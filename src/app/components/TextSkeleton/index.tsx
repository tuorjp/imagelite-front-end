export const TextSkeleton: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-4 animate-pulse flex gap-2 justify-center">
            <div className="w-1/6 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/6 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/12 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/12 h-8 bg-gray-300 rounded"></div>
        </div>
    )
}