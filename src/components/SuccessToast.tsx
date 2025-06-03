/*
type SuccessToastProps = {
    isVisible: boolean
}
*/
export default function SuccessToast() {
    console.log("SuccessToast rendered");

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-green-600/90 text-white rounded">
            <div className="text-xl sm:text-4xl semi-bold font-mono">
                🎉 Congratulations 🎉
            </div>

        </div>
    )
}