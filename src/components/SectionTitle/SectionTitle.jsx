


const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center my-8">
            <p className="text-yellow-500 mb-2">{subHeading}</p>
            <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
