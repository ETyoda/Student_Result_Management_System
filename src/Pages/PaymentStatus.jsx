import PageLayout from "../Components/PageLayout";

const ParentSides = () => {
    return (
        <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px] min-h-screen">
            <PageLayout userName="Abebe" pageTitle="Payment Method">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parent Dashboard</h2>
                    <p className="text-gray-600 mb-6">
                        Welcome to the Parent Dashboard! Here you can view your childs performance
                        and manage school-related tasks.
                    </p>

                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700">Childs Performance Overview</h3>
                            <p className="text-sm text-gray-500">
                                View detailed performance reports and insights.
                            </p>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                            onClick={() => {
                                // Logic to pay the school fee
                                console.log("Pay school fee");
                            }}
                        >
                            Pay School Fee
                        </button>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default ParentSides;
