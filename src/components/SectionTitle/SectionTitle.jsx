


const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className=" md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2 border-y-4 py-4">{subHeading}</p>
            <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
